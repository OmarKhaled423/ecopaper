import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";
import Slider from "../../components/slider/Slider";
import image1 from "../../assets/paper_1.png";
import image2 from "../../assets/paper_2.webp";
import image3 from "../../assets/paper_3.webp";
import image4 from "../../assets/paper_4.png";

const HomePage = () => {
  const images = [
    { id: 1, src: image1, caption: "Colourful Packaging Board Papers" },
    { id: 2, src: image2, caption: "Board Paper Role" },
    { id: 3, src: image3, caption: "Board Paper" },
    { id: 4, src: image4, caption: "Packaging Board Paper" },
  ];

  return (
    <>
      {/* App Header component*/}
      <AppHeader />

      {/* <h1>Home page</h1> */}
      {/* App Slider component*/}
      <Slider images={images} />

      {/* App Footer component*/}
      <AppFooter />

    </>
  );
};

export default HomePage;
