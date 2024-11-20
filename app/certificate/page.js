"use client";

import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Image } from "@nextui-org/react";

const certificates = [
  {
    title: "Certificate 1",
    file: "/UC-02a4364f-0a96-461d-a2c6-a048b90cb57b.pdf",
  },
  {
    title: "Certificate 2",
    file: "/UC-d3fe02bf-0531-4cf3-9b3b-f6462decdf3b.pdf",
  },
  {
    title: "Certificate 3",
    file: "/photo_2024-11-18_14-28-56.jpg",
  },
];

const page = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Certificates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {cert.title}
            </h2>
            <div className="border rounded overflow-hidden">
              {cert.file.endsWith(".pdf") ? (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={cert.file} />
                </Worker>
              ) : (
                <Image
                  src={cert.file}
                  alt={cert.title}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
