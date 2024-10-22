import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard";
import { SpecialityPapers } from "../../database/DataDB";
import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";

const SpecialityPaper = () => {
  document.title = "Speciality Papers | Ecopaper Recycle Company";

  return (
    <>
    <AppHeader />
      <div className="hero-section speciality-paper-page">
        <div className="hero-container">
          <h2>Speciality Papers</h2>
        </div>
      </div>
      <div className="products-card__wrapper">
        {SpecialityPapers.map((dataObj, ind) => (
          <SingleDisplayCard key={ind} imgUrl={dataObj?.url} imgTitle={dataObj?.imgTitle} />
        ))}
      </div>
      <AppFooter />
    </>
  );
};

export default SpecialityPaper;
