import Layout from "@/components/Layout";
import { useApiQuery } from "@/hooks/useApi";

interface User {
  client?: { id: string; name: string };
}

interface BillingOverview {
  plan?: { name: string; setupFee?: number };
  credits?: number;
  seHours?: { used: number; total: number; remaining: number };
  usageSummary?: { apiCalls: number; storageUsed: number; activeUsers: number };
  invoices?: { id: string; issueDate: string; amount: number }[];
  paymentMethod?: { last4: string; expMonth: number; expYear: number };
}

const Billing = () => {
  // Fetch user info to get clientId
  const { data: user, isLoading: userLoading } = useApiQuery<User>("me", "/me");
  const clientId = user?.client?.id;

  // Fetch billing overview for the client
  const {
    data: overview,
    isLoading: overviewLoading,
  } = useApiQuery<BillingOverview>(
    ["billing-overview", clientId ?? "none"],
    clientId ? `/billing/clients/${clientId}/overview` : "",
    { enabled: !!clientId, queryKey: ["billing-overview", clientId ?? "none"] }
  );

  if (userLoading || overviewLoading) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto p-6">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <div className="text-2xl font-semibold mb-4">Billing Overview</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F6F3] rounded-lg p-4 flex flex-col">
              <div className="text-xs text-muted-foreground mb-1">Current Plan</div>
              <div className="font-bold text-lg">{overview?.plan?.name ?? "—"}</div>
              <div className="text-xs text-muted-foreground">${overview?.plan?.setupFee?.toLocaleString() ?? "—"}/month base fee</div>
            </div>
            <div className="bg-[#F7F6F3] rounded-lg p-4 flex flex-col">
              <div className="text-xs text-muted-foreground mb-1">Credits Remaining</div>
              <div className="font-bold text-lg">{overview?.credits ?? "—"}</div>
              <div className="text-xs text-muted-foreground">Renews on May 1, 2025</div>
            </div>
            <div className="bg-[#F7F6F3] rounded-lg p-4 flex flex-col">
              <div className="text-xs text-muted-foreground mb-1">SE Hours This Month</div>
              <div className="font-bold text-lg">{overview?.seHours?.used ?? "—"} / {overview?.seHours?.total ?? "—"}</div>
              <div className="text-xs text-muted-foreground">{overview?.seHours?.remaining ?? "—"} hours remaining</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Usage Summary</div>
              <a href="#" className="text-xs text-primary underline">View detailed report →</a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span>API Calls</span>
                <span className="font-mono">{overview?.usageSummary?.apiCalls?.toLocaleString() ?? "—"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Storage Used</span>
                <span className="font-mono">{overview?.usageSummary?.storageUsed ?? "—"} TB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Active Users</span>
                <span className="font-mono">{overview?.usageSummary?.activeUsers ?? "—"}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
            <div className="font-semibold mb-2">Recent Invoices</div>
            <div className="flex flex-col gap-2">
              {overview?.invoices?.length && overview.invoices.length > 0 ? overview.invoices.map((inv) => (
                <div key={inv.id} className="flex justify-between items-center text-sm border-b last:border-b-0 py-2">
                  <div>
                    <div className="font-medium">{new Date(inv.issueDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                    <div className="text-xs text-muted-foreground">Invoice #{inv.id.slice(-7)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">${inv.amount?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    <a href="#" className="text-primary"><span className="material-icons">download</span></a>
                  </div>
                </div>
              )) : <div className="text-muted-foreground text-sm">No invoices found.</div>}
            </div>
            <a href="#" className="text-xs text-primary underline mt-2">View all invoices →</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-2">Payment Method</div>
              {overview?.paymentMethod ? (
                <div className="flex items-center gap-4 border rounded p-3 bg-[#F7F6F3]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-10 h-6 object-contain" />
                  <div>
                    <div className="font-mono">Visa ending in {overview.paymentMethod.last4}</div>
                    <div className="text-xs text-muted-foreground">Expires {overview.paymentMethod.expMonth}/{overview.paymentMethod.expYear}</div>
                  </div>
                </div>
              ) : <div className="text-muted-foreground text-sm">No payment method on file.</div>}
              <a href="#" className="text-xs text-primary underline mt-2 block">Update payment method</a>
            </div>
            <div>
              <div className="font-semibold mb-2">Need Help?</div>
              <div className="flex flex-col gap-2">
                <button className="border rounded px-4 py-2 bg-[#F7F6F3] font-medium">Download Contract</button>
                <button className="border rounded px-4 py-2 bg-black text-white font-medium">Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing; 