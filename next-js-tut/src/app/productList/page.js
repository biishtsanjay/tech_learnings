import ProductBtn from "./productBtn";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function ProductList() {
  let products = await productList();
  return (
    <div>
      PRODUCT List
      <br></br>
      {products.map((item) => (
        <h3 key={item.id}>
          NAME:
          {item.title}
          <ProductBtn price={item.price} />
        </h3>
      ))}
    </div>
  );
}
