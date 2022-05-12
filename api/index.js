var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (
    (module2 && typeof module2 === "object") ||
    typeof module2 === "function"
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        "default",
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return (
      (cache && cache.get(module2)) ||
      ((temp = __reExport(__markAsModule({}), module2, 1)),
      cache && cache.set(module2, temp),
      temp)
    );
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes,
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const markup = (0, import_server.renderToString)(
    /* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url,
    })
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

// route:/home/rohan/personal/ash-draws/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta,
});
var import_react3 = require("@remix-run/react");

// app/components/Title.tsx
function Title() {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "w-128 mt-6 flex justify-center font-playfair",
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "text-center",
      },
      /* @__PURE__ */ React.createElement(
        "h1",
        {
          className:
            "mb-1 text-4xl font-medium uppercase tracking-[0.5em] text-zinc-700",
        },
        "Ashleigh Fraser"
      ),
      /* @__PURE__ */ React.createElement(
        "h2",
        {
          className: "text-lg text-zinc-500",
        },
        "Pet & Equine Portraits"
      ),
      /* @__PURE__ */ React.createElement("div", {
        className: "mx-auto mt-6 w-8/12 border-b-2 sm:w-full",
      })
    )
  );
}

// app/components/Nav.tsx
var import_react2 = require("@remix-run/react");
function Nav() {
  const links3 = [
    { label: "Home", link: "/", isMobileLink: true },
    { label: "About", link: "/#about", isMobileLink: false, isInternal: true },
    { label: "Gallery", link: "/gallery", isMobileLink: true },
    { label: "Commissions", link: "/commissions", isMobileLink: true },
    {
      label: "Contact",
      link: "/#contact",
      isMobileLink: true,
      isInternal: true,
    },
  ];
  return /* @__PURE__ */ React.createElement(
    "nav",
    {
      className: "py-6",
    },
    /* @__PURE__ */ React.createElement(
      "ul",
      {
        className: "flex justify-center sm:gap-6 md:gap-8",
      },
      links3.map((link) =>
        /* @__PURE__ */ React.createElement(
          "li",
          {
            key: link.label,
          },
          /* @__PURE__ */ React.createElement(
            import_react2.NavLink,
            {
              prefetch: "intent",
              to: link.link,
              className: ({ isActive }) => {
                return `text-md rounded-none py-2 px-3 text-center font-playfair text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl ${
                  !link.isMobileLink ? "hidden sm:inline" : ""
                } ${
                  isActive && !link.isInternal
                    ? "underline underline-offset-8"
                    : ""
                }`;
              },
            },
            link.label
          )
        )
      )
    )
  );
}

// app/components/Header.tsx
function Header() {
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      "header",
      null,
      /* @__PURE__ */ React.createElement(Title, null)
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "sticky top-0 z-20 bg-white shadow-md  shadow-zinc-700/50 md:shadow-lg md:shadow-zinc-700/50",
      },
      /* @__PURE__ */ React.createElement(Nav, null)
    )
  );
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PWI5X5KZ.css";

// route:/home/rohan/personal/ash-draws/app/root.tsx
var meta = () => {
  return {
    title: "HOME | Ashleigh Fraser Artist",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  };
};
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png",
    },
  ];
};
function App() {
  console.log("development");
  return /* @__PURE__ */ React.createElement(
    "html",
    {
      lang: "en",
      className: "scroll-smooth",
    },
    /* @__PURE__ */ React.createElement(
      "head",
      null,
      /* @__PURE__ */ React.createElement(import_react3.Meta, null),
      /* @__PURE__ */ React.createElement(import_react3.Links, null)
    ),
    /* @__PURE__ */ React.createElement(
      "body",
      null,
      /* @__PURE__ */ React.createElement(Header, null),
      /* @__PURE__ */ React.createElement(
        "main",
        {
          className: "h-full font-playfair",
        },
        /* @__PURE__ */ React.createElement(import_react3.Outlet, null)
      ),
      /* @__PURE__ */ React.createElement(
        import_react3.ScrollRestoration,
        null
      ),
      /* @__PURE__ */ React.createElement(import_react3.Scripts, null),
      /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)
    )
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/commissions.tsx
var commissions_exports = {};
__export(commissions_exports, {
  default: () => CommissionsRoute,
  meta: () => meta2,
});

// app/components/SectionHeading.tsx
var import_react4 = require("@remix-run/react");
function SectionHeading({ title, subtitle, id }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "mb-6",
    },
    /* @__PURE__ */ React.createElement(
      "h2",
      {
        id,
        className:
          "group right-4 scroll-mt-24 text-3xl font-medium text-zinc-700",
      },
      title,
      id &&
        /* @__PURE__ */ React.createElement(
          import_react4.Link,
          {
            to: `#${id}`,
            className:
              "pl-2 text-3xl font-medium opacity-0 transition-opacity before:content-['#'] hover:underline group-hover:opacity-100",
            title: "Direct link to heading",
          },
          /* @__PURE__ */ React.createElement(
            "span",
            {
              className: "sr-only",
            },
            "Direct link to ",
            title,
            " heading"
          )
        )
    ),
    subtitle &&
      /* @__PURE__ */ React.createElement(
        "p",
        {
          className: "text-md text-zinc-500",
        },
        subtitle
      )
  );
}

