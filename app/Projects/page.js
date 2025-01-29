import { Suspense } from "react";
import Gf from "./Gf";
import { Spinner } from "@nextui-org/react";

const Page = ({ searchParams }) => {
  const filter = searchParams?.ProjectType ?? "React_level_3";

  return (
    <div className="py-7 min-h-[100vh] ">
      <h1 className=" text-[35px] mb-5 text-center  text-[#7d5692]  font-bold  ">
        My Works
      </h1>
      <a
        href="/Blue and Gray Simple Professional CV Resume (2) (1).pdf "
        download
        className="fixed top-4 z-50 right-4 bg-[#241738] text-white px-4 py-2 rounded-full shadow-lg text-[10px] sm:text-lg font-bold hover:bg-[#ff0000] hover:text-white transition duration-300 cursor-pointer"
      >
        Download My CV
      </a>
      <Suspense fallback={<Spinner />} key={filter}>
        <Gf filter={filter} />
      </Suspense>
    </div>
  );
};

export default Page;
