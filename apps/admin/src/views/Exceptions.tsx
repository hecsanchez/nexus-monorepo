import {
  Card,
  CardContent,
  DataTable,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { useApiQuery, useApiMutation } from "../hooks/useApi";
// @ts-expect-error: types may be missing for @tanstack/react-table
import { type ColumnDef, type Row } from "@tanstack/react-table";

const statusOptions = [
  { label: "New", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Resolved", value: "RESOLVED" },
];

interface Exception {
  id: string;
  timestamp: string;
  workflow?: {
    client?: { name?: string };
    department?: { name?: string };
    name?: string;
  };
  notifiedUsers?: { id: string; avatar?: string; name?: string }[];
  type?: string;
  severity?: string;
  remedy?: string;
  status?: string;
}

interface User {
  client?: { id: string };
}

const columns: ColumnDef<Exception>[] = [
  {
    accessorKey: "timestamp",
    header: "Datetime reported",
    cell: ({ row }: { row: Row<Exception> }) =>
      new Date(row.original.timestamp).toISOString().replace("T", " ").slice(0, 19),
  },
  {
    id: "clientName",
    header: "Client name",
    cell: ({ row }: { row: Row<Exception> }) => row.original.workflow?.client?.name || "-",
  },
  {
    id: "department",
    header: "Department",
    cell: ({ row }: { row: Row<Exception> }) => row.original.workflow?.department?.name || "-",
  },
  {
    id: "workflowName",
    header: "Workflow name",
    cell: ({ row }: { row: Row<Exception> }) => row.original.workflow?.name || "-",
  },
  {
    id: "notifications",
    header: "Notifications",
    cell: ({ row }: { row: Row<Exception> }) => (
      <div className="flex items-center gap-1">
        {row.original.notifiedUsers?.slice(0, 2).map((u: { id: string; avatar?: string; name?: string }) => (
          <Avatar key={u.id} className="w-6 h-6">
            <AvatarImage src={u.avatar} alt={u.name} />
            <AvatarFallback>{u.name?.[0]}</AvatarFallback>
          </Avatar>
        ))}
        {row.original.notifiedUsers && row.original.notifiedUsers.length > 2 && (
          <span className="text-xs text-muted-foreground">
            +{row.original.notifiedUsers.length - 2} more
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Exception type",
    cell: ({ row }: { row: Row<Exception> }) => row.original.type || "-",
  },
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }: { row: Row<Exception> }) => (
      <Badge variant={row.original.severity === "CRITICAL" ? "destructive" : "default"}>
        {row.original.severity}
      </Badge>
    ),
  },
  {
    accessorKey: "remedy",
    header: "Remedy",
    cell: ({ row }: { row: Row<Exception> }) => row.original.remedy || "-",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Exception> }) => <ExceptionStatusDropdown exception={row.original} />, // see below
  },
];

function ExceptionStatusDropdown({ exception }: { exception: Exception }) {
  const { refetch } = useApiQuery<Exception[]>(["exceptions"], "/exceptions");
  const updateStatus = useApiMutation<Exception, { id: string; status: string }>(
    "/exceptions/:id",
    "patch",
    {
      onSuccess: () => refetch(),
    }
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {statusOptions.find((s) => s.value === exception.status)?.label || exception.status}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {statusOptions.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => updateStatus.mutate({ id: exception.id, status: opt.value })}
          >
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Exceptions = () => {
  // Fetch user info to get clientId
  const { data: user, isLoading: userLoading } = useApiQuery<User>("me", "/me");
  const clientId = user?.client?.id;

  // Fetch exceptions for the user's client
  const {
    data: exceptions = [],
    isLoading,
  } = useApiQuery<Exception[]>(
    ["exceptions", clientId ?? "none"],
    clientId ? `/exceptions?clientId=${clientId}` : "",
    { enabled: !!clientId, queryKey: ["exceptions", clientId ?? "none"] }
  );

  return (
    <Layout title="Exceptions">
      <Card className="p-0 overflow-hidden">
        <CardContent className="p-0">
          {userLoading || isLoading ? (
            <div className="p-8 text-center">Loading...</div>
          ) : (
            <DataTable columns={columns} data={exceptions} headerClassName="bg-[#F7F6F3]" />
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Exceptions; 