// app/layout/SectionLayout.tsx
function SectionLayout({ id, children }) {
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      id,
      className: "max-w-screen container mt-6 px-2 md:mx-auto md:max-w-5xl",
    },
    children
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/commissions.tsx
var meta2 = () => {
  return { title: "COMMISSIONS | Ashleigh Fraser Artist" };
};
function CommissionsRoute() {
  return /* @__PURE__ */ React.createElement(
    SectionLayout,
    {
      id: "commissions",
    },
    /* @__PURE__ */ React.createElement(SectionHeading, {
      title: "Commisssions",
      subtitle: "This is the commissions section",
    })
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/playground.tsx
var playground_exports = {};
__export(playground_exports, {
  default: () => PlaygroundPage,
});
var import_react7 = require("react");

// app/components/PetImageModal.tsx
var import_react5 = require("@headlessui/react");
var import_react6 = require("react");
function PetImageModal({ isOpen, onClose, pet: pet2 }) {
  const dateString = (0, import_react6.useMemo)(() => {
    const dateObj = pet2.date && new Date(pet2.date);
    return dateObj == null
      ? void 0
      : dateObj.toLocaleDateString("en-GB", {
          month: "short",
          year: "numeric",
        });
  }, [pet2.date]);
  return /* @__PURE__ */ React.createElement(
    import_react5.Transition,
    {
      appear: true,
      show: isOpen,
      as: import_react6.Fragment,
    },
    /* @__PURE__ */ React.createElement(
      import_react5.Dialog,
      {
        as: "div",
        className: "relative z-50 font-playfair",
        onClose,
      },
      /* @__PURE__ */ React.createElement(
        import_react5.Transition.Child,
        {
          as: import_react6.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
        },
        /* @__PURE__ */ React.createElement("div", {
          className: "fixed inset-0 bg-black bg-opacity-25",
        })
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "fixed inset-0 overflow-y-auto",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className:
              "flex min-h-full items-center justify-center p-4 text-center",
          },
          /* @__PURE__ */ React.createElement(
            import_react5.Transition.Child,
            {
              as: import_react6.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
            },
            /* @__PURE__ */ React.createElement(
              import_react5.Dialog.Panel,
              {
                className:
                  "w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all",
              },
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: "flex items-center justify-between",
                },
                /* @__PURE__ */ React.createElement(
                  import_react5.Dialog.Title,
                  {
                    as: "h3",
                    className:
                      "text-2xl font-medium uppercase tracking-wider text-zinc-800",
                  },
                  pet2 == null ? void 0 : pet2.title
                ),
                /* @__PURE__ */ React.createElement(
                  "button",
                  {
                    onClick: onClose,
                    className:
                      "rounded-none py-2 px-3 text-center font-playfair text-2xl text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl",
                    "aria-label": "close",
                  },
                  "X"
                )
              ),
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: "mt-2 flex flex-col md:flex-row",
                },
                /* @__PURE__ */ React.createElement("img", {
                  src: pet2.image,
                  alt: pet2.altText,
                  className: "min-h-[300px] md:min-h-[500px]",
                }),
                /* @__PURE__ */ React.createElement(
                  "div",
                  {
                    className: "mt-4 md:ml-4 md:mt-0",
                  },
                  /* @__PURE__ */ React.createElement(
                    "h4",
                    {
                      className: "text-sm uppercase text-zinc-500",
                    },
                    "Medium"
                  ),
                  /* @__PURE__ */ React.createElement("p", null, pet2.medium),
                  /* @__PURE__ */ React.createElement(
                    "h4",
                    {
                      className: "mt-4 text-sm uppercase text-zinc-500",
                    },
                    "Dimensions"
                  ),
                  /* @__PURE__ */ React.createElement(
                    "p",
                    null,
                    pet2.dimensions
                  ),
                  /* @__PURE__ */ React.createElement(
                    "h4",
                    {
                      className: "mt-4 text-sm uppercase text-zinc-500",
                    },
                    "Surface"
                  ),
                  /* @__PURE__ */ React.createElement("p", null, pet2.surface),
                  /* @__PURE__ */ React.createElement(
                    "h4",
                    {
                      className: "mt-4 text-sm uppercase text-zinc-500",
                    },
                    "Year"
                  ),
                  /* @__PURE__ */ React.createElement(
                    "p",
                    null,
                    dateString !== void 0 ? dateString : "no date"
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/playground.tsx
var pet = {
  title: "Fluffy",
  image: "https://placekitten.com/200/300",
  altText: "Graphite A4 portrait of Fluffy",
  dimensions: "A4",
  medium: "Graphite Pencil",
  surface: "Fabriano Academia Drawing Paper, 200gsm",
  date: new Date(2020, 0, 1),
};
function PlaygroundPage() {
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const closeModal = () => setIsOpen(false);
  return /* @__PURE__ */ React.createElement(
    SectionLayout,
    {
      id: "playground",
    },
    /* @__PURE__ */ React.createElement("h1", null, "Playground"),
    /* @__PURE__ */ React.createElement(
      "p",
      null,
      "This is a playground page."
    ),
    /* @__PURE__ */ React.createElement("img", {
      src: "https://placekitten.com/200/300",
      alt: "Graphite A4 portrait of Fluffy",
      onClick: () => setIsOpen(true),
      className: "cursor-pointer",
    }),
    /* @__PURE__ */ React.createElement(PetImageModal, {
      isOpen,
      onClose: closeModal,
      pet,
    })
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/gallery.tsx
var gallery_exports = {};
__export(gallery_exports, {
  default: () => GalleryRoute,
  loader: () => loader,
  meta: () => meta3,
});
var import_react8 = require("@remix-run/react");

// app/features/gallery/data.ts
var data = [
  {
    id: 1,
    title: "Cat",
    image: "https://placekitten.com/200/300",
    altText: "A cat",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 2,
    title: "Cat",
    image: "https://placekitten.com/250/301",
    altText: "A dog",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 3,
    title: "Cat",
    image: "https://placekitten.com/200/302",
    altText: "A cat",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 4,
    title: "Cat",
    image: "https://placekitten.com/200/303",
    altText: "A cat",
    dimensions: "A5",
    medium: "Graphite Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 5,
    title: "Cat",
    image: "https://placekitten.com/200/304",
    altText: "A cat",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 6,
    title: "Cat",
    image: "https://placekitten.com/200/305",
    altText: "A cat",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
  {
    id: 7,
    title: "Cat",
    image: "https://placekitten.com/200/306",
    altText: "A cat",
    dimensions: "A5",
    medium: "Coloured Pencil",
    surface: "Paper",
    date: new Date("2020-01-01"),
  },
];

// route:/home/rohan/personal/ash-draws/app/routes/gallery.tsx
var import_react9 = require("react");
var meta3 = () => {
  return { title: "GALLERY | Ashleigh Fraser Artist" };
};
var loader = () => {
  return data;
};
function GalleryRoute() {
  const galleryData = (0, import_react8.useLoaderData)();
  const [openPet, setOpenPet] = (0, import_react9.useState)(null);
  const [modalIsOpen, setModalIsOpen] = (0, import_react9.useState)(false);
  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => {
      setOpenPet(null);
    }, 300);
  };
  const openModal = (pet2) => {
    setModalIsOpen(true);
    setOpenPet(pet2);
  };
  return /* @__PURE__ */ React.createElement(
    SectionLayout,
    {
      id: "gallery",
    },
    /* @__PURE__ */ React.createElement(SectionHeading, {
      title: "Gallery",
      subtitle: "This is the gallery section",
    }),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "-m-1 flex flex-row flex-wrap",
      },
      galleryData.map((pet2) =>
        /* @__PURE__ */ React.createElement(
          "div",
          {
            key: pet2.id,
            className: "aspect-square h-auto w-[33.33%] p-1 md:w-[20%]",
          },
          /* @__PURE__ */ React.createElement("img", {
            src: pet2.image,
            alt: pet2.altText,
            className: "aspect-square w-full cursor-pointer object-cover",
            onClick: () => openModal(pet2),
          })
        )
      )
    ),
    openPet &&
      /* @__PURE__ */ React.createElement(PetImageModal, {
        pet: openPet,
        onClose: closeModal,
        isOpen: modalIsOpen,
      })
  );
}

// route:/home/rohan/personal/ash-draws/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2,
});

// app/components/SplashSlider.tsx
var import_react10 = require("swiper/react");
var import_swiper = require("swiper");
var swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3e3,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
};
import_swiper.Swiper.use([
  import_swiper.Pagination,
  import_swiper.A11y,
  import_swiper.Autoplay,
]);
function SplashSlider() {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "mx-auto flex max-w-4xl flex-col md:max-h-full md:flex-row",
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "flex aspect-[3/4] h-auto w-full flex-col items-center justify-center bg-zinc-50 p-8 text-center xs:mx-auto xs:w-[384px] sm:mx-auto sm:w-[384px] md:w-1/2",
      },
      /* @__PURE__ */ React.createElement(
        "span",
        {
          className:
            "h-full text-[7.5vw] font-medium text-zinc-600 xs:text-3xl sm:text-[2rem] md:leading-[2.75rem] lg:text-[2.4rem]",
        },
        "My hand drawn, bespoke commission process starts with your own photo. I transform the photo into an outline, then gradually build up detail onto the paper. The finished portrait is a tribute to your pet to treasure for a lifetime."
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "w-full xs:mx-auto xs:w-[384px] sm:mx-auto sm:w-[384px] md:w-1/2",
      },
      /* @__PURE__ */ React.createElement(
        import_react10.Swiper,
        __spreadValues({}, swiperParams),
        /* @__PURE__ */ React.createElement(
          import_react10.SwiperSlide,
          null,
          /* @__PURE__ */ React.createElement("div", {
            className: "aspect-[3/4] h-auto w-full bg-slate-500",
          })
        ),
        /* @__PURE__ */ React.createElement(
          import_react10.SwiperSlide,
          null,
          /* @__PURE__ */ React.createElement("div", {
            className: "aspect-[3/4] h-auto w-full bg-gray-600",
          })
        ),
        /* @__PURE__ */ React.createElement(
          import_react10.SwiperSlide,
          null,
          /* @__PURE__ */ React.createElement("div", {
            className: "aspect-[3/4] h-auto w-full bg-slate-700",
          })
        ),
        /* @__PURE__ */ React.createElement(
          import_react10.SwiperSlide,
          null,
          /* @__PURE__ */ React.createElement("div", {
            className: "aspect-[3/4] h-auto w-full bg-zinc-700",
          })
        )
      )
    )
  );
}

