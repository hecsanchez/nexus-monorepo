import { TopBar } from "@nexus/ui";
import Sidebar from "./Sidebar";
import { Toaster } from "@nexus/ui";
import { useApiQuery } from "@/hooks/useApi";
import { useMemo } from "react";

// Minimal types if not available
interface User {
  name: string;
  email: string;
  assignedClients?: { clientId: string }[];
}
interface Client {
  id: string;
  name: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    // Fetch user info
    const { data: user, isLoading: userLoading } = useApiQuery<User>("me", "/me");
    // Get the first assigned client (for client dashboard context)

    const topBarTitle = useMemo(() => user?.client?.name || "Loading...", [user]);
    const userInfo = useMemo(() => user ? { name: user.name, email: user.email } : undefined, [user]);

    if (userLoading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <TopBar 
                    title={topBarTitle}
                    user={userInfo}
                />
                <main className="flex-1 p-6 space-y-6 bg-background">
                    {children}
                </main>
            </div>
            <Toaster />
        </div>
    );
};

export default Layout;