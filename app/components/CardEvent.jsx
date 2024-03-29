"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Link from "next/link";

const CardEvent = ({
  title,
  date,
  location,
  src,
  alt,
  link,
  description,
  src_qrcode,
  alt_qrcode,
}) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // const handleImageClick = () => {
  //   setIsImageExpanded(!isImageExpanded);
  // };

  const descriptionWithLineBreaks = description
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div>
      {/* <div className="absolute z-10 bg-yellow-300 h-10 py-5 px-4 drop-shadow-2xl flex items-center"> */}
      {/* <div className="absolute -rotate-3 opacity-75 z-10 bg-yellow-300 h-10 py-8 px-6 drop-shadow-2xl flex items-center"> */}
      {/* <div className="absolute opacity-75 z-10 bg-yellow-300 h-10 py-8 px-6 drop-shadow-2xl flex items-center">
        Événement à venir
      </div> */}
      <div className="h-auto flex flex-col my-12 bg-white p-6 md:flex-row">
        <Link
          className="flex items-center border-4 border-yellow-100 md:w-1/2"
          // onClick={handleImageClick}
          style={{ cursor: "pointer" }}
          href={link}
          target="blank"
        >
          <Image
            // className={`h-96 ${isImageExpanded ? "h-full" : ""}`}
            // className={`h-auto ${isImageExpanded ? "h-full" : ""}`}
            src={src}
            alt={alt}
            width={800}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <Link
          href={link}
          target="blank"
          className="text-black px-0 mt-3 sm:px-3 md:mt-0 md:w-1/2"
        >
          <div>
            <h3 className="mb-3 text-md font-bold sm:text-2xl md:ml-7">
              {title}
            </h3>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-10 flex items-center text-gray-400">
                <ScheduleIcon />
              </div>
              <h4 className="text-md my-3 sm:text-md">{date}</h4>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-10 flex items-center text-gray-400">
                <PlaceIcon />
              </div>
              <h4 className="text-md my-1 sm:text-md">{location}</h4>
            </div>
            {/* <p className="mt-3 ml-7 text-sm sm:text-base"> */}
            <p className="mt-3 text-base md:ml-7">
              {descriptionWithLineBreaks}
            </p>
          </div>
          <div className="mt-3 flex items-center border-slate-500 md:ml-6">
            <Image
              src={src_qrcode}
              alt={alt_qrcode}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="border"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardEvent;
