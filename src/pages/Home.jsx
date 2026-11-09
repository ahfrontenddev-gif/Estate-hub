import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Comments from "../components/home/Comments";

const Home = () => {
  return (
    <section className="w-dvw">
      <Hero />
      <FeaturedProperties />
      <About />
      <Features />
      <Comments />
    </section>
  );
};

export default Home;
