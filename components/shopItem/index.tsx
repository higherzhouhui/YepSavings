import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.scss'
import Image from 'next/image'
import { showTip } from "@/utils";
import { useRouter } from "next/router";
export interface ShopItemProps {
  isChecked?: boolean;
  name: string;
  desc: string;
  price: string;
  exp: string;
  img: string;
  handleClick: () => void;
}

export const ShopItem: FC<ShopItemProps> = memo(({isChecked, name, desc, price, exp, img, handleClick}) => {
  const router = useRouter()
  const handleAddList = () => {
    showTip({content: 'Add To List Successfully!'})
  }
  return <div className={style.container} onClick={handleClick}>
   <div className={style.left} style={{ border: isChecked ? '1px solid transparent' : '1px solid rgb(209,209,209)'}}>
      {isChecked ? <SvgIcon name="list_ic_rb_sel" /> : null}
   </div>
   <div className={style.right}>
      <div className={style.introduce}>
          <p className="text-lg font-medium ">{name}</p>
          <p className="">{desc}</p>
          <p className="">EXP. {exp}</p>
          <p className={`text-lg font-semibold font-bold ${style.price}`}>save <span className="text-xl">${price}</span></p>
      </div>
      <div className={style.logo}>
        <Image src={img} fill={true} alt='logo' />
      </div>
   </div>
  </div>
})

ShopItem.displayName = 'ShopItem';
