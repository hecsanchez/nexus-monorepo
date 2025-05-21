import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { useApiMutation } from "../hooks/useApi";
import { useNavigate } from "react-router";

const pricingModels = ["Fixed", "Tiered", "Usage"];
const apis = ["AIR Direct", "Other API"];
const contractLengths = [
  {
    label: "Month",
    value: "30",
  },
  {
    label: "Quarter",
    value: "90",
  },
  {
    label: "Year",
    value: "365",
  },
];
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
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const mutation = useApiMutation<any, any>("/plans", "post", {
    onSuccess: () => navigate("/subscriptions"),
    onError: (err: any) => setError(err?.message || "Failed to create plan"),
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setError(null);
    mutation.mutate({
      name: form.name,
      pricePerCredit: parseFloat(form.pricePerCredit),
      contractLength: parseInt(form.contractLength),
      cadence: form.paymentCadence.toUpperCase(),
      setupFee: form.setupFee ? parseFloat(form.setupFee) : undefined,
      cap: form.cap ? parseInt(form.cap) : undefined,
      overageCost: form.overage ? parseFloat(form.overage) : undefined,
      usageApi: form.api,
      creditsPerPeriod: form.credits ? parseInt(form.credits) : undefined,
      prepaymentPercentage: form.prepayment
        ? parseFloat(form.prepayment)
        : undefined,
    });
  };

  return (
    <Layout title="Add New Plan">
      <Card>
        <CardContent className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 text-sm font-medium">Plan Name</div>
              <Input
                placeholder="Enter plan name"
                value={form.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Pricing Model</div>
              <Select
                value={form.pricingModel}
                onValueChange={(v: string) => handleChange("pricingModel", v)}
              >
                <SelectTrigger>{form.pricingModel}</SelectTrigger>
                <SelectContent>
                  {pricingModels.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Credits per Period</div>
              <Input
                value={form.credits}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("credits", e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Price per Credit</div>
              <Input
                value={form.pricePerCredit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("pricePerCredit", e.target.value)}
                prefix="$"
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Product Usage API</div>
              <Select
                value={form.api}
                onValueChange={(v: string) => handleChange("api", v)}
              >
                <SelectTrigger>{form.api}</SelectTrigger>
                <SelectContent>
                  {apis.map((a) => (
                    <SelectItem key={a} value={a}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Contract Length</div>
              <Select
                value={form.contractLength}
                onValueChange={(v: string) => handleChange("contractLength", v)}
              >
                <SelectTrigger>
                  {
                    contractLengths.find((c) => c.value === form.contractLength)
                      ?.label
                  }
                </SelectTrigger>
                <SelectContent>
                  {contractLengths.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Payment Cadence</div>
              <Select
                value={form.paymentCadence}
                onValueChange={(v: string) => handleChange("paymentCadence", v)}
              >
                <SelectTrigger>{form.paymentCadence}</SelectTrigger>
                <SelectContent>
                  {paymentCadences.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Setup Fee</div>
              <Input
                value={form.setupFee}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("setupFee", e.target.value)}
                prefix="$"
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Prepayment %</div>
              <Input
                value={form.prepayment}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("prepayment", e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Cap Amount</div>
              <Input
                value={form.cap}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("cap", e.target.value)}
                prefix="$"
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium">Overage Cost</div>
              <Input
                value={form.overage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("overage", e.target.value)}
                prefix="$"
              />
            </div>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-end gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/subscriptions")}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Creating..." : "Create Plan"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default NewPlan;
