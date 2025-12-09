import { CommandDialog } from "@/components/ui/command";
import { CommandInput, CommandItem, CommandList } from "cmdk";
import React from "react";

interface DashboardCommandProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardCommand = ({ open, setOpen } : DashboardCommandProps) => {

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open)
            }
        }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    }, [])

    return ( 
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Find a meeting or agent" />
            <CommandList>
                <CommandItem>Test</CommandItem>
            </CommandList>
        </CommandDialog>
     );
}
 
export default DashboardCommand;