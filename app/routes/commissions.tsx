import type { MetaFunction } from "@remix-run/node";

import SectionHeading from "~/components/SectionHeading";
import SectionLayout from "~/layout/SectionLayout";

export const meta: MetaFunction = () => {
  return { title: "COMMISSIONS | Ashleigh Fraser Artist" };
};

export default function CommissionsRoute() {
  return (
    <>
      <SectionLayout id="commissions">
        <SectionHeading
          title="Commisssions"
          subtitle="More information about commissions are coming soon!"
        />
      </SectionLayout>
      <div className="z-0 my-auto mb-6 flex h-32 justify-center bg-slate-100 text-center">
        <h1 className="max-w-2xl self-center text-sm font-medium tracking-widest text-zinc-700 sm:text-base">
          Thanks for visiting my website! It is currently under construction,
          and this section isn't quite done. Email me at{" "}
          <a
            className="hover:underline"
            href="mailto:ashleighfraser.artist@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ashleighfraser.artist@gmail.com
          </a>{" "}
          and check out my Instagram at{" "}
          <a
            className="hover:underline"
            href="https://www.instagram.com/ashleighfraser_art/"
          >
            @ashleighfraser_art
          </a>{" "}
        </h1>
      </div>
    </>
  );
}
