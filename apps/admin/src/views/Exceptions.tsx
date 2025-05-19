import { useState } from "react";
import {
  Card,
  CardContent,
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
  // You may want to fetch these from the API if dynamic
  { label: "Integration", value: "Integration" },
];

const Exceptions = () => {
  // Fetch clients for filter
  const { data: clients = [] } = useApiQuery<any[]>("clients", "/clients");
  // Filter state
  const [client, setClient] = useState("");
  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("");

  // Fetch exceptions with filters
  const {
    data: exceptions = [],
    refetch,
    isLoading,
  } = useApiQuery<any[]>(
    ["exceptions", client, type, severity],
    `/exceptions?${client && client !== "ALL" ? `clientId=${client}&` : ""}${severity && severity !== "ALL" ? `severity=${severity}&` : ""}` // type filter can be added if supported by API
  );

  // Status update mutation
  const updateStatus = useApiMutation<any, { id: string; status: string }>(
    "/exceptions/:id",
    "patch",
    {
      onSuccess: () => refetch(),
    }
  );

  return (
    <Layout title="Exceptions">
      <Card className="p-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm mb-2 block">Client Name</label>
              <Select
                value={client}
                onValueChange={setClient}
              >
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
        </CardContent>
      </Card>
      <Card className="p-0 overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#F7F6F3]">
              <TableRow>
                <TableHead>Datetime reported</TableHead>
                <TableHead>Client name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Workflow name</TableHead>
                <TableHead>Notifications</TableHead>
                <TableHead>Exception type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Remedy</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={9}>Loading...</TableCell>
                </TableRow>
              ) : exceptions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9}>No exceptions found.</TableCell>
                </TableRow>
              ) : (
                exceptions.map((e, idx) => (
                  <TableRow key={e.id}>
                    <TableCell>{new Date(e.timestamp).toISOString().replace("T", " ").slice(0, 19)}</TableCell>
                    <TableCell>{e.workflow?.client?.name || "-"}</TableCell>
                    <TableCell>{e.workflow?.department?.name || "-"}</TableCell>
                    <TableCell>{e.workflow?.name || "-"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {e.notifiedUsers?.slice(0, 2).map((u) => (
                          <Avatar key={u.id} className="w-6 h-6">
                            <AvatarImage src={u.avatar} alt={u.name} />
                            <AvatarFallback>{u.name?.[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                        {e.notifiedUsers && e.notifiedUsers.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{e.notifiedUsers.length - 2} more
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{e.type}</TableCell>
                    <TableCell>
                      <Badge variant={e.severity === "CRITICAL" ? "destructive" : "default"}>{e.severity}</Badge>
                    </TableCell>
                    <TableCell>{e.remedy}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            {statusOptions.find((s) => s.value === e.status)?.label || e.status}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {statusOptions.map((opt) => (
                            <DropdownMenuItem
                              key={opt.value}
                              onClick={() => updateStatus.mutate({ id: e.id, status: opt.value })}
                            >
                              {opt.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
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

export default Exceptions; 