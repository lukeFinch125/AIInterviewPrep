import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "@/modules/dashboard/ui/components/dashboard";
import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return ( 
        <SidebarProvider
            defaultOpen= { true }
        >
            <Dashboard />
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardNavbar />
                {children}
            </main>
        </SidebarProvider>
     );
}

export default Layout;