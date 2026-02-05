"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// import { Product as IProduct } from "./interfaces/product.interface";
import { API_URL } from "../common/constants/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface ProductProps {
//   product: IProduct;
// }

export default function Product({ product }: any) {
  const router = useRouter();

return (
    <div 
      onClick={() => router.push(`/product/${product.id}`)}
      className="cursor-pointer transition-transform hover:scale-[1.01] active:scale-95"
    >
      <Card className="overflow-hidden h-full">
        {/* ลด Padding ของ Header และลดขนาดฟอนต์ Title */}
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-lg font-bold truncate">{product.name}</CardTitle>
        </CardHeader>
        
        {/* ลด Gap และ Padding ของ Content */}
        <CardContent className="p-3 pt-0 flex flex-col gap-2">
          {/* ปรับ Aspect Ratio ให้เล็กลง (เช่น จาก video เป็น square หรือ 4/3) */}
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
             src={product.images?.[0]?.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="space-y-1">
            {/* ลดขนาดฟอนต์คำอธิบาย */}
            <p className="text-xs text-muted-foreground line-clamp-2 leading-tight">
              {product.description}
            </p>
            {/* ปรับขนาดราคาให้พอดี */}
            <p className="text-md font-bold text-primary">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}