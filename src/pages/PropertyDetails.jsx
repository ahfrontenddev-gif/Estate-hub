import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetPropertiesQuery } from "../data/apiProperty";

import Hero from "../components/details/Hero";
import Toolbar from "../components/details/Toolbar";
import Consultant from "../components/details/Consultant";
import EstateSimilar from "../components/details/EstateSimilar";
import Galery from "../components/details/Galery";

const agent = {
  name: "علی محمدی",
  role: "مشاور املاک لوکسورا",
  phone: "09123456789",
  email: "ali@luxora.ir",
  image: "/images/agent.png",
};

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const { data: properties = [], isLoading, isError } = useGetPropertiesQuery();

  const property = properties.find(
    (item) => String(item.id) === String(propertyId),
  );

  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
  });

  useEffect(() => {
    if (!isLoading && !isError && !property) {
      navigate("/404", { replace: true });
    }
  }, [isLoading, isError, property, navigate]);

  if (isLoading) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#f5f5ef] p-10">
        <p className="text-center">در حال دریافت اطلاعات ملک...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#f5f5ef] p-10">
        <p className="text-center text-red-600">
          دریافت اطلاعات ملک با خطا مواجه شد.
        </p>
      </main>
    );
  }

  if (!property) return null;

  const images = Array.isArray(property.images)
    ? property.images
    : typeof property.images === "string"
      ? property.images
          .split(",")
          .map((image) => image.trim())
          .filter(Boolean)
      : [];

  const nextImage = () => {
    if (!images.length) return;

    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    if (!images.length) return;

    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.");

    setForm({
      name: "",
      phone: "",
      date: "",
    });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f5ef] text-[#17251d]">
      <Hero
        property={{ ...property, images }}
        setIsGalleryOpen={setIsGalleryOpen}
        activeImage={activeImage}
        setIsFavorite={setIsFavorite}
        setActiveImage={setActiveImage}
        isFavorite={isFavorite}
        previousImage={previousImage}
        nextImage={nextImage}
        agent={agent}
      />

      <Toolbar property={property} />

      <Consultant
        setForm={setForm}
        property={property}
        agent={agent}
        handleSubmit={handleSubmit}
        form={form}
      />

      <EstateSimilar properties={properties} property={property} />

      {isGalleryOpen && (
        <Galery
          previousImage={previousImage}
          nextImage={nextImage}
          setIsGalleryOpen={setIsGalleryOpen}
          activeImage={activeImage}
          property={{ ...property, images }}
        />
      )}
    </main>
  );
};

export default PropertyDetails;
 