import { useState } from "react";
import type { PetPortraitInterface } from "~/interfaces/PetPortrait";
import PetImageModal from "~/components/PetImageModal";

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

  return (
    <section id="playground">
      <h1>Playground</h1>
      <p>This is a playground page.</p>
      <img
        src="https://placekitten.com/200/300"
        alt="Graphite A4 portrait of Fluffy"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <PetImageModal isOpen={isOpen} onClose={closeModal} pet={pet} />
    </section>
  );
}
