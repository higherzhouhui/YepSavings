import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const ChangePass: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPass, setIsPass] = useState<boolean>(true);

  const onLogin = (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full px-[15px] py-[10px]">
      <Nav title="Change Password" />
      <div className="py-[25px] px-[15px] bg-white rounded-[10px] drop-shadow-sm">
        <Image
          src={"/static/image/logo-text.png"}
          width={161}
          height={27}
          alt="google"
        />
        <form onSubmit={handleSubmit(onLogin)} className="mt-[25px]">
          <div className="relative">
            <input
              placeholder="Please enter your current password"
              type={isPass ? "password" : "text"}
              className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
              style={{
                borderColor: errors.currentPassword ? "#F72C2B" : "#CECECE",
              }}
              {...register("currentPassword", { required: true })}
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

            {errors.currentPassword && (
              <p className="text-[#F72C2B] text-[13px]">
                Current password is required.
              </p>
            )}
          </div>
          <div className="mt-[10px] relative">
            <input
              placeholder="Please enter your new password"
              type={isPass ? "password" : "text"}
              className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
              style={{
                borderColor: errors.newPassword ? "#F72C2B" : "#CECECE",
              }}
              {...register("newPassword", { required: true })}
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

            {errors.newPassword && (
              <p className="text-[#F72C2B] text-[13px]">
                New password is required.
              </p>
            )}
          </div>
          <div className="mt-[10px] relative">
            <input
              placeholder="Re-enter your new password"
              type={isPass ? "password" : "text"}
              className="w-full h-[45px] border-[#CECECE] border rounded-[5px] px-[15px]"
              style={{
                borderColor: errors.rePassword ? "#F72C2B" : "#CECECE",
              }}
              {...register("rePassword", { required: true })}
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
              <p className="text-[#F72C2B] text-[13px]">
                Repeat password is required.
              </p>
            )}
          </div>
          <div className="mt-[30px] flex">
            <button
              type="submit"
              className="flex-1 h-[45px] border border-[#D5D5D5] shadow-md shadow-[rgba(42,31,57,0.07)] font-medium text-[16px]  rounded-[4px] bg-[#ffffff]"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="flex-1 w-full ml-[11px] h-[45px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
