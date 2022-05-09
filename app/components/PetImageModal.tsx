import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function PetImageModal({
  isOpen,
  onClose,
  pet,
}: {
  isOpen: boolean;
  onClose: () => void;
  pet: {
    name: string;
    image: string;
    altText: string;
    description?: string;
  };
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-playfair"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-zinc-900"
                  >
                    {pet.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-md rounded-none py-2 px-3 text-center font-playfair text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl"
                  >
                    X
                  </button>
                </div>

                <div className="mt-2">
                  <img
                    src={pet.image}
                    alt={pet.altText}
                    className="min-h-[300px] md:min-h-[500px]"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">{pet.description}</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
