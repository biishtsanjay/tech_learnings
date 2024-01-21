import Link from "next/link";
import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const users = await getUsers();
  const currentId = props.params.userId;
  const userData = users[currentId - 1];

  return (
    <div>
      <h3>User Detail Page</h3>
      <h4>id: {userData.id}</h4>
      <h4>name: {userData.name}</h4>
      <h4>website: {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
