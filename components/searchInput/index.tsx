import {SvgIcon} from "@/uikit";
import { useRouter } from "next/router";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import style from './index.module.scss'

export interface SearchInputProps {
  type?: string;
  title?: string;
  background?: string;
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = memo(({type, title, background, className}) => {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter();
  const onChangeVluae = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }
  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?search=${searchValue}`)
      const list = localStorage.getItem('historyList')
      if (searchValue) {
        localStorage.setItem('historyList', list ? list + ',' + searchValue : searchValue)
      }
    }
  }
  const { search } = router.query
  useEffect(() => {
    setSearchValue(search as any as string)
  }, [search])
  return <div className={`${style.container}`}>
    <input placeholder="Search Product Name/Number" value={searchValue} onChange={(e) => {onChangeVluae(e)}} onKeyDown={(e) => onkeydown(e)} />
    <div className={style.searchIcon}>
      <SvgIcon name="home_ic_search" />
    </div>
    {
      searchValue ? <div className={style.clearIcon} onClick={() => setSearchValue('')}>
      <SvgIcon name="com_search_ic_del" />
      </div> : null
    }
  </div>
})

SearchInput.displayName = 'SearchInput';
