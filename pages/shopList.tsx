import { ChangeEvent, FC, useState } from 'react'
import { NextPage } from 'next';
import style from '@/styles/ShopList.module.scss'
import { Navbar, SearchInput, Product, LoadMore, ShopItem } from '@/components';

const ShopList: NextPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [productList, setProductList] = useState<any[]>([
    {
      isChecked: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      exp: 'Less In-Store Rebate', 
      price: 3.25, 
      img: '/static/image/product1.png', 
    },{
      isChecked: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      exp: 'Less In-Store Rebate', 
      price: 3.25, 
      img: '/static/image/product1.png', 
    },{
      isChecked: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      exp: 'Less In-Store Rebate', 
      price: 3.25, 
      img: '/static/image/product1.png', 
    },{
      isChecked: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      exp: 'Less In-Store Rebate', 
      price: 3.25, 
      img: '/static/image/product1.png', 
    },{
      isChecked: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      exp: 'Less In-Store Rebate', 
      price: 3.25, 
      img: '/static/image/product1.png', 
    },
  ])
  const handleSearch = () => {
  }
  const onChangeVluae = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }
  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
    }
  }
  const handleClick = (index: number) => {
    productList[index].isChecked = !productList[index].isChecked
    setProductList([...productList])
  }
  return (
    <div className={style.ShopListContainer}>
      <Navbar title='My Shopping List' />
       <div className={style.content}>
        <div className={style.addItemInputWrapper}>
          <input placeholder="+ Add an item" value={searchValue} onChange={(e) => {onChangeVluae(e)}} onKeyDown={(e) => onkeydown(e)} />
          <div className={style.confirmBtn} onClick={handleSearch}>Done</div>
        </div>
        <div className={style.pageList}>
          {
            productList.map((item, index) => {
              return <ShopItem {...item} key={index} handleClick={() => handleClick(index)}/>
            })
          }
        </div>
       </div>
    </div>
  )
}

ShopList.displayName = 'ShopList'
export default ShopList;
