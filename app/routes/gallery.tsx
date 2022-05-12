import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { data } from "~/features/gallery/data";

import SectionHeading from "~/components/SectionHeading";
import type { PetPortraitInterface } from "~/interfaces/PetPortrait";
import PetImageModal from "~/components/PetImageModal";
import { useState } from "react";
import SectionLayout from "~/layout/SectionLayout";

export const meta: MetaFunction = () => {
  return { title: "GALLERY | Ashleigh Fraser Artist" };
};

export const loader: LoaderFunction = () => {
  return data;
};

export default function GalleryRoute() {
  const galleryData: PetPortraitInterface[] = useLoaderData();

  const [openPet, setOpenPet] = useState<PetPortraitInterface | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => {
      setOpenPet(null);
    }, 300);
  };

  const openModal = (pet: PetPortraitInterface) => {
    setModalIsOpen(true);
    setOpenPet(pet);
  };

  return (
    <SectionLayout id="gallery">
      <SectionHeading title="Gallery" subtitle="This is the gallery section" />
      <div className="-m-1 flex flex-row flex-wrap">
        {galleryData.map((pet) => (
          <div
            key={pet.id}
            className="aspect-square h-auto w-[33.33%] p-1 md:w-[20%]"
          >
            <img
              src={pet.image}
              alt={pet.altText}
              className="aspect-square w-full cursor-pointer object-cover"
              onClick={() => openModal(pet)}
            />
          </div>
        ))}
      </div>
      {openPet && (
        <PetImageModal
          pet={openPet}
          onClose={closeModal}
          isOpen={modalIsOpen}
        />
      )}
    </SectionLayout>
  );
}
