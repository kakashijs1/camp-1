import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

const page = () => {
  //search

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer />
      </Suspense>
    </section>
  );
};
export default page;
