import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const Verify: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState<number>(1);
  const [isPass, setIsPass] = useState<boolean>(true);
  const onSubmit = (data: any) => {
    console.log(data);
    if (step < 2) {
      setStep(step + 1);
    }
  };
  return (
    <div className="w-full px-[15px] py-[10px]">
      <Nav title="Sign Up" />
      <div className="py-[25px] px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <Image
          src={"/static/image/logo-text.png"}
          width={161}
          height={27}
          alt="google"
        />
        <h3 className="text-[30px] font-bold mt-[25px]">
          {step === 1 ? "Reset your password" : "Please verify your email"}
        </h3>
        {step === 1 && (
          <p className="text-[15px] mt-[12px]">
            Please enter your email to receive a code to reset a password.
          </p>
        )}
        {step === 2 && (
          <p className="text-[15px] mt-[12px]">
            In order to verify your account, please enter your verification code
            below.
          </p>
        )}
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
                style={{
                  borderColor: errors.email ? "#F72C2B" : "#CECECE",
                }}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-[#F72C2B] text-[13px]">Email is required.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
            >
              Send me the code
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
            <div className="mt-[10px] relative">
              <input
                placeholder="Verification code"
                type="text"
                className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
                style={{
                  borderColor: errors.password ? "#F72C2B" : "#CECECE",
                }}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-[#F72C2B] text-[13px]">
                  Verification code is required.
                </p>
              )}
            </div>
            <div className="text-right mt-[9px]">
              <span className="text-[13px] text-[#1A77F2]">Resend</span>
            </div>
            <div className="text-[#b5b5b5] text-[13px] mt-[30px] text-center">
              Didn&apos;t receive a verification code? Please check our spam or
              junkmail folder
            </div>
            <button
              type="submit"
              className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
            >
              Continue
            </button>
            <p className="mt-[25px] text-[13px] text-[#1A77F2] text-center">
              Maybe later
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Verify;
