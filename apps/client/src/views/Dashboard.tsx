import { useApiQuery } from "@/hooks/useApi";
import Layout from "../components/Layout";
import { Card, CardContent } from "@nexus/ui";
import { SolutionsEngineerContactCard } from "@/components/SolutionsEngineerContactCard";
import { Link } from "react-router";
import { ArrowRightIcon } from "lucide-react";

interface PipelineStep {
  id: string;
  label: string;
  order: number;
  completedAt: string | null;
}
interface OverviewApi {
  assignedSEs: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    phone?: string;
  }[];
  pipeline: PipelineStep[];
}
interface SummaryApi {
  timeSaved: number;
  moneySaved: number;
  activeWorkflows: number;
  timeSavedAll: number;
  moneySavedAll: number;
}
interface User {
  client?: { id: string };
}

const Dashboard = () => {
  // Fetch user info to get clientId
  const { data: user } = useApiQuery<User>("me", "/me");
  const clientId = user?.client?.id;

  // Fetch client overview (pipeline, SE)
  const { data: overview } = useApiQuery<OverviewApi>(
    ["client-overview", clientId ?? "none"],
    clientId ? `/clients/${clientId}/overview` : "",
    { enabled: !!clientId, queryKey: ["client-overview", clientId ?? "none"] }
  );

  // Fetch client dashboard summary (stats)
  const { data: summary } = useApiQuery<SummaryApi>(
    ["client-summary", clientId ?? "none"],
    clientId ? `/dashboard/client-summary?clientId=${clientId}&range=last7` : "",
    { enabled: !!clientId, queryKey: ["client-summary", clientId ?? "none"] }
  );

  // Pipeline progress logic
  const pipelineSteps: PipelineStep[] = overview?.pipeline || [];
  const se = overview?.assignedSEs?.[0];
  
  const firstStepAfterLastCompleted = pipelineSteps.find(step => !step.completedAt);

  return (
    <Layout>
      <div className="flex gap-8 w-full">
        {/* Pipeline Progress */}
        <Card className="w-full md:w-1/3 max-w-xs border-none">
          <CardContent>
            <div className="font-semibold mb-4">Pipeline Progress</div>
            <div className="flex flex-col gap-6">
              {pipelineSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 flex items-center justify-center rounded-full border ${
                      step.completedAt
                        ? "bg-[#059669] text-white border-[#059669]"
                        : firstStepAfterLastCompleted?.id === step.id
                          ? "bg-[#4E86CF] border-[#4E86CF]"
                          : "bg-[#DBDBDB] border-[#DBDBDB]"
                    }`}
                  >
                  </span>
                  <div className="flex flex-col">
                    <span>{step.label}</span>
                    {step.completedAt && (
                      <span className="text-xs text-muted-foreground">
                        Completed on {new Date(step.completedAt).toLocaleDateString()}
                      </span>
                    )}
                    {firstStepAfterLastCompleted?.id === step.id && (
                      <span className="text-xs text-muted-foreground">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex-1 flex flex-col gap-6 items-start">
          <Card className="border-none w-full"> 
            <CardContent className="flex flex-col gap-2">
              <span className="text-muted-foreground">Time Saved</span>
              <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold">{summary?.timeSaved ?? "—"} hrs</span>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
                </div>
                <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold">{summary?.timeSavedAll ?? "—"} hrs</span>
                <span className="text-xs text-muted-foreground">All time</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none w-full">
            <CardContent className="flex flex-col gap-2">
              <span className="text-muted-foreground">Money Saved</span>
              <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold">${summary?.moneySaved?.toLocaleString() ?? "—"}</span>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
                </div>
                <div className="flex flex-col gap-2">
                <span className="text-3xl font-semibold">${summary?.moneySavedAll?.toLocaleString() ?? "—"}</span>
                <span className="text-xs text-muted-foreground">All time</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none w-full">
            <CardContent className="flex flex-col gap-2">
              <span className="text-muted-foreground">Active Workflows</span>
              <span className="text-3xl font-semibold">{summary?.activeWorkflows ?? "—"}</span>
              <Link to="/workflows" className="text-xs text-[#4E86CF] flex items-center gap-1">View all workflows <ArrowRightIcon className="w-4 h-4" /></Link>
            </CardContent>
          </Card>
        </div>
        {/* SE Contact Card */}
        <div className="w-full md:w-1/4 max-w-xs flex flex-col items-end">
          {se && (
            <SolutionsEngineerContactCard
              name={se.name}
              email={se.email}
              avatar={se.avatar}
              role="Solutions Engineer"
              phone={se.phone}
              onChat={() => {}}
              className="w-full border-none"
              size="lg"
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
