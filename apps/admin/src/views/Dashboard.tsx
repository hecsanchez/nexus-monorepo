import { useState, useMemo } from "react";
import { StatsSummaryCard } from "../components/StatsSummaryCard";
import { Button, Card, CardContent, cn, DataTable } from "@nexus/ui";
import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import Layout from "../components/Layout";
import { useApiQuery } from "@/hooks/useApi";
import type { Client } from "@/types/client";

const RANGE_OPTIONS = [
  { label: "Last 7 days", value: "last7" },
  { label: "Last 30 days", value: "last30" },
  { label: "MTD", value: "mtd" },
  { label: "QTD", value: "qtd" },
  { label: "YTD", value: "ytd" },
  { label: "ITD", value: "itd" },
];

type DashboardSummary = {
  totalWorkflows: number;
  totalExceptions: number;
  timeSaved: number;
  revenue: number;
  activeClients: number;
};

const columns: ColumnDef<Client, unknown>[] = [
  {
    accessorKey: "name",
    header: "Client Name",
    cell: (props) => {
      const client = props.row.original;
      return (
        <Link to={`/clients/${client.id}`} className="text-[#4E86CF] cursor-pointer">
          {client.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "contractStart",
    header: "Contract Start",
    cell: (props) => {
      const client = props.row.original;
      return (
        <Link to={`/contracts/${client.contractId}`} className="text-[#4E86CF] cursor-pointer">
          {client.contractStart}
        </Link>
      );
    },
  },
  {
    accessorKey: "workflows",
    header: "Workflows",
    cell: (props) => {
      const client = props.row.original;
      return (
        <Link to={`/clients/${client.id}/workflows`} className="text-[#4E86CF] cursor-pointer">
          {client.workflows}
        </Link>
      );
    },
  },
  { accessorKey: "nodes", header: "Nodes" },
  {
    accessorKey: "executions",
    header: "Executions",
    cell: (props) => {
      const client = props.row.original;
      return (
        <Link to={`/clients/${client.id}/executions`} className="text-[#4E86CF] cursor-pointer">
          {client.executions}
        </Link>
      );
    },
  },
  {
    accessorKey: "exceptions",
    header: "Exceptions",
    cell: (props) => {
      const client = props.row.original;
      return (
        <Link to={`/clients/${client.id}/exceptions`} className="text-[#4E86CF] cursor-pointer">
          {client.exceptions}
        </Link>
      );
    },
  },
  { accessorKey: "revenue", header: "Revenue" },
  { accessorKey: "timeSaved", header: "Time Saved" },
  { accessorKey: "moneySaved", header: "Money Saved" },
];

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("itd");

  const { data, isLoading, isError } = useApiQuery<DashboardSummary>(
    ["dashboard-summary", selectedRange],
    `/dashboard/summary?range=${selectedRange}`
  );

  const { data: clientsData } = useApiQuery<Client[]>("clients", "/clients");

  const summaryStats = useMemo(() =>
    data
      ? [
          {
            label: "Total Workflows",
            value: data.totalWorkflows,
            percentageChange: 0,
          },
          {
            label: "Total Exceptions",
            value: data.totalExceptions,
            percentageChange: 0,
          },
          {
            label: "Time Saved",
            value: `${data.timeSaved}h`,
            percentageChange: 0,
          },
          {
            label: "Revenue",
            value: `$${(data.revenue / 1000).toLocaleString()}K`,
            percentageChange: 0,
          },
          {
            label: "Active Clients",
            value: data.activeClients,
            percentageChange: 0,
          },
        ]
      : [],
    [data]
  );

  return (
    <Layout title="Dashboard Overview">
      <div className="flex gap-2 flex-wrap">
        {RANGE_OPTIONS.map((opt) => (
          <Button
            key={opt.value}
            className={cn(
              selectedRange === opt.value ? "bg-primary text-primary-foreground" : "bg-white",
            )}
            variant={selectedRange === opt.value ? "default" : "outline"}
            onClick={() => setSelectedRange(opt.value)}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryStats.map((stat) => (
          <StatsSummaryCard key={stat.label} {...stat} />
        ))}
      </div>

      <Card className="py-0">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl">All Clients</h2>
            <Link to="/clients/new">
              <Button>+ Add Client</Button>
            </Link>
          </div>
          <DataTable columns={columns} data={clientsData ?? []} headerClassName="bg-[#FAF9F8]" />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Dashboard;
