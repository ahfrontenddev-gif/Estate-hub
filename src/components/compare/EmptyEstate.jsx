import { motion } from "motion/react";
import { FiPlus } from "react-icons/fi";

const EmptyEstate = ({availableProperties,selectedId,setSelectedId,addProperty}) => {
  return (
    <motion.div
      layout
      className="flex min-h-[28rem] flex-col items-center justify-center rounded-lg border border-dashed border-[#cdd2c5] bg-[#e9eae1] px-6 py-10 text-center"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#d4d9cb] text-[#627d65]">
        <FiPlus size={29} />
      </div>

      <h3 className="text-[1.6rem] font-medium">ملک دیگری اضافه کنید</h3>

      <p className="mt-3 max-w-[25rem] text-[1.2rem] leading-8 text-[#777d73]">
        یک ملک دیگر انتخاب کنید تا بتوانید مشخصات آن را مقایسه کنید.
      </p>

      {availableProperties.length > 0 ? (
        <>
          <select
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
            aria-label="انتخاب ملک برای مقایسه"
            className="mt-5 w-full max-w-[28rem] rounded-md border border-[#d5d8ce] bg-[#fbfaf6] px-4 py-3.5 text-[1.2rem] outline-none focus:border-[#526e58]"
          >
            <option value="">انتخاب ملک</option>
            {availableProperties.map((property) => (
              <option key={property.id} value={property.id}>
                {property.title}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={addProperty}
            disabled={!selectedId}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#10251c] px-6 py-3.5 text-[1.2rem] text-white transition hover:bg-[#294535] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FiPlus size={17} />
            افزودن به مقایسه
          </button>
        </>
      ) : (
        <p className="mt-5 text-[1.2rem] text-[#777d73]">
          تمام املاک نمونه انتخاب شده‌اند.
        </p>
      )}
    </motion.div>
  );
};

export default EmptyEstate;
