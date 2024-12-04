import { TbBrandRedux } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiSupabaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiReacthookform, SiReactquery, SiVite, SiAxios } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Card from "@/app/components/Card";
import RIcon from "@/app/components/RIcon";

function page() {
  return (
    <div className=" min-h-[100vh]  relative  mb-56 ">
      <div className="  container mx-auto z-40 py-10">
        <div className=" mb-56  4 ">
          <h1 className="font-bold text-[#cbacf9] text-[30px] text-center mb-5  mt-20     sm:mt-10 border-b-2 border-dotted border-[#cbacf9]    ">
            Professional Skill
          </h1>

          <ul className=" flex justify-center items-center text-[40px]  flex-row flex-wrap  gap-7    w-full  ">
            <RIcon iconColor="#ff0000" delayIcon={1} icon={<FaHtml5 />} />
            <RIcon iconColor="#0000ff" delayIcon={2} icon={<FaCss3Alt />} />
            <RIcon iconColor="#ffff00" delayIcon={3} icon={<FaJs />} />
            <RIcon iconColor="#0000ff" delayIcon={4} icon={<FaReact />} />
            <RIcon iconColor="#800080" delayIcon={5} icon={<TbBrandRedux />} />
            <RIcon
              iconColor="#ff69b4"
              delayIcon={6}
              icon={<SiReacthookform />}
            />
            <RIcon iconColor="#a52a2a" delayIcon={7} icon={<SiReactquery />} />
            <RIcon
              iconColor="#00ff00"
              delayIcon={8}
              icon={<RiSupabaseFill />}
            />
            <RIcon iconColor="#800080" delayIcon={9} icon={<SiVite />} />
            <RIcon
              iconColor="#0000ff"
              delayIcon={10}
              icon={<RiTailwindCssFill />}
            />
            <RIcon iconColor="#000000" delayIcon={11} icon={<RiNextjsFill />} />
            <RIcon iconColor="#808080" delayIcon={12} icon={<SiAxios />} />
            <RIcon iconColor="#800080" delayIcon={13} icon={<FaBootstrap />} />
            <RIcon iconColor="#000000" delayIcon={14} icon={<SiNextui />} />
            <RIcon
              iconColor="#000000"
              delayIcon={15}
              icon={<TbBrandFramerMotion />}
            />
            <RIcon iconColor="#ff0000" delayIcon={16} icon={<FaGithub />} />
            <RIcon iconColor="#8e44ad" delayIcon={17} icon={<FaShieldAlt />} />
          </ul>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default page;
