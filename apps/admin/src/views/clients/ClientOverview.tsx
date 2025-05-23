import { Button, Card, CardContent, CardHeader, CardTitle } from "@nexus/ui";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@nexus/ui";
import { Input } from "@nexus/ui";
import { SolutionsEngineerContactCard } from "@/components/SolutionsEngineerContactCard";
import { useParams } from "react-router";
import { useApiQuery, useApiMutation } from "@/hooks/useApi";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

// Define types for API data
interface SupportEngineer {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  phone?: string;
}
interface ClientUser {
  name: string;
  email: string;
  phone?: string;
  billing?: boolean;
  admin?: boolean;
  notes?: string;
}
interface DocumentLink {
  id: string;
  type: string;
  url: string;
}
interface PipelineStep {
  id: string;
  label: string;
  order: number;
  completedAt: string | null;
}
interface OverviewApi {
  assignedSEs: SupportEngineer[];
  clientUsers: ClientUser[];
  documents: DocumentLink[];
  pipeline: PipelineStep[];
}

const ClientOverview = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    data: overview,
    isLoading,
    isError,
  } = useApiQuery<OverviewApi>(
    ["client-overview", id?.toString() || ""],
    `/clients/${id}/overview`
  );

  // Document editing state
  const [docEdits, setDocEdits] = useState<Record<string, string>>({});
  const updateDocMutation = useApiMutation<
    void,
    { docId: string; url: string }
  >(
    `/clients/${id}/documents/:docId`,
    "patch",
    {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["client-overview", id?.toString() || ""] }),
    }
  );

  // Pipeline step completion
  const markStepMutation = useApiMutation<
    void,
    { stepId: string }
  >(
    `/clients/${id}/pipeline/:stepId`,
    "patch",
    {
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["client-overview", id?.toString() || ""] }),
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError || !overview) return <div>Error loading client data.</div>;

  const supportEngineers = overview.assignedSEs;
  const clientUsers = overview.clientUsers;
  const documentLinks = overview.documents;
  const pipelineSteps = overview.pipeline;
  const nextIncompleteIdx = pipelineSteps.findIndex((s) => !s.completedAt);

  return (
    <div className="flex flex-col gap-6">
      {/* Assigned Support Engineers */}
      <div>
        <div className="font-semibold mb-2">Assigned Support Engineers</div>
        <div className="flex gap-4 mb-6">
          {supportEngineers.length === 0 && (
            <div>No support engineers assigned.</div>
          )}
          {supportEngineers.map((se: SupportEngineer) => (
            <SolutionsEngineerContactCard
              key={se.email}
              name={se.name}
              email={se.email}
              avatar={se.avatar}
              role={se.role}
              phone={se.phone}
            />
          ))}
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client Users Table */}
        <Card className="lg:col-span-2 p-0 gap-0">
          <CardHeader className="px-6 py-5 gap-0">
            <CardTitle className="font-medium">Client Users</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#FAF9F8] border-t">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Billing</TableHead>
                  <TableHead>Admin</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientUsers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6}>No client users found.</TableCell>
                  </TableRow>
                )}
                {clientUsers.map((user: ClientUser) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone || "—"}</TableCell>
                    <TableCell>{user.billing ? "✓" : "—"}</TableCell>
                    <TableCell>{user.admin ? "✓" : "—"}</TableCell>
                    <TableCell>{user.notes || ""}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-medium">Document Links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {documentLinks.length === 0 && <div>No documents found.</div>}
            {documentLinks.map((doc: DocumentLink) => (
              <div key={String(doc.id)} className="flex flex-col items-start gap-2">
                <div className="text-xs text-muted-foreground mb-1 w-32">
                  {doc.type}
                </div>
                <Input
                  value={docEdits[doc.id] ?? doc.url}
                  onBlur={() =>
                    updateDocMutation.mutate({
                      docId: doc.id,
                      url: docEdits[doc.id] ?? doc.url,
                    })
                  }
                  onChange={(e) =>
                    setDocEdits({ ...docEdits, [doc.id]: e.target.value })
                  }
                  className="text-xs flex-1"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {pipelineSteps.map((step, idx) => (
              <div key={step.id} className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    step.completedAt
                      ? "bg-[#059669] text-white border-[#059669]"
                      : "bg-[#E9E7E4] text-muted-foreground border-[#E9E7E4]"
                  }`}
                >
                  {step.completedAt ? <FaCheck className="w-4 h-4" /> : <div className="w-4 h-4 border-2 border-[#757575] rounded-full" />}
                </span>
                <div className="flex flex-col">
                  <span>
                  {step.label}
                  </span>
                  {step.completedAt && (
                    <span className="text-xs text-muted-foreground">
                      Completed on{" "}
                      {new Date(step.completedAt).toLocaleDateString()}
                    </span>
                  )}
                  {!step.completedAt && idx === nextIncompleteIdx && (
                    <Button
                      className="w-32 font-normal"
                      disabled={markStepMutation.isPending}
                      onClick={() => markStepMutation.mutate({ stepId: step.id })}
                    >
                      Mark Complete
                    </Button>
                  )}
                </div>
                
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientOverview;
