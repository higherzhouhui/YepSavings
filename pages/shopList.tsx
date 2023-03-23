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
    if (!searchValue) {
      setProductList([])
    }
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
    <div className={`${style.ShopListContainer} container mx-auto relative`}>
      <Navbar title='My Shopping List' />
       <div className={`${style.content}`}>
        <div className={style.addItemInputWrapper}>
          <input placeholder="+ Add an item" value={searchValue} onChange={(e) => {onChangeVluae(e)}} onKeyDown={(e) => onkeydown(e)} />
          <div className={style.confirmBtn} onClick={handleSearch}>Done</div>
        </div>
        {
          productList.length ? <>
            <div className={style.pageList}>
          {
            productList.map((item, index) => {
              return <ShopItem {...item} key={index} handleClick={() => handleClick(index)}/>
            })
          }
        </div>
        <div className='shadow flex w-full mt-4 h-12 bg-[white] items-center px-4 rounded'>
          <div className='rounded-full mr-[12px] h-[22px] w-[22px] border border-[rgb(209,209,209)]'></div>
          <div className='text-[#2B2C43]'>MILK</div>
        </div>
        <div className='shadow flex w-full mt-4 h-12 bg-[white] items-center px-4 rounded'>
          <div className='rounded-full mr-[12px] h-[22px] w-[22px] border border-[rgb(209,209,209)]'></div>
          <div className='text-[#2B2C43]'>FOOD</div>
        </div>
        <div className='w-full mt-8 flex items-center rounded-md shadow-md justify-center h-12 text-[#fff] bg-[#1A77F2] text-lg'>
          Delete All
        </div></> : <div className='flex items-center justify-center min-h-full absolute w-full'>
          <div><img src='/static/image/empty.png' alt='empty' className='w-36 h-36' /></div>
        </div>
        }
       </div>
    </div>
  )
}

ShopList.displayName = 'ShopList'
export default ShopList;
