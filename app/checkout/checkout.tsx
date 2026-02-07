"use client";

import { Button } from "@/components/ui/button";
import checkout from "./actions/checkout";

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
  const handleCheckout = async () => {
    try {
      const response = await checkout(productId);

      if (response.error) {
        console.error("Checkout error:", response.error);
        return;
      }

      if (response.data?.checkoutUrl) {
        window.location.assign(response.data.checkoutUrl);
      } else {
        console.error("No checkout URL found");
      }
      
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <Button className="max-w-[25%]" onClick={handleCheckout}>
      Buy Now
    </Button>
  );
}