import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Button,
    DataTable,
  } from "@nexus/ui";
  import { Link } from "react-router";
  import { useApiQuery } from "@/hooks/useApi";
  // @ts-expect-error: types may be missing for @tanstack/react-table
  import { type ColumnDef, type Row } from "@tanstack/react-table";
import Layout from "@/components/Layout";
  
  interface Workflow {
    id: string;
    name: string;
    createdAt: string;
    department: { name: string };
    description?: string;
    nodes: unknown[];
    logs: unknown[];
    exceptions: unknown[];
    timeSaved?: number; // in hours
    costSaved?: number; // in USD
  }
  
  interface User {
    client?: { id: string };
  }
  
  const columns: ColumnDef<Workflow>[] = [
    {
      accessorKey: "createdAt",
      header: "Create Date/Time",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <span className="whitespace-nowrap font-mono text-xs">
          {new Date(row.original.createdAt).toISOString().slice(0, 16).replace("T", " ")}
        </span>
      ),
    },
    {
      accessorKey: "department.name",
      header: "Department",
      cell: ({ row }: { row: Row<Workflow> }) => row.original.department?.name || "—",
    },
    {
      accessorKey: "name",
      header: "Workflow Name",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <Link to={`/workflows/${row.original.id}`} className="text-primary underline cursor-pointer">
          {row.original.name}
        </Link>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }: { row: Row<Workflow> }) => row.original.description || "—",
    },
    {
      accessorKey: "nodes",
      header: "Nodes",
      cell: ({ row }: { row: Row<Workflow> }) => row.original.nodes?.length ?? 0,
    },
    {
      accessorKey: "logs",
      header: "Executions",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <Link to={`/workflows/${row.original.id}/executions`} className="text-primary underline cursor-pointer">
          {row.original.logs?.length ?? 0}
        </Link>
      ),
    },
    {
      accessorKey: "exceptions",
      header: "Exceptions",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <Link to={`/workflows/${row.original.id}/exceptions`} className="text-primary underline cursor-pointer">
          {row.original.exceptions?.length ?? 0}
        </Link>
      ),
    },
    {
      accessorKey: "timeSaved",
      header: "Time Saved",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <span>
          {row.original.timeSaved ? row.original.timeSaved.toLocaleString(undefined, { maximumFractionDigits: 1 }) : "—"} <span className="text-xs text-muted-foreground">hrs</span>
        </span>
      ),
    },
    {
      accessorKey: "costSaved",
      header: "Cost Saved",
      cell: ({ row }: { row: Row<Workflow> }) => (
        <span>
          {row.original.costSaved ? `$${row.original.costSaved.toLocaleString()}` : "—"}
        </span>
      ),
    },
  ];
  
  const Workflows = () => {
    // Fetch user info to get clientId
    const { data: user, isLoading: userLoading } = useApiQuery<User>("me", "/me");
    const clientId = user?.client?.id;
  
    // Fetch workflows for the client
    const {
      data: workflows = [],
      isLoading,
      isError,
    } = useApiQuery<Workflow[]>(
      ["client-workflows", clientId ?? "none"],
      clientId ? `/clients/${clientId}/workflows` : "",
      { enabled: !!clientId, queryKey: ["client-workflows", clientId ?? "none"] }
    );
  
    return (
    <Layout> 
      <Card className="p-0 gap-0">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4">
          <CardTitle className="font-medium">Workflow ROI</CardTitle>
          <Button>+ New</Button>
        </CardHeader>
        <CardContent className="p-0">
          {userLoading || isLoading ? (
            <div className="p-8 text-center">Loading...</div>
          ) : isError ? (
            <div className="p-8 text-center text-red-500">Error loading workflows.</div>
          ) : (
            <DataTable
              columns={columns}
              data={workflows}
              headerClassName="bg-[#FAF9F8]"
            />
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};
  
  export default Workflows;
  