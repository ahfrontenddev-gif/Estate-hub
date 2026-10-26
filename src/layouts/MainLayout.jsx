import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AnimatedOutlet from "../components/animate/AnimatedOutlet";
import CustomCursor from "../components/animate/CustomCurser";

const MainLayout = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </>
  );
};

export default MainLayout;
