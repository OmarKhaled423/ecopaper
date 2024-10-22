import { TissuePapers } from "../../database/DataDB";
import SingleDisplayCard from "../../components/productsCards/SingleDisplayCard"
import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";

const TussuePapers = () => {
  document.title = "Tissue Papers | Ecopaper Recycle Company";

  return (
    <>
    <AppHeader />
      <div className="hero-section tissue-paper-page">
        <div className="hero-container">
          <h2>Tissues Papers</h2>
        </div>
      </div>
      <div className="products-card__wrapper">
        {TissuePapers.map((dataObj, ind) => (
          <SingleDisplayCard
          key={ind}
            imgUrl={dataObj?.url}
            imgTitle={dataObj?.imgTitle}
          />
        ))}
      </div>
      <AppFooter />
    </> 
  );
};

export default TussuePapers;
