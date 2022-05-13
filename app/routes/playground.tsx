import { useState } from "react";
import { createStandaloneToast } from "@chakra-ui/toast";
import type { PetPortraitInterface } from "~/interfaces/PetPortrait";
import PetImageModal from "~/components/PetImageModal";
import ToastPopover from "~/components/ToastPopover";
import SectionLayout from "~/layout/SectionLayout";

const pet: PetPortraitInterface = {
  title: "Fluffy",
  image: "https://placekitten.com/200/300",
  altText: "Graphite A4 portrait of Fluffy",
  dimensions: "A4",
  medium: "Graphite Pencil",
  surface: "Fabriano Academia Drawing Paper, 200gsm",
  date: new Date(2020, 0, 1),
};

export default function PlaygroundPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const { toast, ToastContainer } = createStandaloneToast();

  return (
    <SectionLayout id="playground">
      <h1>Playground</h1>
      <p>This is a playground page.</p>
      <button
        onClick={() =>
          toast({
            position: "bottom-right",
            title: "Hello",
            description: "This is a toast",
          })
        }
      >
        Toast
      </button>
      <ToastContainer />
      <img
        src="https://placekitten.com/200/300"
        alt="Graphite A4 portrait of Fluffy"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <PetImageModal isOpen={isOpen} onClose={closeModal} pet={pet} />
      <ToastPopover
        title="lorem"
        description="content"
        onClose={() => console.log("close")}
      />
    </SectionLayout>
  );
}
