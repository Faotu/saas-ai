import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
};

export default Auth;
