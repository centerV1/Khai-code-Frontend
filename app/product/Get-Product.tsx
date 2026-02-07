import { getProducts } from "../../app/common/service/product/getProduct";
import ProductsGrid from "./Products";

export default async function GetProducts() {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
}