import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/ui/sign-out";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="PrepForge Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepForge</h2>
        </Link>

        {/* Sign Out Button */}
        <div>
          <SignOutButton />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
