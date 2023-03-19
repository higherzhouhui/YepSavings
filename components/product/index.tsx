import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.css'
import Image from 'next/image'
export interface ProductProps {
  isFavorite?: boolean;
  code: number;
  price: number;
  img: string;
  netWork?: string;
  name: string;
  desc: string;
  desc2?: string;
  desc3?: string;
}

export const Product: FC<ProductProps> = memo(({isFavorite, code, price, img, netWork, name, desc, desc2, desc3}) => {
  return <div className={`${style.container}`}>
    <div className={style.top}>
      <Image className={style.productImg} src={img} fill={true} alt="business" /> 
      <div className={style.content}>
        <div className={`${style.info}`}>
          <div className="text-sm font-semibold mb-1">{code}</div>
          <div className="text-sm text-center">
            <div className="font-semibold">{desc}</div>
            <div className="text-xs">{desc2}</div>
            <div className={style.price}>${price}</div>
            <div className="text-xs">{desc3}</div>
          </div>
        </div>
        <div className={`${style.origin} flex items-center`}>
          <Image src='/static/image/logo.png' width={17} height={17} alt='site' className={style.site}/>
          <span className="ml-1">{netWork || 'YepSavings.com'}</span>
        </div>
      </div>
    </div>
    <div className={style.bot}>
      <div className={style.left}>
        <div className={`${style.price} text-lg`}>
          <span>${price} OFF</span>
        </div>
        <div className={`${style.title}`}>{name}</div>
      </div>
      <div className={style.right}>
          <span className="text-lg">{isFavorite ? '-' : '+'}</span> List
      </div>
    </div>
  </div>
})

Product.displayName = 'Product';
