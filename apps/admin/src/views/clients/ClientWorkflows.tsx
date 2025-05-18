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
} from "@nexus/ui";
import { useParams } from "react-router";
import { useApiQuery } from "@/hooks/useApi";

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
  } = useApiQuery<Workflow[]>(['client-workflows', id?.toString() || ''], `/clients/${id}/workflows`);

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
                <TableCell>{new Date(w.createdAt).toLocaleDateString()}</TableCell>
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
                  <span className="font-mono">{w.timeSavedPerExecution ?? 0}</span>
                  <span className="ml-1 text-xs text-muted-foreground">min</span>
                </TableCell>
                <TableCell>
                  <span className="font-mono">{w.moneySavedPerExecution ?? 0}</span>
                  <span className="ml-1 text-xs text-muted-foreground">USD</span>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      w.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {w.status || "—"}
                  </span>
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
      </CardContent>
    </Card>
  );
};

export default ClientWorkflows;
