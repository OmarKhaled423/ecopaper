import "./App.css";
import { Fragment } from "react";
import {Routes, Route, BrowserRouter,Outlet } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import ContactUsPage from "./pages/contactUsPage/ContactUsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index path="/hafeez-group/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/events" element={<EventsPage />}></Route>
          <Route path="/contact-us" element={<ContactUsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
