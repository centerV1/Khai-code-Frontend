"use client";

// import { useEffect } from "react";
// import { Socket, io } from "socket.io-client";
// import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./Product";
// import { API_URL } from "../common/constants/api";
// import revalidateProducts from "./actions/revalidate-products";
// import getAuthentication from "../auth/actions/get-authentication";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductGridProps {
  products: any[];
}

export default function ProductsGrid({ products }: ProductGridProps) {
  //   useEffect(() => {
  //     let socket: Socket;

  //     const createSocket = async () => {
  //       const auth = await getAuthentication();
  //       socket = io(API_URL!, {
  //         auth: {
  //           Authentication: auth,
  //         },
  //       });

  //       socket.on("productUpdate", () => {
  //         revalidateProducts();
  //       });
  //     };

  //     createSocket();

  //     return () => {
  //       socket?.disconnect();
  //     };
  //   }, []);

  return (
    
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-10">
        {products?.map((product) => (
          <div key={product.id} className="h-full">
            <Product product={product} />
          </div>
        ))}
      </div>

  );
}
