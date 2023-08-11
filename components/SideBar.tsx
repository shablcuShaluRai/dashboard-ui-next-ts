import Card from "./Card";
import SidebarLink from "./SideBarLink";

export interface ILink {
  label: string;
  icon: "Grid" | "Calendar" | "User" | "Settings";
  link: string;
}

const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar"
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings"
  }
];

const Sidebar = () => {
  <Card className="h-full w-40 flex items-center justify-between flex-wrap">
    {links.map((link) => (
      <SidebarLink key={link.label} link={link as ILink} />
    ))}
  </Card>;
};

export default Sidebar;
