import { usePathname } from 'next/navigation';

export const sideButton = (url: string) => {
    const path = usePathname();
    return `sm:p-[12px] sm:my-2.5 sm:rounded-md sm:cursor-pointer sm:transition-background-[0.3s] sm:hover:text-white sm:active:bg-sidebarActive ${path === url ? 'sm:bg-sidebarActive sm:text-white sm:hover:bg-sidebarActive' : 'sm:hover:bg-sidebarHover'}`;
};

export const noticeInfo = () => {
    return `sm:text-center sm:p-3 sm:border-b-[1px]`;
};
