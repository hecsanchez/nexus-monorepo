import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Switch,
  toast,
  Dialog,
} from "@nexus/ui";
import { useParams } from "react-router";
import { useApiQuery, useApiMutation } from "@/hooks/useApi";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Workflow {
  id: string;
  name: string;
  createdAt: string;
  department: { name: string };
  nodes: unknown[];
  logs: unknown[];
  exceptions: unknown[];
  timeSavedPerExecution?: number;
  moneySavedPerExecution?: number;
  status?: string;
}

const ClientWorkflows = () => {
  const { id } = useParams();
  const {
    data: workflows,
    isLoading,
    isError,
  } = useApiQuery<Workflow[]>(
    ["client-workflows", id?.toString() || ""],
    `/clients/${id}/workflows`
  );
  const queryClient = useQueryClient();
  const updateWorkflowMutation = useApiMutation<
    void,
    {
      workflowId: string;
      timeSavedPerExecution?: number;
      moneySavedPerExecution?: number;
      status?: string;
    }
  >(`/clients/${id}/workflows/:workflowId`, "patch", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["client-workflows", id?.toString() || ""],
      });
      toast.success("Workflow updated");
    },
  });
  const [edit, setEdit] = useState<
    Record<string, { timeSaved?: string; moneySaved?: string }>
  >({});
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    stepId?: string;
    nextStatus?: boolean;
  } | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !workflows) return <div>Error loading workflows.</div>;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Workflows</CardTitle>
        <Button>Add Workflow</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Create Date</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Workflow Name</TableHead>
              <TableHead># of Nodes</TableHead>
              <TableHead># of Executions</TableHead>
              <TableHead># of Exceptions</TableHead>
              <TableHead>Time Saved</TableHead>
              <TableHead>$ Saved</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workflows.length === 0 && (
              <TableRow>
                <TableCell colSpan={10}>No workflows found.</TableCell>
              </TableRow>
            )}
            {workflows.map((w) => (
              <TableRow key={w.id}>
                <TableCell>
                  {new Date(w.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{w.department?.name || "—"}</TableCell>
                <TableCell>{w.name}</TableCell>
                <TableCell>{w.nodes?.length ?? 0}</TableCell>
                <TableCell>
                  <a href="#" className="text-primary underline cursor-pointer">
                    {w.logs?.length ?? 0}
                  </a>
                </TableCell>
                <TableCell>
                  <a href="#" className="text-primary underline cursor-pointer">
                    {w.exceptions?.length ?? 0}
                  </a>
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    className="w-16 border rounded px-1 text-right font-mono"
                    value={
                      edit[w.id]?.timeSaved ?? w.timeSavedPerExecution ?? ""
                    }
                    onChange={(e) =>
                      setEdit({
                        ...edit,
                        [w.id]: {
                          ...edit[w.id],
                          timeSaved: e.target.value,
                          moneySaved:
                            edit[w.id]?.moneySaved ??
                            w.moneySavedPerExecution?.toString() ??
                            "",
                        },
                      })
                    }
                    onBlur={(e) => {
                      if (
                        e.target.value !== "" &&
                        e.target.value !==
                          (w.timeSavedPerExecution ?? "").toString()
                      ) {
                        updateWorkflowMutation.mutate({
                          workflowId: w.id,
                          timeSavedPerExecution: Number(e.target.value),
                        });
                      }
                    }}
                  />
                  <span className="ml-1 text-xs text-muted-foreground">
                    min
                  </span>
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    className="w-16 border rounded px-1 text-right font-mono"
                    value={
                      edit[w.id]?.moneySaved ?? w.moneySavedPerExecution ?? ""
                    }
                    onChange={(e) =>
                      setEdit({
                        ...edit,
                        [w.id]: {
                          ...edit[w.id],
                          moneySaved: e.target.value,
                          timeSaved:
                            edit[w.id]?.timeSaved ??
                            w.timeSavedPerExecution?.toString() ??
                            "",
                        },
                      })
                    }
                    onBlur={(e) => {
                      if (
                        e.target.value !== "" &&
                        e.target.value !==
                          (w.moneySavedPerExecution ?? "").toString()
                      ) {
                        updateWorkflowMutation.mutate({
                          workflowId: w.id,
                          moneySavedPerExecution: Number(e.target.value),
                        });
                      }
                    }}
                  />
                  <span className="ml-1 text-xs text-muted-foreground">
                    USD
                  </span>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={w.status === "ACTIVE"}
                    onCheckedChange={(checked) =>
                      setConfirmDialog({
                        open: true,
                        stepId: w.id,
                        nextStatus: checked,
                      })
                    }
                    aria-label="Toggle workflow status"
                  />
                </TableCell>
                <TableCell className="flex gap-2">
                  <a href="#" className="text-primary underline cursor-pointer">
                    ROI
                  </a>
                  <a href="#" className="text-primary underline cursor-pointer">
                    Report
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {confirmDialog?.open && (
          <Dialog
            open={confirmDialog.open}
            onOpenChange={(open) => {
              if (!open) {
                setConfirmDialog(null);
              }
            }}
            title="Are you sure?"
            description={`Are you sure you want to mark this step as ${
              confirmDialog.nextStatus ? "active" : "inactive"
            }?`}
            onConfirm={() => {
              updateWorkflowMutation.mutate({
                workflowId: confirmDialog.stepId!,
                status: confirmDialog.nextStatus ? "ACTIVE" : "INACTIVE",
              });
              setConfirmDialog(null);
            }}
            onCancel={() => setConfirmDialog(null)}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ClientWorkflows;
