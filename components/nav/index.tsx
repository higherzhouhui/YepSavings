import { SvgIcon } from "@/uikit";
import { useRouter } from "next/router";
import { FC, memo } from "react";

export interface INavProps {
  title: string;
  operator?: React.ReactNode;
}

export const Nav: FC<INavProps> = memo(({ title, operator }) => {
  const router = useRouter();

  return (
    <div className="w-full h-[45px] z-10 fixed top-0 left-0 bg-white">
      <div className="w-[44px] h-[44px] absolute left-0 top-0">
        <SvgIcon name="com_nav_ic_back" width={44} height={44} />
      </div>
      <h3 className="h-full flex items-center justify-center text-[#2B2C43] text-[19px] font-semibold">
        {title}
      </h3>
      <div className="h-[44px] absolute right-0 top-0">{operator}</div>
    </div>
  );
});

Nav.displayName = "Nav";
