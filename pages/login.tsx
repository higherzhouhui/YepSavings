import { FC, useState } from "react";
import { SvgIcon } from "@/uikit";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Nav } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const Login: NextPage = () => {
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
      <Nav title="Sign In" />
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
                Password is required.
              </p>
            )}
          </div>
          <div className="text-[#1A77F2] text-[13px] mt-[8px] text-right">
            Forgot My Password
          </div>
          <button
            type="submit"
            className="w-full h-[45px] mt-[30px] shadow-md shadow-[rgba(26,119,242,0.32)] font-medium text-[16px] text-white rounded-[4px] bg-[#1A77F2]"
          >
            Sign In
          </button>
          <p className="mt-[25px] text-center">
            Don&apos;t have an account？
            <span
              className="text-[#1A77F2]"
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign up
            </span>
          </p>
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

export default Login;
