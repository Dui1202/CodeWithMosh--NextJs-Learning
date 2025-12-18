import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
}

interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await result.json();
  let sortedUsers = users;
  if (sortOrder === "name") {
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
