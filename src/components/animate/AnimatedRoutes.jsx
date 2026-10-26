import { AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import PageTransition from "./PageTransition";

import Home from "../../pages/Home";
import Properties from "../../pages/Properties";
import PropertyDetails from "../../pages/PropertyDetails";
import Favorites from "../../pages/Favorites";
import Compare from "../../pages/Compare";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Auth from "../../pages/Auth";
import NotFound from "../../pages/NotFound";
import Services from "../../pages/Services";
import BuyingGuide from "../../pages/BuyingGuide";
import FAQ from "../../pages/FAQ";
import Terms from "../../pages/Terms";
import CustomCursor from "./CustomCurser";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/properties"
            element={
              <PageTransition>
                <Properties />
              </PageTransition>
            }
          />

          <Route
            path="/properties/:propertyId"
            element={
              <PageTransition>
                <PropertyDetails />
              </PageTransition>
            }
          />

          <Route
            path="/favorites"
            element={
              <PageTransition>
                <Favorites />
              </PageTransition>
            }
          />

          <Route
            path="/compare"
            element={
              <PageTransition>
                <Compare />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />

          <Route
            path="/guide"
            element={
              <PageTransition>
                <BuyingGuide />
              </PageTransition>
            }
          />

          <Route
            path="/faq"
            element={
              <PageTransition>
                <FAQ />
              </PageTransition>
            }
          />

          <Route
            path="/terms"
            element={
              <PageTransition>
                <Terms />
              </PageTransition>
            }
          />
        </Route>

        <Route
          path="/auth"
          element={
            <PageTransition>
              <CustomCursor />
              <Auth />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <CustomCursor />
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
