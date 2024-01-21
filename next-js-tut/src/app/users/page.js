import Link from "next/link";
import getUsers from "../../../services/getUsers";
export default async function UserList() {
  const users = await getUsers();

  //   to get environment variables
  //   console.log("P_ENV", process.env.SERVER_PASS);

  return (
    <div>
      User List
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
