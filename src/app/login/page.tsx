import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";

const Form = dynamic(() => import('@/components/login/form'))

export default function Login() {
  return (
    <>
      <Image
        src="/images/image.png"
        width={1000}
        height={1000}
        alt="Image"
        className="absolute top-0 right-0 w-52"
      />
      <div className="w-full flex relative mt-20 items-center justify-center">
        <Form />
      </div>
    </>
  );
}
