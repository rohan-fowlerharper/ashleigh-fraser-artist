import { createStandaloneToast } from "@chakra-ui/toast";
import { useFetcher } from "@remix-run/react";
import { useCallback, useEffect, useRef } from "react";
import ToastPopover from "./ToastPopover";

export default function ContactForm() {
  const fetcher = useFetcher();
  const { toast, ToastContainer } = createStandaloneToast();

  const isAdding =
    fetcher.state === "submitting" && fetcher.submission.method === "POST";

  const hasAdded = fetcher.state === "idle" && fetcher.type === "done";

  let formRef = useRef<HTMLFormElement>(null);

  const displaySuccessToast = useCallback(() => {
    return toast({
      position: "bottom-right",
      duration: 4000,
      render: ({ onClose }) => (
        <ToastPopover
          onClose={onClose}
          title="Success!"
          description="Thanks for your email, I'll get back to you as soon as I can!"
        />
      ),
    });
  }, [toast]);

  useEffect(() => {
    if (hasAdded) {
      formRef.current?.reset();
      displaySuccessToast();
    }
  }, [hasAdded, displaySuccessToast]);

  return (
    <>
      <fetcher.Form ref={formRef} replace method="post">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <div className="md:w-1/2">
              <label htmlFor="name" className="text-zinc-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:inset- w-full border-2 border-zinc-500 px-3 py-2 duration-150"
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="email" className="text-zinc-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full border-2 border-zinc-500 px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-zinc-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder=""
              rows={5}
              className="w-full border-2 border-zinc-500 px-3 py-2 duration-300"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className={`w-full bg-zinc-500 px-3 py-2 text-zinc-100 duration-200 hover:bg-zinc-700 ${
                isAdding ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isAdding}
            >
              Send
            </button>
          </div>
        </div>
      </fetcher.Form>
      <ToastContainer />
    </>
  );
}
