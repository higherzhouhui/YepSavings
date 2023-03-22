import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const Forgot: NextPage = () => {
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
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <div className="w-full px-[15px] py-[10px]">
      <Nav title="Forgot Password" />
      <div className="py-[25px] px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <Image
          src={"/static/image/logo-text.png"}
          width={161}
          height={27}
          alt="google"
        />
        <h3 className="text-[30px] font-bold mt-[25px]">
          {step === 1 || step === 2 ? "Forgot Password" : "Reset Password"}
        </h3>
        {step === 2 && (
          <h4 className="text-[#1A77F2] mt-[12px] font-bold">Email Sent</h4>
        )}
        {step === 1 && (
          <p className="text-[15px] mt-[12px]">
            We&apos;ll send you an email where you can reset your password or
            sign in immediately with a magic link.
          </p>
        )}
        {step === 2 && (
          <p className="text-[15px] mt-[30px]">
            We&apos;ve sent an email to amask27@gmail.com. Note that this link
            is valid for one hour.
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
              Send Email
            </button>
            <button
              type="button"
              className="w-full h-[45px] mt-[10px] border border-[#D5D5D5] shadow-md shadow-[rgba(42,31,57,0.05)] font-medium text-[16px] rounded-[4px] bg-[#ffffff]"
              onClick={() => {
                router.push("/login");
              }}
            >
              Back to sign In
            </button>
          </form>
        )}
        {step === 2 && (
          <button
            type="button"
            className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Okay
          </button>
        )}
        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-[25px]">
            <div className="mt-[10px] relative">
              <input
                placeholder="Password"
                type={isPass ? "password" : "text"}
                className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
                style={{
                  borderColor: errors.password ? "#F72C2B" : "#CECECE",
                }}
                {...register("password", { required: true })}
              />
              <div className="w-[45px] h-[45px] absolute right-0 top-0 flex justify-center items-center">
                <SvgIcon
                  name="sign_ic_hidden"
                  width={25}
                  height={25}
                  onClick={() => {
                    setIsPass(!isPass);
                  }}
                />
              </div>

              {errors.password && (
                <p className="text-[#F72C2B] text-[13px]">
                  Username is required.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
            >
              Save Password
            </button>
          </form>
        )}
        <p className="mt-[25px] text-center">
          Need Help?
          <span
            className="text-[#1A77F2]"
            onClick={() => {
              router.push("/register");
            }}
          >
            Contact Support
          </span>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
