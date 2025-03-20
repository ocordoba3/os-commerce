import ProductsGrid from "@/components/products/ProductsGrid";
import Title from "@/components/ui/Title";
import { initialProducts } from "@/utils/seed";

export default function ShopPage() {
  return (
    <div>
      <Title title="Home" subtitle="Check all our products" />
      <ProductsGrid products={initialProducts} />
    </div>
  );
}
