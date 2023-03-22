import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const Subscribe: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full px-[15px] py-[10px]">
      <Nav title="Subscribe" />
      <div className="py-[25px] px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <Image
          src={"/static/image/logo-text.png"}
          width={161}
          height={27}
          alt="google"
        />
        <h3 className="text-[30px] font-bold mt-[25px]">
          Great deals sent straight to your inbox
        </h3>

        <p className="text-[15px] mt-[12px]">
          We&apos;ll send your updates and deals from stores near you. By
          signing up for Yeapsaving emails, you agree to our terms & conditions.
          You can opt out at any time. For more information view our
        </p>

        <button
          type="submit"
          className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
        >
          Subscribe to emails
        </button>
        <p className="mt-[25px] text-[13px] text-[#1A77F2] text-center">
          No thanks
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
