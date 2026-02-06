"use client";

// import getme from "../../app/common/service/auth/get-me";
import { getProducts } from "../../app/common/service/product/getProduct";

export async function ProductsRowPage() {
  const products = await getProducts();
  // const me = await getme();
  // console.log(me);
  return (
    
      <div className="pt-10 grid grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border pt-10 p-4 rounded">
            <img
              src={product.images?.[0]?.imageUrl}
              alt={product.name}
              className="h-40 w-full object-cover"
            />

            <h2 className="font-bold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>

            <p className="font-semibold mt-2">฿{product.price}</p>
          </div>
        ))}
      </div>
  );
}
