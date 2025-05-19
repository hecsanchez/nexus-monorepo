import { TopBar } from "@nexus/ui";
import Sidebar from "./Sidebar";
import { Toaster } from "@nexus/ui";

const Layout = ({ children, title }: { children: React.ReactNode, title: string }) => {

    const signOut = () => {
       // delete accessToken cookie
       document.cookie = "accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
       // redirect to login page
       window.location.href = "/login";
    }

    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <TopBar 
                    title={title}
                    user={{ name: "Jane Doe", email: "jane@example.com" }} 
                    onSignOut={() => {
                        signOut();
                    }}
                />
                <main className="flex-1 p-6 space-y-6 bg-background">
                    {children}
                </main>
            </div>
            <Toaster />
        </div>
    )
}

export default Layout;