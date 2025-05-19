import {
  Card,
  CardContent,
  Button,
  DataTable,
  CardHeader,
  CardTitle,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { Link } from "react-router";
import { useApiQuery } from "../hooks/useApi";
import { type ColumnDef, type Row } from "@tanstack/react-table";

interface Plan {
  id: string;
  name: string;
  cadence: string;
  contractLength: number;
  setupFee: number | null;
  prepaymentPercentage: number | null;
  cap: number | null;
  overageCost: number | null;
}

const columns: ColumnDef<Plan>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "cadence",
    header: "Pricing Model",
  },
  {
    accessorKey: "contractLength",
    header: "Contract Length",
    cell: ({ row }: { row: Row<Plan> }) => `${row.original.contractLength} months`,
  },
  {
    accessorKey: "cadence",
    header: "Billing Cadence",
  },
  {
    accessorKey: "setupFee",
    header: "Setup Fee",
    cell: ({ row }: { row: Row<Plan> }) => row.original.setupFee ? `$${row.original.setupFee}` : "-",
  },
  {
    accessorKey: "prepaymentPercentage",
    header: "Prepayment %",
    cell: ({ row }: { row: Row<Plan> }) => row.original.prepaymentPercentage ? `${row.original.prepaymentPercentage}%` : "-",
  },
  {
    accessorKey: "cap",
    header: "$ Cap",
    cell: ({ row }: { row: Row<Plan> }) => row.original.cap ? `$${row.original.cap}` : "-",
  },
  {
    accessorKey: "overageCost",
    header: "Overage Cost",
    cell: ({ row }: { row: Row<Plan> }) => row.original.overageCost ? `$${row.original.overageCost}` : "-",
  },
  {
    id: "clients",
    header: "# Clients",
    cell: () => "-",
  },
];

const PlanManager = () => {
  const {
    data: plans = [],
    isLoading,
    error,
  } = useApiQuery<Plan[]>("plans", "/plans");

  return (
    <Layout title="Plan Manager">
      <Card className="p-0 gap-0">
        <CardHeader className="flex flex-row items-center justify-between px-6 py-4">
          <CardTitle className="font-medium">Manage Plans</CardTitle>
          <Link to="/subscriptions/new">
            <Button>+ Add Plan</Button>
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-500">Failed to load plans</div>
          ) : (
            <DataTable columns={columns} data={plans} headerClassName="bg-[#EFEAEA]" />
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default PlanManager;
