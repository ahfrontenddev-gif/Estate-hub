import BottomHero from "./BottomHero";
import TopHero from "./TopHero";

const Hero = () => {
  return (
    <section
      dir="rtl"
      className="relative min-h-[75rem] overflow-hidden bg-[#101713] text-white sm:min-h-[85rem] lg:min-h-screen"
    >
      <div className="absolute inset-0">
        <img
          src="/images/properties/property-1-1.jpg"
          alt="ویلای لوکس مدرن"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#101713]/95 via-[#101713]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101713] via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute -left-[15rem] top-[20%] h-[35rem] w-[35rem] rounded-full border border-white/10 lg:h-[50rem] lg:w-[50rem]" />

      <div className="relative z-10 mx-auto flex min-h-[75rem] max-w-[160rem] flex-col px-[2rem] pb-[4rem] pt-[14rem] sm:px-[4rem] sm:pt-[16rem] lg:min-h-screen lg:justify-center lg:px-[8rem] lg:pb-[10rem] lg:pt-[12rem]">
        <TopHero />
        <BottomHero />
      </div>
    </section>
  );
};

export default Hero;