// app/routes/home.tsx
function HomeRoute() {
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "z-0 my-auto mb-6 flex h-32 justify-center bg-slate-100 text-center",
      },
      /* @__PURE__ */ React.createElement(
        "h1",
        {
          className:
            "max-w-2xl self-center text-sm font-medium tracking-widest text-zinc-700 sm:text-base",
        },
        "Thanks for visiting my website! It is currently under construction, please come back soon. Email me at",
        " ",
        /* @__PURE__ */ React.createElement(
          "a",
          {
            className: "hover:underline",
            href: "mailto:ashleighfraser.artist@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          "ashleighfraser.artist@gmail.com"
        ),
        " ",
        "and check out my Instagram at",
        " ",
        /* @__PURE__ */ React.createElement(
          "a",
          {
            className: "hover:underline",
            href: "https://www.instagram.com/ashleighfraser_art/",
          },
          "@ashleighfraser_art"
        ),
        " "
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "w-full bg-zinc-100 py-6",
      },
      /* @__PURE__ */ React.createElement(SplashSlider, null)
    ),
    /* @__PURE__ */ React.createElement(
      SectionLayout,
      {
        id: "introduction",
      },
      /* @__PURE__ */ React.createElement(SectionHeading, {
        title: "About Me",
        id: "about",
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "flex flex-col gap-6 lg:flex-row",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "mb-6 text-zinc-700 lg:w-1/2",
          },
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "mb-2 text-base",
            },
            "Hi, I\u2019m Ashleigh! I\u2019m a pet and equine portrait artist and animal lover from New Zealand, where I share my home with three cats who like to chew the ends of my pencils."
          ),
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "mb-2 text-base",
            },
            "Art and drawing have always been a passion of mine; growing up I spent hours knelt on the ground with my graphite pencils, drawing as many horses as I could find pictures of! After several years of pursuing a Bachelor of Music and, I have come full circle, and am back with pencils in hand, ready to start my journey as an animal portrait artist. My passion for animals and drawing have found a happy union in this process! I find no greater satisfaction than when I create a piece of art that connects an owner with their cherished pets. My work is done in graphite pencils on quality art paper, from photographs you provide."
          ),
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "text-base",
            },
            "My goal through this process is to exceed your expectations of what a pencil pet portrait can be, providing you with a bespoke artwork to last a lifetime. I want your pet\u2019s personality to shine through my artwork; bringing your pet to life with pencils and paper is my privilege, and I love every minute spent creating my work!"
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "lg:w-1/2",
          },
          /* @__PURE__ */ React.createElement("img", {
            width: "100%",
            "object-fit": "cover",
            src: "https://via.placeholder.com/300x150/09f/fff.png",
            alt: "Placeholder",
            className: "mb-6",
          })
        )
      ),
      /* @__PURE__ */ React.createElement(SectionHeading, {
        title: "Contact",
        subtitle: "I'd love to hear from you!",
        id: "contact",
      }),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null)
    )
  );
}

