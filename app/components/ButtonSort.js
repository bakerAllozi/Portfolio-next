import { usePathname, useSearchParams, useRouter } from "next/navigation";

function BoxCard({ setSortBy }) {
  return (
    <div className=" flex justify-center ">
      <ul className=" flex justify-center items-center absolute text-center  gap-5 ">
        <RButton
          Text="Html_Css"
          color="from-[#9f84c2] to-[#7d5692] "
          setSortBy={setSortBy}
        />
        <RButton
          Text="Html_CSS_Js"
          color="from-[#d1c2e0] to-[#7d5692]"
          setSortBy={setSortBy}
        />
        <RButton
          Text="React_level_1"
          color="from-[#8665b3] to-[#7d5692]"
          setSortBy={setSortBy}
        />
        <RButton
          Text="React_level_2"
          color="from-[#6d46a4] to-[#7d5692]"
          setSortBy={setSortBy}
        />
        <RButton
          Text="React_level_3"
          color="from-[#542795] to-[#7d5692]"
          setSortBy={setSortBy}
        />
      </ul>
    </div>
  );
}
const RButton = ({ Text, color, setSortBy }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("ProjectType") ?? "React_level_2";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("ProjectType", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      onClick={() => {
        handleFilter(Text);
      }}
      className={`bg-gradient-to-r ${color}  ${
        activeFilter === Text ? "translate-y-[-20px]" : ""
      } p-2 rounded-full cursor-pointer text-[1.1vw] sm:text-[1.5vw] font-extrabold transition-transform duration-300 transform  `}
    >
      {Text}
    </button>
  );
};

export default BoxCard;
