import Image from "next/image";

import getProduct from "../../common/service/product/getOneProduct";
import Checkout from "@/app/checkout/checkout";

type SingleProductProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function SingleProduct({ params }: SingleProductProps) {
  const { productId } = await params;
  const product = await getProduct(+productId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start pt-10">
      <div className="flex justify-center">
        <div className="relative w-full lg:max-w-md aspect-square overflow-hidden rounded-lg border bg-muted">
          {product.images?.length > 0 ? (
            <Image
              src={product.images?.[0]?.imageUrl}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-200">
              <span className="text-[10px] text-zinc-400">No Image</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-primary">
            ${product.price}
          </p>
        </div>

        <div className="prose prose-sm dark:prose-invert">
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
        <Checkout productId={product.id} />
      </div>
    </div>
  );
}
