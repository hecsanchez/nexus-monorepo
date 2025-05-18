import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@nexus/ui";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@nexus/ui";
import { Input } from "@nexus/ui";
import { SolutionsEngineerContactCard } from "../../components/SolutionsEngineerContactCard";

const supportEngineers = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: undefined,
    role: "Lead SE",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    avatar: undefined,
    role: "Support SE",
  },
];

const clientUsers = [
  {
    name: "Robert Wilson",
    email: "robert@company.com",
    phone: "+1 555-0123",
    billing: true,
    admin: true,
    notes: "Primary contact",
  },
  {
    name: "Emily Brown",
    email: "emily@company.com",
    phone: "+1 555-0124",
    billing: false,
    admin: false,
    notes: "Technical lead",
  },
];

const documentLinks = [
  { label: "Survey Questions", url: "https://docs.example.com/survey" },
  { label: "Survey Results", url: "https://docs.example.com/results" },
  { label: "Process Documentation", url: "https://docs.example.com/process" },
  { label: "ADA Proposal", url: "https://docs.example.com/proposal" },
  { label: "Contract", url: "https://docs.example.com/contract" },
  { label: "Factory Markdown", url: "https://docs.example.com/factory-markdown" },
  { label: "Test Plan", url: "https://docs.example.com/test-plan" },
];

const pipelineSteps = [
  { label: "Discovery: Initial Survey", description: "Completed on Jan 15, 2025" },
  { label: "Discovery: Process Deep Dive", description: "Completed on Jan 20, 2025" },
  { label: "ADA Proposal Sent", description: "Completed on Jan 25, 2025" },
  { label: "ADA Proposal Review" },
  { label: "ADA Contract Sent" },
  { label: "ADA Contract Signed" },
  { label: "Credentials Collected" },
  { label: "Factory Build Initiated" },
  { label: "Test Plan Generated" },
  { label: "Testing Started" },
  { label: "Production Deploy" },
];

const ClientOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Assigned Support Engineers */}
      <div>
        <div className="font-semibold mb-2">Assigned Support Engineers</div>
        <div className="flex gap-4 mb-6">
          {supportEngineers.map((se) => (
            <SolutionsEngineerContactCard
              key={se.email}
              name={se.name}
              email={se.email}
              avatar={se.avatar}
              role={se.role}
            />
          ))}
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client Users Table */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Client Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
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
                {clientUsers.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.billing ? "✓" : "—"}</TableCell>
                    <TableCell>{user.admin ? "✓" : "—"}</TableCell>
                    <TableCell>{user.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* Document Links */}
        <Card>
          <CardHeader>
            <CardTitle>Document Links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {documentLinks.map((doc) => (
              <div key={doc.label}>
                <div className="text-xs text-muted-foreground mb-1">{doc.label}</div>
                <Input value={doc.url} readOnly className="text-xs" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* Pipeline Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {pipelineSteps.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-3">
                <span className={`w-5 h-5 flex items-center justify-center rounded-full border ${idx < 3 ? "bg-green-500 text-white border-green-500" : "bg-muted text-muted-foreground border-muted"}`}>
                  {idx < 3 ? "✓" : ""}
                </span>
                <span className={idx < 3 ? "text-foreground" : "text-muted-foreground"}>{step.label}</span>
                {step.description && (
                  <span className="ml-2 text-xs text-muted-foreground">{step.description}</span>
                )}
                {idx === 3 && (
                  <span className="ml-4 px-2 py-0.5 rounded bg-muted text-xs border">Mark Complete</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientOverview; 