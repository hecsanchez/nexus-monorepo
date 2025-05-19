import {
  Card,
  CardContent,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  CardHeader,
  CardTitle,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { Link } from "react-router";
import { useApiQuery } from "../hooks/useApi";

const PlanManager = () => {
  const {
    data: plans = [],
    isLoading,
    error,
  } = useApiQuery<any[]>("plans", "/plans");

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
            <Table>
              <TableHeader className="bg-[#EFEAEA] border-t">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Pricing Model</TableHead>
                  <TableHead>Contract Length</TableHead>
                  <TableHead>Billing Cadence</TableHead>
                  <TableHead>Setup Fee</TableHead>
                  <TableHead>Prepayment %</TableHead>
                  <TableHead>$ Cap</TableHead>
                  <TableHead>Overage Cost</TableHead>
                  <TableHead># Clients</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell>{plan.name}</TableCell>
                    <TableCell>{plan.cadence}</TableCell>
                    <TableCell>{plan.contractLength} months</TableCell>
                    <TableCell>{plan.cadence}</TableCell>
                    <TableCell>
                      {plan.setupFee ? `$${plan.setupFee}` : "-"}
                    </TableCell>
                    <TableCell>
                      {plan.prepaymentPercentage
                        ? `${plan.prepaymentPercentage}%`
                        : "-"}
                    </TableCell>
                    <TableCell>{plan.cap ? `$${plan.cap}` : "-"}</TableCell>
                    <TableCell>
                      {plan.overageCost ? `$${plan.overageCost}` : "-"}
                    </TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default PlanManager;