// node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min_default = "/build/_assets/swiper-bundle.min-4W327FTY.css";

// route:/home/rohan/personal/ash-draws/app/routes/index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: swiper_bundle_min_default }];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement(HomeRoute, null);
}

// route:/home/rohan/personal/ash-draws/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeRoute2,
});
function HomeRoute2() {
  return /* @__PURE__ */ React.createElement(
    "div",
    null,
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className:
          "z-0 my-auto mb-6 flex h-32 justify-center bg-slate-100 text-center",
      },
      /* @__PURE__ */ React.createElement(
        "h1",
        {
          className:
            "max-w-2xl self-center text-sm font-medium tracking-widest text-zinc-700 sm:text-base",
        },
        "Thanks for visiting my website! It is currently under construction, please come back soon. Email me at",
        " ",
        /* @__PURE__ */ React.createElement(
          "a",
          {
            className: "hover:underline",
            href: "mailto:ashleighfraser.artist@gmail.com",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          "ashleighfraser.artist@gmail.com"
        ),
        " ",
        "and check out my Instagram at",
        " ",
        /* @__PURE__ */ React.createElement(
          "a",
          {
            className: "hover:underline",
            href: "https://www.instagram.com/ashleighfraser_art/",
          },
          "@ashleighfraser_art"
        ),
        " "
      )
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "w-full bg-zinc-100 py-6",
      },
      /* @__PURE__ */ React.createElement(SplashSlider, null)
    ),
    /* @__PURE__ */ React.createElement(
      SectionLayout,
      {
        id: "introduction",
      },
      /* @__PURE__ */ React.createElement(SectionHeading, {
        title: "About Me",
        id: "about",
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "flex flex-col gap-6 lg:flex-row",
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "mb-6 text-zinc-700 lg:w-1/2",
          },
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "mb-2 text-base",
            },
            "Hi, I\u2019m Ashleigh! I\u2019m a pet and equine portrait artist and animal lover from New Zealand, where I share my home with three cats who like to chew the ends of my pencils."
          ),
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "mb-2 text-base",
            },
            "Art and drawing have always been a passion of mine; growing up I spent hours knelt on the ground with my graphite pencils, drawing as many horses as I could find pictures of! After several years of pursuing a Bachelor of Music and, I have come full circle, and am back with pencils in hand, ready to start my journey as an animal portrait artist. My passion for animals and drawing have found a happy union in this process! I find no greater satisfaction than when I create a piece of art that connects an owner with their cherished pets. My work is done in graphite pencils on quality art paper, from photographs you provide."
          ),
          /* @__PURE__ */ React.createElement(
            "p",
            {
              className: "text-base",
            },
            "My goal through this process is to exceed your expectations of what a pencil pet portrait can be, providing you with a bespoke artwork to last a lifetime. I want your pet\u2019s personality to shine through my artwork; bringing your pet to life with pencils and paper is my privilege, and I love every minute spent creating my work!"
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "lg:w-1/2",
          },
          /* @__PURE__ */ React.createElement("img", {
            width: "100%",
            "object-fit": "cover",
            src: "https://via.placeholder.com/300x150/09f/fff.png",
            alt: "Placeholder",
            className: "mb-6",
          })
        )
      ),
      /* @__PURE__ */ React.createElement(SectionHeading, {
        title: "Contact",
        subtitle: "I'd love to hear from you!",
        id: "contact",
      }),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null),
      /* @__PURE__ */ React.createElement("br", null)
    )
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
  version: "26ad64a9",
  entry: {
    module: "/build/entry.client-OZ77LKCR.js",
    imports: [
      "/build/_shared/chunk-KWLKFF5Z.js",
      "/build/_shared/chunk-K47METNI.js",
      "/build/_shared/chunk-IYRIQ6PI.js",
    ],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/root-IERPLNIT.js",
      imports: void 0,
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/commissions": {
      id: "routes/commissions",
      parentId: "root",
      path: "commissions",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/commissions-LSZO62OZ.js",
      imports: [
        "/build/_shared/chunk-OJNEITIO.js",
        "/build/_shared/chunk-V55JBVQD.js",
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/gallery": {
      id: "routes/gallery",
      parentId: "root",
      path: "gallery",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/gallery-NBGJVVFM.js",
      imports: [
        "/build/_shared/chunk-Q52KLEPT.js",
        "/build/_shared/chunk-OJNEITIO.js",
        "/build/_shared/chunk-V55JBVQD.js",
      ],
      hasAction: false,
      hasLoader: true,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/home": {
      id: "routes/home",
      parentId: "root",
      path: "home",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/home-BPXSQFD5.js",
      imports: [
        "/build/_shared/chunk-SLE67DBX.js",
        "/build/_shared/chunk-OJNEITIO.js",
        "/build/_shared/chunk-V55JBVQD.js",
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      module: "/build/routes/index-KKMEWOZH.js",
      imports: [
        "/build/_shared/chunk-SLE67DBX.js",
        "/build/_shared/chunk-OJNEITIO.js",
        "/build/_shared/chunk-V55JBVQD.js",
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
    "routes/playground": {
      id: "routes/playground",
      parentId: "root",
      path: "playground",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/playground-CFWBQ7OY.js",
      imports: [
        "/build/_shared/chunk-Q52KLEPT.js",
        "/build/_shared/chunk-V55JBVQD.js",
      ],
      hasAction: false,
      hasLoader: false,
      hasCatchBoundary: false,
      hasErrorBoundary: false,
    },
  },
  url: "/build/manifest-26AD64A9.js",
};

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports,
  },
  "routes/commissions": {
    id: "routes/commissions",
    parentId: "root",
    path: "commissions",
    index: void 0,
    caseSensitive: void 0,
    module: commissions_exports,
  },
  "routes/playground": {
    id: "routes/playground",
    parentId: "root",
    path: "playground",
    index: void 0,
    caseSensitive: void 0,
    module: playground_exports,
  },
  "routes/gallery": {
    id: "routes/gallery",
    parentId: "root",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: gallery_exports,
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports,
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports,
  },
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    assets,
    entry,
    routes,
  });
//# sourceMappingURL=index.js.map
