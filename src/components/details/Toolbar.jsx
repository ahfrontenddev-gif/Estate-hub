import { FiHome, FiMaximize2, FiTruck, FiWind } from "react-icons/fi";

const Toolbar = ({property}) => {
  return (
    <section className="border-b border-black/5 bg-white px-5 py-8 sm:px-8 md:px-16">
      <div className="mx-auto grid max-w-[160rem] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {[
          { icon: FiHome, title: "نوع ملک", value: property.type },
          {
            icon: FiMaximize2,
            title: "مساحت زمین",
            value: `${property.landArea} متر`,
          },
          {
            icon: FiTruck,
            title: "پارکینگ",
            value: `${property.parking} خودرو`,
          },
          { icon: FiWind, title: "سیستم هوشمند", value: "دارد" },
          // { icon: FiTrees, title: "فضای سبز", value: "دارد" },
        ].map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-3 border-l border-black/10 px-3 py-5 last:border-l-0"
          >
            <item.icon className="text-[2.4rem] text-[#49634d]" />
            <span className="text-[1.3rem] font-medium">{item.title}</span>
            <span className="text-[1.2rem] text-gray-500">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolbar;
