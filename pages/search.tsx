import { FC, useState } from 'react'
import { NextPage } from 'next';
import style from '@/styles/Search.module.scss'
import { Navbar, SearchInput, Product, LoadMore } from '@/components';

const Search: NextPage = () => {
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
  const [productList, setProductList] = useState<any[]>([
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
  ])
 
  return (
    <div className={style.SearchContainer}>
      <Navbar type='Search' />
        <div className={`container p-4 ${style.productList}`}>
          {
            productList.map((item: any, index) => {
              return <Product {...item} key={index} />
            })
          }
      </div>
      <LoadMore remain={111} handleCllick={() => alert(1)} />
    </div>
  )
}

Search.displayName = 'Search'
export default Search;
