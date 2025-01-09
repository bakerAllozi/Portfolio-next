import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import Loading from "./components/Loading";
import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

export const metadata = {
  title: "baker allozi",
  description: "front end ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` `}>
        <Suspense fallback={<Loading />}>
          <NextUIProvider>
            <Container>
              <Navbar />
              {children}
            </Container>
          </NextUIProvider>
        </Suspense>
      </body>
    </html>
  );
}
