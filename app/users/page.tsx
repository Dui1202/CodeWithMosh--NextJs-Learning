import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";
import { useRouter } from "next/navigation";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1 className="pb-5">UsersPage</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
