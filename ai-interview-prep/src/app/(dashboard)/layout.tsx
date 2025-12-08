import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "@/modules/dashboard/ui/components/dashboard";

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
                {children}
            </main>
        </SidebarProvider>
     );
}

export default Layout;