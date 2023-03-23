import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";

const Verify: NextPage = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPass, setIsPass] = useState<boolean>(true);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [via, setVia] = useState<boolean>(false);

  const onLogin = (data: any) => {
    console.log(control);

    console.log(data);
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
        <form onSubmit={handleSubmit(onLogin)} className="mt-[25px]">
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
          <div className="mt-[10px] relative">
            <input
              placeholder="Password"
              type={isPass ? "password" : "text"}
              className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
              style={{
                borderColor: errors.password ? "#F72C2B" : "#CECECE",
              }}
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /(?=.*[A-Z])(?=.*[0-9])/,
              })}
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
              <p className="text-[#F72C2B] text-[13px]">Password is error.</p>
            )}
          </div>
          <div className="mt-[10px] relative">
            <input
              placeholder="Re-Password"
              type={isPass ? "password" : "text"}
              className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
              style={{
                borderColor: errors.rePassword ? "#F72C2B" : "#CECECE",
              }}
              {...register("rePassword", {
                required: true,
                minLength: 8,
                pattern: /(?=.*[A-Z])(?=.*[0-9])/,
              })}
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

            {errors.rePassword && (
              <p className="text-[#F72C2B] text-[13px]">Password is error.</p>
            )}
          </div>
          <div className="text-[#b5b5b5] text-[13px] mt-[8px] text-center">
            Your password should be a minimum of 8 characters and contain at
            least 1 capital letter and 1 number
          </div>
          <button
            type="submit"
            className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
          >
            Sign Up
          </button>
        </form>
      </div>
      <h3 className="text-[15px] color-[#2B2C43] font-medium mt-[30px] mb-[15px]">
        Or Use
      </h3>
      <div className="w-full h-[45px] mb-[10px] cursor-pointer flex justify-between items-center px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <span className="text-[15px] text-[#2B2C43]">Continue with Google</span>
        <Image
          src={"/static/image/sign_logo_google.png"}
          width={29}
          height={29}
          alt="google"
        />
      </div>
      <div className="w-full h-[45px] cursor-pointer flex justify-between items-center px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <span className="text-[15px] text-[#2B2C43]">
          Continue with Facebook
        </span>
        <SvgIcon name="find_logo_facebook" width={29} height={29} />
      </div>
      <div className="text-[#2B2C43] text-[14px] mt-[30px] pb-10 text-center">
        <p>By signing in, you agree to our</p>
        <p>
          <span className="text-[#1A77F2] mr-1">Terms of Service </span>&
          <span className="text-[#1A77F2] ml-1">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Verify;
