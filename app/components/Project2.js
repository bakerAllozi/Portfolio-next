"use client";
import "./Project.css";
import React, { useRef, useState } from "react";
import Img from "../../public/box (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Project2() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-lg border-[1px] border-gray-700  p-10"
      >
        <SwiperSlide className="">
          <p className="h-full flex justify-center items-center text-[30px] bgNew rounded-md">
            Collaborating with my team was an exceptional experience. Their
            professionalism, dedication, and promptness in delivering
            outstanding results were evident throughout the project.
          </p>
        </SwiperSlide>
        <SwiperSlide className="">
          <p className="h-full flex justify-center items-center text-[30px] bgNew rounded-md">
            Setting clear goals and plans from the outset made the project
            execution smoother and more efficient.
          </p>
        </SwiperSlide>
        <SwiperSlide className="">
          <p className="h-full flex justify-center items-center text-[30px] bgNew rounded-md">
            Effective task allocation among team members helped us achieve our
            targets on time.
          </p>
        </SwiperSlide>
        <SwiperSlide className="">
          <p className="h-full flex justify-center items-center text-[30px] bgNew rounded-md">
            Continuous communication within the team enabled us to solve
            problems quickly and make steady progress.
          </p>
        </SwiperSlide>
        <SwiperSlide className="">
          <p className="h-full flex justify-center items-center text-[30px] bgNew rounded-md">
            Seeing tangible results from our efforts was extremely satisfying.
          </p>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Project2;
