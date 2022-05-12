import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import type { PetPortraitInterface } from "~/interfaces/PetPortrait";

export default function PetImageModal({
  isOpen,
  onClose,
  pet,
}: {
  isOpen: boolean;
  onClose: () => void;
  pet: PetPortraitInterface;
}) {
  const dateString = useMemo(() => {
    const dateObj = pet.date && new Date(pet.date);
    return dateObj?.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  }, [pet.date]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 font-playfair"
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
                    className="text-2xl font-medium uppercase tracking-wider text-zinc-800"
                  >
                    {pet?.title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-none py-2 px-3 text-center font-playfair text-2xl text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl"
                    aria-label="close"
                  >
                    X
                  </button>
                </div>

                <div className="mt-2 flex flex-col md:flex-row">
                  <img
                    src={pet.image}
                    alt={pet.altText}
                    className="min-h-[300px] md:min-h-[500px]"
                  />
                  <div className="mt-4 md:ml-4 md:mt-0">
                    <h4 className="text-sm uppercase text-zinc-500">Medium</h4>
                    <p>{pet.medium}</p>
                    <h4 className="mt-4 text-sm uppercase text-zinc-500">
                      Dimensions
                    </h4>
                    <p>{pet.dimensions}</p>
                    <h4 className="mt-4 text-sm uppercase text-zinc-500">
                      Surface
                    </h4>
                    <p>{pet.surface}</p>
                    <h4 className="mt-4 text-sm uppercase text-zinc-500">
                      Year
                    </h4>
                    <p>{dateString !== undefined ? dateString : "no date"}</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
