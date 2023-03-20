import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.scss'
import Image from 'next/image'
import { showTip } from "@/utils";
import { useRouter } from "next/router";
export interface ProductProps {
  isFavorite?: boolean;
  detail?: boolean;
  code: number;
  price: number;
  img: string;
  netWork?: string;
  name: string;
  desc: string;
  desc2?: string;
  desc3?: string;
}

export const Product: FC<ProductProps> = memo(({isFavorite, detail, code, price, img, netWork, name, desc, desc2, desc3}) => {
  const router = useRouter()
  const handleAddList = () => {
    showTip({content: 'Add To List Successfully!'})
  }
  const routeTodetail = () => {
    router.push(`/detail/${code}`)
  }
  return <div className={`${style.container}`} style={{marginBottom: detail ? '0' : '1rem'}}>
    <div className={style.top} onClick={() => {routeTodetail()}}>
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
    {
      detail ? <div className={style.detailContainer}>
        <div className='container px-4'>
          <div className='container flex h-9 items-center'>
            <SvgIcon name='ic' width={19} height={19} />
            <div className='mx-3 flex font-medium'>
              Location:
              <span>Beacon Hill, Calgary, AB</span>
            </div>
          </div>
          <div className={`p-3 ${style.payContainer}`}>
            <div className='text-lg font-medium'>
              {desc} <br/>
              {desc2} <br/>
              {desc3} <br/>
            </div>
            <div className={style.divider} />
            <div className={style.payAddList}>
              <span className={`${style.payPrice} text-lg`}>${price} OFF</span>
              <div className={style.addListBtn} onClick={() => handleAddList()}>
                <span className="text-lg">{isFavorite ? '-' : '+'}</span> List
            </div>
            </div>
          </div>
        </div>
      </div> : <div className={style.bot}>
      <div className={style.left}>
        <div className={`${style.price} text-lg`}>
          <span>${price} OFF</span>
        </div>
        <div className={`${style.title}`}>{name}</div>
      </div>
      <div className={style.addListBtn} onClick={() => handleAddList()}>
          <span className="text-lg">{isFavorite ? '-' : '+'}</span> List
      </div>
    </div>
    }
    
  </div>
})

Product.displayName = 'Product';
