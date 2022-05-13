export default function ToastPopover({
  onClose,
  title,
  description,
}: {
  onClose: () => void;
  title?: string;
  description?: string;
}) {
  return (
    <div className="min-h-[5rem] min-w-[12rem] max-w-[20rem] bg-slate-50 p-2 font-playfair shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium tracking-wide text-zinc-700">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="rounded-none py-1 px-2 text-center font-playfair text-lg text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl"
          aria-label="close"
        >
          X
        </button>
      </div>
      <div>
        <p className="text-zinc-600">{description}</p>
      </div>
    </div>
  );
}
