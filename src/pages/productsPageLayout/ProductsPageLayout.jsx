import { Outlet } from "react-router-dom";

const ProductsPageLayout = () => {
  document.title = "Products | Ecopaper Recycle Company";

  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default ProductsPageLayout;
