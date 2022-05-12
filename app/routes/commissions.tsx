import type { MetaFunction } from "remix";

import SectionHeading from "~/components/SectionHeading";
import SectionLayout from "~/layout/SectionLayout";

export const meta: MetaFunction = () => {
  return { title: "COMMISSIONS | Ashleigh Fraser Artist" };
};

export default function CommissionsRoute() {
  return (
    <SectionLayout id="commissions">
      <SectionHeading
        title="Commisssions"
        subtitle="This is the commissions section"
      />
    </SectionLayout>
  );
}
