import { TopBar, PageHeader } from "@nexus/ui";
import { StatsSummaryCard } from "../components/StatsSummaryCard";
import { Button, Card, CardContent, DataTable } from "@nexus/ui";
import {
  MdBusiness,
  MdReportProblem,
  MdAccessTime,
  MdAttachMoney,
  MdPeople,
} from "react-icons/md";
import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import Layout from "../components/Layout";

// Mock data for clients table
const clients = [
  {
    name: "Acme Corp",
    contractStart: "Jan 15, 2025",
    workflows: 24,
    nodes: 156,
    executions: 1847,
    exceptions: 12,
    revenue: "$24,500",
    timeSaved: "284h",
    moneySaved: "$42,600",
  },
];

type Client = (typeof clients)[number];

const columns: ColumnDef<Client, unknown>[] = [
  {
    accessorKey: "name",
    header: "Client Name",
    cell: (props) => (
      <a className="text-primary underline cursor-pointer">
        {props.getValue() as string}
      </a>
    ),
  },
  { accessorKey: "contractStart", header: "Contract Start" },
  { accessorKey: "workflows", header: "Workflows" },
  { accessorKey: "nodes", header: "Nodes" },
  { accessorKey: "executions", header: "Executions" },
  { accessorKey: "exceptions", header: "Exceptions" },
  { accessorKey: "revenue", header: "Revenue" },
  { accessorKey: "timeSaved", header: "Time Saved" },
  { accessorKey: "moneySaved", header: "Money Saved" },
];

const Dashboard = () => {
  const { data, isLoading, isError } = useApiQuery('dashboard-summary', '/dashboard/summary');

  const summaryStats = data
    ? [
        {
          label: 'Total Workflows',
          value: data.totalWorkflows,
          icon: <MdBusiness />,
          percentageChange: 0,
        },
        {
          label: 'Total Exceptions',
          value: data.totalExceptions,
          icon: <MdReportProblem />,
          percentageChange: 0,
        },
        {
          label: 'Time Saved',
          value: `${data.timeSaved}h`,
          icon: <MdAccessTime />,
          percentageChange: 0,
        },
        {
          label: 'Revenue',
          value: `$${(data.revenue / 1000).toLocaleString()}K`,
          icon: <MdAttachMoney />,
          percentageChange: 0,
        },
        {
          label: 'Active Clients',
          value: data.activeClients,
          icon: <MdPeople />,
          percentageChange: 0,
        },
      ]
    : [];

  return (
    <Layout>
          <PageHeader
            title="Dashboard Overview"
            description="Overview of your workflows, clients, and key metrics."
          >
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline">Last 7 days</Button>
              <Button variant="outline">Last 30 days</Button>
              <Button variant="outline">MTD</Button>
              <Button variant="outline">QTD</Button>
              <Button variant="outline">YTD</Button>
              <Button variant="default">ITD</Button>
            </div>
          </PageHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {summaryStats.map((stat) => (
              <StatsSummaryCard key={stat.label} {...stat} />
            ))}
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">All Clients</h2>
                <Link to="/clients/new">
                  <Button>+ Add Client</Button>
                </Link>
              </div>
              <DataTable columns={columns} data={clients} />
            </CardContent>
          </Card>
    </Layout>
  );
};

export default Dashboard;
