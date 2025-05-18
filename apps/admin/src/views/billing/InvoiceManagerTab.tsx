import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge, Button } from "@nexus/ui";

const invoices = [
  { id: "INV-001", date: "2024-06-01", terms: "Net 30", paymentMethod: "Stripe", amount: "$5,000", status: "Paid", erp: false },
  { id: "INV-002", date: "2024-05-01", terms: "Net 30", paymentMethod: "Stripe", amount: "$5,000", status: "Paid", erp: true },
];

const InvoiceManagerTab = () => {
  const [erpStatus, setErpStatus] = useState(invoices.map(i => i.erp));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Terms</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ERP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv, idx) => (
              <TableRow key={inv.id}>
                <TableCell>{inv.id}</TableCell>
                <TableCell>{inv.date}</TableCell>
                <TableCell>{inv.terms}</TableCell>
                <TableCell>{inv.paymentMethod}</TableCell>
                <TableCell>{inv.amount}</TableCell>
                <TableCell>
                  <Badge variant={inv.status === "Paid" ? "default" : "destructive"}>{inv.status}</Badge>
                </TableCell>
                <TableCell>
                  {erpStatus[idx] ? (
                    <Badge variant="secondary">Submitted</Badge>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => setErpStatus(s => s.map((v, i) => i === idx ? true : v))}>Submit to ERP</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InvoiceManagerTab; 