import ProductCategory from "@/components/ProductCategory/ProductCategory";
import ProductForm from "@/components/ProductForm";
import { anotherProducts, productDetail } from "@/constant/data";

const ProductDetailPage = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <ProductForm {...productDetail} />
      </div>
      <div className="mb-20">
        <ProductCategory
          categoryName={anotherProducts.categoryName}
          products={anotherProducts.products}
        />
      </div>
    </>
  );
};

export default ProductDetailPage;
