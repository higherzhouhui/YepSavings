import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.scss'

export interface LoadMoreProps {
  remain: number;
  handleCllick: () => void;
}

export const LoadMore: FC<LoadMoreProps> = memo(({remain, handleCllick}) => {
  const scrollTop = () => {
    let scrollTop = document.scrollingElement?.scrollTop || 0;
    const timer = setInterval(() => {
      let scrollUnit = 100;
      if (scrollTop > 1000) {
        scrollUnit = 200;
      }
      scrollTop -= scrollUnit;
      if (scrollTop < 0) {
        clearInterval(timer);
        return;
      }
      window.scrollTo(0,scrollTop);
    }, 20);
  }
  return <div className={`${style.container} ${remain > 0 ? 'visible' : 'invisible'}`}>
    <div className={style.remain} onClick={handleCllick}>
      <SvgIcon name="com_suspension_ic_list" />
      <div className={style.number}>{remain || 0}</div>
    </div>
    <div className={style.backTop} onClick={() => scrollTop()}>
      <SvgIcon name="ic 2" />
    </div>
  </div>
})

LoadMore.displayName = 'LoadMore';
