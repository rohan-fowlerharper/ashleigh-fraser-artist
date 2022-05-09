import { useState } from "react";
import PetImageModal from "~/components/PetImageModal";

const pet = {
  name: "Fluffy",
  image: "https://placekitten.com/200/300",
  description: "Fluffy is a cat.",
  altText: "Graphite A4 portrait of Fluffy",
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
