"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { getDownloadUrl } from "../common/service/product/DownloadProduct";

export default function PurchaseItem({ item }: { item: any }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault(); // กันไม่ให้ Link ทำงานถ้าคุณยังอยากครอบด้วย Link
    setLoading(true);
    try {
      const data = await getDownloadUrl(item.productId);
      
      // สร้าง anchor tag จำลองเพื่อสั่ง download
      const link = document.createElement('a');
      link.href = data.url;
      link.setAttribute('download', ''); // พยายามสั่ง download (ขึ้นอยู่กับ Header ของ S3 ด้วย)
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการดาวน์โหลด");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 p-4">
          {/* ส่วนของรูปภาพเหมือนเดิม */}
          <div className="relative w-24 h-24 overflow-hidden rounded-lg border bg-zinc-100">
            {item.productImage?.images?.length > 0 ? (
              <img src={item.productImage.images[0].imageUrl} alt="Product" className="object-cover h-full w-full" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-200">No Image</div>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <h3 className="font-semibold">สินค้าชิ้นที่ {item.productId}</h3>
            <p className="text-xs text-muted-foreground">
              วันที่ซื้อ: {new Date(item.purchasedAt).toLocaleDateString("th-TH")}
            </p>
          </div>

          {/* ปุ่มดาวน์โหลดเพิ่มเข้ามาทางขวา */}
          <Button 
            onClick={handleDownload} 
            disabled={loading}
            variant="outline"
            size="sm"
            className="ml-auto"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            ดาวน์โหลดไฟล์
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}