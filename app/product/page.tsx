import { cookies } from "next/headers";
import Link from "next/link";
import { AUTHENTICATION_COOKIE } from "../common/service/auth/auth-cookie";
import getPurchases from "../common/service/payment/getPurchases";

import { Card, CardContent } from "@/components/ui/card";

export default async function Page() {
  const cookieStore = await cookies();
  const purchases = await getPurchases();
  const token = cookieStore.get(AUTHENTICATION_COOKIE)?.value;

  return (
    <div >

      <div className="grid gap-4 pt-10">
        {purchases.products.length > 0 ? (
          purchases.products.map((item: any) => (
            <Link key={item.orderId} href={`/product/${item.productId}`}>
              <Card className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    {/* ส่วนของรูปภาพสินค้า */}
                    <div className="relative w-40 h-40 aspect-square overflow-hidden rounded-lg border bg-zinc-100">
                      {item.productImage?.images?.length > 0 ? (
                        <img
                          src={item.productImage.images[0].imageUrl}
                          alt="Product Image"
                          className="absolute inset-0 h-full w-full object-cover block"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-200">
                          <span className="text-[10px] text-zinc-400">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>

                    {/* รายละเอียดสินค้า */}
                    <div className="flex flex-1 flex-col justify-center gap-1">

                      <h3 className="font-semibold leading-none tracking-tight">
                        สินค้าชิ้นที่ {item.productId}
                      </h3>

                      <p className="text-xs text-muted-foreground">
                        วันที่ซื้อ:{" "}
                        {new Date(item.purchasedAt).toLocaleDateString(
                          "th-TH",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 border rounded-lg border-dashed">
            <p className="text-muted-foreground">ยังไม่มีประวัติการสั่งซื้อ</p>
          </div>
        )}
      </div>
    </div>
  );
}
