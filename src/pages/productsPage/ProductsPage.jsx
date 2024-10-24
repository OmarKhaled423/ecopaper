import ProductCard from "../../components/productsCards/ProductCard";
import AllProducts from "../../database/DataDB";
import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";

const ProductsPage = () => {
  document.title = "Products | Ecopaper Recycle Company";

  return (
    <div>
      <AppHeader />
      <div className="hero-section product-page">
        <div className="hero-container">
          <h2>Our Products</h2>
          <p>Success is best when it’s shared.</p>
        </div>
      </div>
      <h2 style={{ paddingInline: "2rem", paddingBlock: "1rem" }}>
        Products Types
      </h2>
      <ProductCard AllProductsData={AllProducts} className="product__card" />

      <AppFooter />
    </div>
  );
};

export default ProductsPage;
