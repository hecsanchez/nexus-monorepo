import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@nexus/ui";
import { useApiQuery } from "@/hooks/useApi";
import { useState, useMemo } from "react";

interface Workflow {
  id: string;
  name: string;
}

interface ExecutionLog {
  id: string;
  timestamp: string;
  status: string;
  log?: string;
  workflowId: string;
}

interface User {
  client?: { id: string };
}

const Reporting = () => {
  // Fetch user info to get clientId
  const { data: user, isLoading: userLoading } = useApiQuery<User>("me", "/me");
  const clientId = user?.client?.id;

  // Fetch workflows for the client
  const {
    data: workflows = [],
    isLoading: workflowsLoading,
  } = useApiQuery<Workflow[]>(
    ["client-workflows", clientId ?? "none"],
    clientId ? `/clients/${clientId}/workflows` : "",
    { enabled: !!clientId, queryKey: ["client-workflows", clientId ?? "none"] }
  );

  // Dropdown state
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | undefined>(undefined);

  // Set default workflow when loaded
  useMemo(() => {
    if (!selectedWorkflowId && workflows.length > 0) {
      setSelectedWorkflowId(workflows[0].id);
    }
  }, [workflows, selectedWorkflowId]);

  // Fetch logs for selected workflow
  const {
    data: logs = [],
    isLoading: logsLoading,
  } = useApiQuery<ExecutionLog[]>(
    ["workflow-logs", selectedWorkflowId ?? "none"],
    selectedWorkflowId ? `/workflows/${selectedWorkflowId}/logs` : "",
    { enabled: !!selectedWorkflowId, queryKey: ["workflow-logs", selectedWorkflowId ?? "none"] }
  );

  return (
    <Layout>
      <Card className="p-0 gap-0">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4">
          <CardTitle className="font-medium">Workflow Execution Logs</CardTitle>
          <div className="w-64">
            <Select
              value={selectedWorkflowId}
              onValueChange={setSelectedWorkflowId}
              disabled={workflowsLoading || workflows.length === 0}
            >
              <SelectTrigger className="w-full">
                {workflows.find((w) => w.id === selectedWorkflowId)?.name || "Select Workflow"}
              </SelectTrigger>
              <SelectContent>
                {workflows.map((w) => (
                  <SelectItem key={w.id} value={w.id}>
                    {w.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#FAF9F8]">
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Workflow</TableHead>
                <TableHead>Execution Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logsLoading || userLoading || workflowsLoading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8">Loading...</TableCell>
                </TableRow>
              ) : logs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8">No logs found.</TableCell>
                </TableRow>
              ) : (
                logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs whitespace-nowrap">
                      {new Date(log.timestamp).toISOString().replace("T", " ").slice(0, 19)}
                    </TableCell>
                    <TableCell>
                      {workflows.find((w) => w.id === log.workflowId)?.name || "-"}
                    </TableCell>
                    <TableCell>{log.log || log.status}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Reporting; 