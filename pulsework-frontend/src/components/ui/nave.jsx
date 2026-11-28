
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Alert Dialog",
    href: "/alert-dialog",
    description: "A dialog that displays important information.",
  },
  {
    title: "Hover Card",
    href: "/hover-card",
    description: "Preview content when hovering over a link.",
  },
  {
    title: "Progress",
    href: "/progress",
    description: "Displays task completion progress.",
  },
  {
    title: "Scroll Area",
    href: "/scroll-area",
    description: "A scrollable content area.",
  },
  {
    title: "Tabs",
    href: "/tabs",
    description: "Displays different sections of content.",
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description: "Displays helpful information on hover.",
  },
]

function ListItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground"
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-blue-500">
            Getting Started
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <ListItem href="/docs" title="Introduction">
                Reusable components built with Tailwind CSS.
              </ListItem>

              <ListItem href="/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>

              <ListItem href="/typography" title="Typography">
                Styles for headings, paragraphs and lists.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-blue-500">
            Components
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-blue-500">
            With Icon
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-3">
              <li>
                <NavigationMenuLink href="/backlog" className="flex items-center gap-2 p-2">
                  <CircleAlert size={18} />
                  Backlog
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink href="/todo" className="flex items-center gap-2 p-2">
                  <CircleDashed size={18} />
                  To Do
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink href="/done" className="flex items-center gap-2 p-2">
                  <CircleCheck size={18} />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            className={navigationMenuTriggerStyle() } className="text-blue-500"
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuDemo
