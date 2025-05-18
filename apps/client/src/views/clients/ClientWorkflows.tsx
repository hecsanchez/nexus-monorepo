import React, { useState } from "react";
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

const workflows = [
  {
    date: "Jan 15, 2025",
    department: "Sales",
    name: "Lead Processing",
    nodes: 12,
    executions: 234,
    exceptions: 2,
    timeSaved: 30,
    moneySaved: 75,
    status: true,
    roiLink: "#",
    reportLink: "#",
  },
  {
    date: "Jan 10, 2025",
    department: "HR",
    name: "Onboarding",
    nodes: 8,
    executions: 45,
    exceptions: 0,
    timeSaved: 120,
    moneySaved: 180,
    status: false,
    roiLink: "#",
    reportLink: "#",
  },
];

const ClientWorkflows = () => {
  const [workflowStatus, setWorkflowStatus] = useState(
    workflows.map((w) => w.status)
  );

  const toggleStatus = (idx: number) => {
    setWorkflowStatus((statuses) =>
      statuses.map((s, i) => (i === idx ? !s : s))
    );
  };

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
            {workflows.map((w, idx) => (
              <TableRow key={w.name}>
                <TableCell>{w.date}</TableCell>
                <TableCell>{w.department}</TableCell>
                <TableCell>{w.name}</TableCell>
                <TableCell>{w.nodes}</TableCell>
                <TableCell>
                  <a href="#" className="text-primary underline cursor-pointer">
                    {w.executions}
                  </a>
                </TableCell>
                <TableCell>
                  <a href="#" className="text-primary underline cursor-pointer">
                    {w.exceptions}
                  </a>
                </TableCell>
                <TableCell>
                  <span className="font-mono">{w.timeSaved}</span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    min
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-mono">{w.moneySaved}</span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    USD
                  </span>
                </TableCell>
                <TableCell>
                  <button
                    className={`w-10 h-6 rounded-full border flex items-center transition-colors duration-200 ${
                      workflowStatus[idx]
                        ? "bg-primary border-primary"
                        : "bg-muted border-muted-foreground"
                    }`}
                    onClick={() => toggleStatus(idx)}
                  >
                    <span
                      className={`block w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-200 ${
                        workflowStatus[idx] ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </TableCell>
                <TableCell className="flex gap-2">
                  <a
                    href={w.roiLink}
                    className="text-primary underline cursor-pointer"
                  >
                    ROI
                  </a>
                  <a
                    href={w.reportLink}
                    className="text-primary underline cursor-pointer"
                  >
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
