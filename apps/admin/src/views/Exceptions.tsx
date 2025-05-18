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

const clients = ["All clients", "Acme Corp"];
const types = ["All types", "Integration"];
const severities = ["All severities", "Critical", "Warning", "Info"];

const exceptions = [
  {
    datetime: "2025-05-14 12:30:00",
    client: "Acme Corp",
    department: "Finance",
    workflow: "Invoice Processing",
    notifications: [
      { name: "Alice", avatar: "" },
      { name: "Bob", avatar: "" },
      { name: "Charlie", avatar: "" },
    ],
    exceptionType: "Integration",
    severity: "Critical",
    remedy: "API timeout",
    status: "New",
  },
];

const statusOptions = ["New", "In Progress", "Resolved"];

const Exceptions = () => {
  const [client, setClient] = useState(clients[0]);
  const [type, setType] = useState(types[0]);
  const [severity, setSeverity] = useState(severities[0]);
  const [rowStatus, setRowStatus] = useState(exceptions.map(e => e.status));

  return (
    <Layout>
      <div className="text-xl font-semibold mb-2">Exceptions</div>
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 mb-4">
            <Select value={client} onValueChange={setClient}>
              <SelectTrigger className="w-48">{client}</SelectTrigger>
              <SelectContent>
                {clients.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-48">{type}</SelectTrigger>
              <SelectContent>
                {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger className="w-48">{severity}</SelectTrigger>
              <SelectContent>
                {severities.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
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
              {exceptions.map((e, idx) => (
                <TableRow key={e.datetime}>
                  <TableCell>{e.datetime}</TableCell>
                  <TableCell>{e.client}</TableCell>
                  <TableCell>{e.department}</TableCell>
                  <TableCell>{e.workflow}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={e.notifications[0].avatar} alt={e.notifications[0].name} />
                        <AvatarFallback>{e.notifications[0].name[0]}</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={e.notifications[1].avatar} alt={e.notifications[1].name} />
                        <AvatarFallback>{e.notifications[1].name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">+2 more</span>
                    </div>
                  </TableCell>
                  <TableCell>{e.exceptionType}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">{e.severity}</Badge>
                  </TableCell>
                  <TableCell>{e.remedy}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">{rowStatus[idx]}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {statusOptions.map(opt => (
                          <DropdownMenuItem key={opt} onClick={() => setRowStatus(s => s.map((v, i) => i === idx ? opt : v))}>
                            {opt}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Exceptions; 