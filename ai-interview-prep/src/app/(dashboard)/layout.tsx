import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Dashboard from "@/modules/home/ui/dashboard";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return ( 
        <SidebarProvider
            defaultOpen= { true }
        >
            <Dashboard />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
     );
}

export default Layout;