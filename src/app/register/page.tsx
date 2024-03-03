import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Arrow from "@/components/svg/arrow.svg"
import Link from "next/link";

const Form = dynamic(() => import('@/components/register/form'))

export default function Register() {
  return (
    <>
      <Image
        src="/images/image.png"
        width={1000}
        height={1000}
        alt="Image"
        className="absolute top-0 right-0 w-52"
      />
      <Link href="https://www.auscharge.com/login?redirect=/" className="w-full flex justify-start ml-3 mt-4">
        <Image 
          src={Arrow}
          alt="arrow"
          width={1000}
          height={1000}
          className="w-4"
        />
      </Link>
      <div className="w-full flex relative mt-20 items-center justify-center">
        <Form />
      </div>
    </>
  );
}
