"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  // console.log("1 - !!!!!!", session, status);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // console.log("2 - !!!!!!", session, status);
  if (session) {
    return (
      <>
        환영합니다! <br />
        Signed in as {session.user.name},{session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  // console.log("3 - !!!!!!", session, status);
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("naver", { callbackUrl: "/" })}>
        Sign in with Naver
      </button>
    </>
  );
}
