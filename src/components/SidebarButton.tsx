import { Button } from "./ui/button";

interface SidebarButtonProps {
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function SidebarButton({ label, Icon }: SidebarButtonProps) {
  return (
    <Button
      variant="link"
      className="hover:no-underline gap-3 justify-start text-base p-0 h-10 text-[#383f5080]"
    >
      <Icon className="!w-5 !h-5 ml-1 fill-[#383f5080]" />
      {label}
    </Button>
  );
}
