import { TopBar } from "@nexus/ui";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <TopBar user={{ name: "Jane Doe", email: "jane@example.com" }} />
                <main className="flex-1 p-6 space-y-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;