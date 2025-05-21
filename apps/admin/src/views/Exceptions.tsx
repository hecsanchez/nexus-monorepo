import { useState } from "react";
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
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { useApiQuery, useApiMutation } from "../hooks/useApi";
import { type ColumnDef, type Row } from "@tanstack/react-table";

interface Client {
  id: string;
  name: string;
}

const statusOptions = [
  { label: "New", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Resolved", value: "RESOLVED" },
];
const severityOptions = [
  { label: "All severities", value: "ALL" },
  { label: "Critical", value: "CRITICAL" },
  { label: "High", value: "HIGH" },
  { label: "Medium", value: "MEDIUM" },
  { label: "Low", value: "LOW" },
];
const typeOptions = [
  { label: "All types", value: "ALL" },
  { label: "Integration", value: "Integration" },
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
        {row.original.notifiedUsers?.slice(0, 2).map((u) => (
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
  // Fetch clients for filter
  const { data: clients = [] } = useApiQuery<Client[]>("clients", "/clients");
  // Filter state
  const [client, setClient] = useState("");
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("");

  // Fetch exceptions with filters
  const {
    data: exceptions = [],
    isLoading,
  } = useApiQuery<Exception[]>(
    ["exceptions", client, type, severity],
    `/exceptions?${client && client !== "ALL" ? `clientId=${client}&` : ""}${severity && severity !== "ALL" ? `severity=${severity}&` : ""}`
  );

  // Toolbar for filters
  const toolbar = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div>
        <label className="text-sm mb-2 block">Client Name</label>
        <Select value={client} onValueChange={setClient}>
          <SelectTrigger className="w-full">
            {client
              ? clients.find((c) => c.id === client)?.name || "All clients"
              : "All clients"}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All clients</SelectItem>
            {clients.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm mb-2 block">Exception type</label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full">
            {typeOptions.find((t) => t.value === type)?.label || "All types"}
          </SelectTrigger>
          <SelectContent>
            {typeOptions.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm mb-2 block">Severity</label>
        <Select value={severity} onValueChange={setSeverity}>
          <SelectTrigger className="w-full">
            {severityOptions.find((s) => s.value === severity)?.label || "All severities"}
          </SelectTrigger>
          <SelectContent>
            {severityOptions.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <Layout title="Exceptions">
      <Card className="p-0 overflow-hidden">
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center">Loading...</div>
          ) : (
            <DataTable columns={columns} data={exceptions} toolbar={toolbar} headerClassName="bg-[#F7F6F3]" />
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Exceptions; 