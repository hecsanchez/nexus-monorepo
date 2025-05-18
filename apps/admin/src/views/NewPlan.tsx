import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Select, SelectTrigger, SelectContent, SelectItem } from "@nexus/ui";
import Layout from "@/components/Layout";

const pricingModels = ["Fixed", "Tiered", "Usage"];
const apis = ["AIR Direct", "Other API"];
const contractLengths = ["Month", "3 months", "6 months", "12 months"];
const paymentCadences = ["Monthly", "Quarterly"];

const NewPlan = () => {
  const [form, setForm] = useState({
    name: "",
    pricingModel: "Fixed",
    credits: "",
    pricePerCredit: "",
    api: "AIR Direct",
    contractLength: "Month",
    paymentCadence: "Monthly",
    setupFee: "",
    prepayment: "",
    cap: "",
    overage: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
    <div className="text-xl font-semibold mb-2">Add New Plan</div>
      <Card>
        <CardContent className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 text-sm font-medium">Plan Name</div>
              <Input placeholder="Enter plan name" value={form.name} onChange={e => handleChange("name", e.target.value)} />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Pricing Model</div>
              <Select value={form.pricingModel} onValueChange={v => handleChange("pricingModel", v)}>
                <SelectTrigger>{form.pricingModel}</SelectTrigger>
                <SelectContent>
                  {pricingModels.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Credits per Period</div>
              <Input value={form.credits} onChange={e => handleChange("credits", e.target.value)} />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Price per Credit</div>
              <Input value={form.pricePerCredit} onChange={e => handleChange("pricePerCredit", e.target.value)} prefix="$" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Product Usage API</div>
              <Select value={form.api} onValueChange={v => handleChange("api", v)}>
                <SelectTrigger>{form.api}</SelectTrigger>
                <SelectContent>
                  {apis.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Contract Length</div>
              <Select value={form.contractLength} onValueChange={v => handleChange("contractLength", v)}>
                <SelectTrigger>{form.contractLength}</SelectTrigger>
                <SelectContent>
                  {contractLengths.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Payment Cadence</div>
              <Select value={form.paymentCadence} onValueChange={v => handleChange("paymentCadence", v)}>
                <SelectTrigger>{form.paymentCadence}</SelectTrigger>
                <SelectContent>
                  {paymentCadences.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Setup Fee</div>
              <Input value={form.setupFee} onChange={e => handleChange("setupFee", e.target.value)} prefix="$" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Prepayment %</div>
              <Input value={form.prepayment} onChange={e => handleChange("prepayment", e.target.value)} suffix="%" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Cap Amount</div>
              <Input value={form.cap} onChange={e => handleChange("cap", e.target.value)} prefix="$" />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Overage Cost</div>
              <Input value={form.overage} onChange={e => handleChange("overage", e.target.value)} prefix="$" />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-8">
            <Button variant="outline">Cancel</Button>
            <Button variant="default">Create Plan</Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default NewPlan; 