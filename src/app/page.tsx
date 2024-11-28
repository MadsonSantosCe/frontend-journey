import { ThemeToggle } from "@/components/theme-toggle";
import { Users } from "@/components/user/Users";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Users />
    </div>
  );
}
