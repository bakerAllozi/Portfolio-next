import { Suspense } from "react";
import Gf from "./Gf";
import { Spinner } from "@nextui-org/react";

const Page = ({ searchParams }) => {
  const filter = searchParams?.ProjectType ?? "React_level_2";

  return (
    <div className="py-7   min-h-[100vh] ">
      <h1 className=" text-[35px] mb-5 text-center  text-[#7d5692]  font-bold  ">
        My Recent Works
      </h1>
      <Suspense fallback={<Spinner />} key={filter}>
        <Gf filter={filter} />
      </Suspense>
    </div>
  );
};

export default Page;
