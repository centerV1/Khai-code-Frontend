import getPurchases from "../common/service/payment/getPurchases";
import  PurchaseItem  from "../product/DownloadProduct";
export default async function Page() {
  const purchases = await getPurchases();

  return (
    <div className="grid gap-4 pt-10">
      {purchases?.products?.length > 0 ? (
        purchases.products.map((item: any) => (
          <PurchaseItem key={item.orderId} item={item} />
        ))
      ) : (
        <div className="text-center py-20 border rounded-lg border-dashed">
          <p className="text-muted-foreground">ยังไม่มีประวัติการสั่งซื้อ</p>
        </div>
      )}
    </div>
  );
}

