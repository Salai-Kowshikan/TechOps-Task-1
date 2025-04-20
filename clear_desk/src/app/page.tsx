import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/user/dashboard" passHref>
        <Button>Go to User dashboard</Button>
      </Link>
    </div>
  );
}
