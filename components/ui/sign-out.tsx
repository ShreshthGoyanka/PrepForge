"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <Button className="btn-primary flex items-center justify-center" onClick={handleSignOut}>
      <p className="hidden sm:block text-sm font-semibold text-black text-center">
        Sign Out
      </p>
      
      <Image
        src="/log-out.svg"
        alt="Log Out"
        width={30}
        height={30}
        className="block sm:hidden"
      />
    </Button>
  );
};

export default SignOutButton;