import DeleteProductBtn from "@/lib/DeleteProductBtn";
import Link from "next/link";
const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  let products = await getProducts();
  return (
    <>
      Product List
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td>
                <Link href={"products/" + item._id}>Edit</Link>
                <DeleteProductBtn id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
