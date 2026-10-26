import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Hero from "../components/details/Hero";
import Toolbar from "../components/details/Toolbar";
import Consultant from "../components/details/Consultant";
import EstateSimilar from "../components/details/EstateSimilar";
import Galery from "../components/details/Galery";

import { properties } from "../data/apiProperty";

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

  const property = properties.find(
    (item) => String(item.id) === propertyId
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
    if (!property) {
      navigate("/404", { replace: true });
    }
  }, [property, navigate]);

  if (!property) return null;

  const nextImage = () => {
    setActiveImage(
      (current) => (current + 1) % property.images.length
    );
  };

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + property.images.length) %
        property.images.length
    );
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
    <main
      dir="rtl"
      className="min-h-screen bg-[#f5f5ef] text-[#17251d]"
    >
      <Hero
        property={property}
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

      <EstateSimilar
        properties={properties}
        property={property}
      />

      {isGalleryOpen && (
        <Galery
          previousImage={previousImage}
          nextImage={nextImage}
          setIsGalleryOpen={setIsGalleryOpen}
          activeImage={activeImage}
          property={property}
        />
      )}
    </main>
  );
};

export default PropertyDetails;
