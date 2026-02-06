import getme from "./common/service/auth/get-me";
import GetProducts from "./product/Get-Product";
// import { ProductsRowPage } from "../components/page/ProductRow";

export default async function Home() {
  const me = await getme();
  console.log(me);
  return (
    <div>
      <GetProducts/>
    </div>
  );
}
 