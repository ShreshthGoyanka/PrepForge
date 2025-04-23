import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/ui/sign-out";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="PrepForge Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepForge</h2>
        </Link>

        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm font-semibold text-primary-100 mt-2 sm:mt-0">
          {isUserAuthenticated && (
            <h4 className="mr-0 sm:mr-4">Hello, {await getCurrentUser().then(user => user?.name || "Guest")}!</h4>
          )}
          {/* Sign Out Button */}
          <SignOutButton />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
