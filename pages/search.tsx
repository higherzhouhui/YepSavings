import { FC, useEffect, useState } from 'react'
import { NextPage } from 'next';
import style from '@/styles/Search.module.scss'
import { Navbar, SearchInput, Product, LoadMore } from '@/components';
import { SvgIcon } from '@/uikit';
import { useRouter } from 'next/router';

const Search: NextPage = () => {
  const router = useRouter()
  const { search } = router.query
  const tabList = [
    {name: 'Warehouse Savings', value: 'savings'},
    {name: 'Costco Flyer', value: 'flyer'}
  ]
  const [currentIndex, setCurrentIndex] = useState(tabList[0])
  const typeList = [
    {name: 'All', value: 'All'},
    {name: 'Food', value: 'Food'},
    {name: 'NonFood', value: 'NonFood'},
    {name: 'Clothing', value: 'Clothing'},
    {name: 'Shoes', value: 'Shoes'},
    {name: 'Backet', value: 'Backet'},
    {name: 'Chicken', value: 'Chicken'},
    {name: 'Meta visa', value: 'Meta visa'},
  ]
  const [currentType, setCurrentType] = useState(typeList[0])
  const [historyList, setHistoryList] = useState<string[]>([])
  const staticArr = [
    {
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 3.25, 
      img: '/static/image/product1.png', 
      code: 11323
    },{
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 2.33, 
      img: '/static/image/product2.png', 
      code: 3235
    },{
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 3.25, 
      img: '/static/image/product3.png', 
      code: 889
    },{
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 3.25, 
      img: '/static/image/product1.png', 
      code: 1124
    },{
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 3.25, 
      img: '/static/image/product3.png', 
      code: 478
    },{
      isFavorite: false, 
      name: 'QUINOA SALAD', 
      desc: 'Ginger Cookies', 
      desc2: 'Less In-Store Rebate', 
      desc3: 'Per Package at Register', 
      price: 3.25, 
      img: '/static/image/product2.png', 
      code: 133
    },
  ]
  const [productList, setProductList] = useState<any[]>(staticArr)
  const handleDelete = () => {
    setHistoryList([])
    localStorage.setItem('historyList', '')
  }
  useEffect(() => {
    if (!search) {
      setProductList([])
      const list = localStorage.getItem('historyList')
      if (list) {
        const arr = Array.from(new Set(list.split(',')))
        setHistoryList(arr)
      } else {
        setHistoryList([])
      }
      } else {
        setProductList(staticArr)
      }
  }, [search])
  return (
    <div className={style.SearchContainer}>
      <Navbar type='Search' />
        {
          productList.length ? <div className={`container mx-auto p-4 ${style.productList}`}>
          {
            productList.map((item: any, index) => {
              return <Product {...item} key={index} />
            })
          }
        </div> : null
        }
      <div className='p-4 pt-8'>
          <div className='flex justify-between items-center'>
            <div className='font-medium text-lg'>Recent</div>
            <SvgIcon name='search_ic_del' width={22} height={22} onClick={handleDelete}/>
          </div>
          <div className='mt-4'>
            {
              historyList.map(item => {
                return <span 
                key={item} 
                className='bg-[#F1F7FB] text[#2B2C43] px-2 py-1 text-opacity-70 mr-2'
                onClick={() => router.push(`/search?search=${item}`)}>{item}</span>
              })
            }
          </div>
        </div>
        <LoadMore remain={productList.length - 3} handleCllick={() => alert(1)} />
    </div>
  )
}

Search.displayName = 'Search'
export default Search;
