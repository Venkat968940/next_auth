import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      Nav bar
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Nav;
