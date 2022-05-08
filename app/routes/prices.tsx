import type { MetaFunction } from "remix";
import SectionHeading from "~/components/SectionHeading";

export const meta: MetaFunction = () => {
  return { title: "PRICES | Ashleigh Fraser Artist" };
};

export default function PricesRoute() {
  return (
    <section id="prices-top">
      <SectionHeading
        title="Prices"
        subtitle="This is the prices section you can say stuff about prices"
      />
    </section>
  );
}
