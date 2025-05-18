import { Card, CardHeader, CardTitle, CardContent, Button, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@nexus/ui";
import Layout from "@/components/Layout";
import { Link } from "react-router";

const plans = [
  {
    name: "Enterprise Pro",
    pricingModel: "Tiered",
    contractLength: "12 months",
    billingCadence: "Monthly",
    setupFee: "$5,000",
    prepayment: "25%",
    cap: "$100,000",
    overage: "$150/hr",
    clients: 12,
  },
  {
    name: "Business Plus",
    pricingModel: "Fixed",
    contractLength: "6 months",
    billingCadence: "Quarterly",
    setupFee: "$2,500",
    prepayment: "15%",
    cap: "$50,000",
    overage: "$125/hr",
    clients: 28,
  },
  {
    name: "Starter",
    pricingModel: "Usage",
    contractLength: "3 months",
    billingCadence: "Monthly",
    setupFee: "$1,000",
    prepayment: "10%",
    cap: "$25,000",
    overage: "$100/hr",
    clients: 45,
  },
];

const PlanManager = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4 py-2">
        <div className="text-xl font-semibold">Plan Manager</div>
        <Link to="/subscriptions/new">
          <Button>+ Add Plan</Button>
        </Link>
      </div>
      <Card className="p-0">
        <CardContent className="p-8">
          <Table>
            <TableHeader>
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
                <TableRow key={plan.name}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>{plan.pricingModel}</TableCell>
                  <TableCell>{plan.contractLength}</TableCell>
                  <TableCell>{plan.billingCadence}</TableCell>
                  <TableCell>{plan.setupFee}</TableCell>
                  <TableCell>{plan.prepayment}</TableCell>
                  <TableCell>{plan.cap}</TableCell>
                  <TableCell>{plan.overage}</TableCell>
                  <TableCell>{plan.clients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default PlanManager; 