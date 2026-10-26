import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

const Galery = ({
  property,
  activeImage,
  setIsGalleryOpen,
  nextImage,
  previousImage,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={() => setIsGalleryOpen(false)}
    >
      <button
        onClick={() => setIsGalleryOpen(false)}
        aria-label="بستن گالری"
        className="absolute left-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <FiX className="text-[2.4rem]" />
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          previousImage();
        }}
        aria-label="تصویر قبلی"
        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
      >
        <FiArrowRight className="text-[2.4rem]" />
      </button>

      <img
        src={property.images[activeImage]}
        alt={property.title}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
      />

      <button
        onClick={(event) => {
          event.stopPropagation();
          nextImage();
        }}
        aria-label="تصویر بعدی"
        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
      >
        <FiArrowLeft className="text-[2.4rem]" />
      </button>
    </div>
  );
};

export default Galery;
