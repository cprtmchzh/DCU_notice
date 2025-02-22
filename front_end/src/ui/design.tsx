import { usePathname } from 'next/navigation';

export const sideButton = (url: string) => {
    const path = usePathname();
    return `p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:text-white active:bg-sidebarActive ${path === url ? 'bg-sidebarActive text-white hover:bg-sidebarActive' : 'hover:bg-sidebarHover'}`;
};
