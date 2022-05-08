import type { MetaFunction } from "remix";
import SectionHeading from "~/components/SectionHeading";

export const meta: MetaFunction = () => {
  return { title: "COMMISSIONS | Ashleigh Fraser Artist" };
};

export default function CommissionsRoute() {
  return (
    <section id="commissions">
      <SectionHeading
        title="Commisssions"
        subtitle="This is the commissions section"
      />
    </section>
  );
}
