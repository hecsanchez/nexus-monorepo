import { Outlet, Link, useLocation, useParams } from "react-router";
import Layout from "../components/Layout";
import { Button, Card, CardContent, DataTable } from "@nexus/ui";
import { useApiQuery } from "@/hooks/useApi";
import type { Client } from "@/types/client";

const columns: ColumnDef<Client, unknown>[] = [
    {
      accessorKey: "name",
      header: "Client Name",
      cell: (props) => {
        const client = props.row.original;
        return (
          <Link to={`/clients/${client.id}`} className="text-primary underline cursor-pointer">
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
          <Link to={`/contracts/${client.contractId}`} className="text-primary underline cursor-pointer">
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
          <Link to={`/clients/${client.id}/workflows`} className="text-primary underline cursor-pointer">
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
          <Link to={`/clients/${client.id}/executions`} className="text-primary underline cursor-pointer">
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
          <Link to={`/clients/${client.id}/exceptions`} className="text-primary underline cursor-pointer">
            {client.exceptions}
          </Link>
        );
      },
    },
    { accessorKey: "revenue", header: "Revenue" },
    { accessorKey: "timeSaved", header: "Time Saved" },
    { accessorKey: "moneySaved", header: "Money Saved" },
  ];

const Clients = () => {
    const { data: clientsData } = useApiQuery<Client[]>("clients", "/clients");

  return (
    <Layout title="Clients">
      <Card className="py-0">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl">All Clients</h2>
            <Link to="/clients/new">
              <Button>+ Add Client</Button>
            </Link>
          </div>
          <DataTable columns={columns} data={clientsData ?? []} />
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Clients; 