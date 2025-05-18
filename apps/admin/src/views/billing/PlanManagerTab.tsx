import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Button, Select, SelectTrigger, SelectContent, SelectItem } from "@nexus/ui";

const plans = [
  { name: "Enterprise Pro", id: "enterprise", pricing: "Tiered", contract: "12 months", cadence: "Monthly", setup: "$5,000", prepay: "25%", cap: "$100,000", overage: "$150/hr", clients: 12 },
  { name: "Business Plus", id: "business", pricing: "Fixed", contract: "6 months", cadence: "Quarterly", setup: "$2,500", prepay: "15%", cap: "$50,000", overage: "$125/hr", clients: 28 },
  { name: "Starter", id: "starter", pricing: "Usage", contract: "3 months", cadence: "Monthly", setup: "$1,000", prepay: "10%", cap: "$25,000", overage: "$100/hr", clients: 45 },
];

const PlanManagerTab = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <div>
            <span className="text-sm text-muted-foreground">Current Plan</span>
            <div className="font-semibold">Enterprise Pro</div>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Change Plan</span>
            <Select value={selectedPlan} onValueChange={setSelectedPlan}>
              <SelectTrigger className="w-48">
                {plans.find(p => p.id === selectedPlan)?.name}
              </SelectTrigger>
              <SelectContent>
                {plans.map(p => (
                  <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button>Update Plan</Button>
        </div>
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
              <TableRow key={plan.id}>
                <TableCell>{plan.name}</TableCell>
                <TableCell>{plan.pricing}</TableCell>
                <TableCell>{plan.contract}</TableCell>
                <TableCell>{plan.cadence}</TableCell>
                <TableCell>{plan.setup}</TableCell>
                <TableCell>{plan.prepay}</TableCell>
                <TableCell>{plan.cap}</TableCell>
                <TableCell>{plan.overage}</TableCell>
                <TableCell>{plan.clients}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PlanManagerTab; 