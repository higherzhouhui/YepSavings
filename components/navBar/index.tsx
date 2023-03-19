import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.css'

export interface NavbarProps {
  type?: string;
  title?: string;
  background?: string;
}

export const Navbar: FC<NavbarProps> = memo(({type, title, background}) => {
  return <div className={style.NavbarContainer} style={{background: background || '#fff'}}>
    {
      type === 'Home' ? <div className={style.home}>
        <div className={style.left}><SvgIcon name="home_nac_ic_menu" /></div>
        <div className={style.middle}><img src="/static/image/logo-text.png" alt='logo'/></div>
        <div className={style.right}>
          <button>Log in</button>
        </div>
      </div> : <div>222</div>
    }
    
  </div>
})

Navbar.displayName = 'Navbar';
