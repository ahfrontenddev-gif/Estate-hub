import { FiCheck} from "react-icons/fi";
import DedicatedConsultant from "./DedicatedConsultant";

const Consultant = ({property,agent,handleSubmit,form,setForm}) => {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[160rem] grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <span className="text-[1.2rem] tracking-[0.2em] text-[#71866c]">
            PROPERTY OVERVIEW
          </span>

          <h2 className="mt-4 text-[2.8rem] font-medium sm:text-[3.5rem]">
            درباره این ملک
          </h2>

          <p className="mt-6 text-[1.5rem] leading-[2.5] text-gray-600">
            {property.description}
          </p>

          <div className="mt-10">
            <h3 className="text-[2rem] font-medium">امکانات و ویژگی‌ها</h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e1e8d9] text-[#49634d]">
                    <FiCheck />
                  </span>
                  <span className="text-[1.4rem] text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

    <DedicatedConsultant agent={agent} handleSubmit={handleSubmit} form={form} setForm={setForm} />
      </div>
    </section>
  );
};

export default Consultant;
