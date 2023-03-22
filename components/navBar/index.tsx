import {SvgIcon} from "@/uikit";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { SearchInput } from "../searchInput";
import style from './index.module.scss'

export interface NavbarProps {
  type?: string;
  title?: string;
  background?: string;
}

export const Navbar: FC<NavbarProps> = memo(({type, title, background}) => {
  const router = useRouter();

  return <div className={`${style.NavbarContainer} container`} style={{background: background || '#fff'}}>
    {
      type === 'Home' ? <div className={style.home}>
        <div className={style.left}><SvgIcon name="home_nac_ic_menu" /></div>
        <div className={style.middle}><img src="/static/image/logo-text.png" alt='logo'/></div>
        <div className={style.right}>
          <button>Log in</button>
        </div>
      </div> : type === 'Search' ?
      <div className={style.searchContainer}>
        <div className={style.back} onClick={() => router.push('/')}>
          <SvgIcon name="com_nav_ic_back" />
        </div>
        <div className={style.searchInputWrapper}><SearchInput /></div>
      </div> 
      : type === 'Detail' ? <div className={style.home}>
        <div className={style.left} onClick={() => router.back()}>
          <SvgIcon name="com_nav_ic_back" />
        </div>
        <div className={style.middle}><img src="/static/image/logo-text.png" alt='logo'/></div>
      <div className={style.right}>
        <button>Sign up</button>
      </div>
    </div> :
      <div className={style.normaltNav}>
        <div className={style.back} onClick={() => router.back()}>
          <SvgIcon name="com_nav_ic_back" />
        </div>
        <span className="text-xl font-bold">{title}</span>
      </div>
    }
    
  </div>
})

Navbar.displayName = 'Navbar';
