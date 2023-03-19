import {SvgIcon} from "@/uikit";
import { FC, memo } from "react";
import style from './index.module.css'

export interface SearchInputProps {
  type?: string;
  title?: string;
  background?: string;
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = memo(({type, title, background, className}) => {
  return <div className={`${style.container}`}>
    <input placeholder="Search Product Name/Number" />
    <div className={style.searchIcon}>
      <SvgIcon name="home_ic_search" />
    </div>
  </div>
})

SearchInput.displayName = 'SearchInput';
