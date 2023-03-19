import { FC, useState } from 'react'
import { NextPage } from 'next';
import style from '@/styles/Home.module.css'
import { Navbar, SearchInput, Product } from '@/components';
import { SvgIcon } from '@/uikit';
import Image from 'next/image'

const Home: NextPage = () => {
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
  const [activityList, setActivityList] = useState<any[]>([
    {time: 'Valid January 2 to 29, 2023', cover: '/static/image/activity1.png'},
    {time: 'Valid January 12 to 28, 2023', cover: '/static/image/activity2.png'},
    {time: 'Valid January 3 to 19, 2023', cover: '/static/image/activity1.png'},
    {time: 'Valid January 8 to 25, 2023', cover: '/static/image/activity2.png'},
  ])

  return (
    <div className={style.HomeContainer}>
        <Navbar type='Home' />
        <div className='container px-4'>
          <div className='container flex h-9 items-center'>
            <SvgIcon name='ic' width={19} height={19} />
            <div className='mx-3 flex font-medium'>
              Location:
              <span>Beacon Hill, Calgary, AB</span>
            </div>
            <SvgIcon name='home_add_ic_arrow_down' width={14} height={14} />
          </div>
          <div className={`container my-3 h-32 ${style.banner}`}>
            <div className={`px-6 text-lg font-semibold text-white text-center ${style.bannerText}`}>Not in flyer Costco in-warehouse
sale items updates</div>
            <img src='/static/image/homeBanner.png' alt='homepage' className='object-cover w-full h-full'/>
          </div>
          <div className={`container my-3 h-28 ${style.update}`}>
            <div className={`py-3 pl-3 ${style.updateText}`}>
              <div className='text-lg text-blue-600 font-semibold'>Update this afternoon</div>
              <div className='mt-2 flex items-center'>
                <SvgIcon name='home_update_ic_date' width={16} height={16} />
                <span className='ml-2'>Photos taken Monday Jan 25, 2023</span>
              </div>
              <div className='mt-2 flex items-center'>
                <SvgIcon name='home_update_ic_sale' width={16} height={16} />
                <span className='ml-2'>Sale items:<span className='text-blue-600'>233 NOT IN FLYER</span> & 99 in flyer</span>
              </div>
            </div>
            <img src='/static/image/homeUpdate.png' alt='homepage' className='object-cover w-full h-full'/>
          </div>
          <div className='container my-3'>
            <SearchInput />
          </div>
          <div className='flex items-center mt-3 mb-5'>
            {
              tabList.map((item, index) => {
                return <div 
                key={index} 
                className={`${currentIndex.value === item.value ? style.tabActive : ''} ${style.tab} text-lg`}
                onClick={() => {setCurrentIndex(item)}}
                >{item.name}
                </div>
              })
            }
          </div>
        </div>
        <div className={currentIndex.value === 'savings' ? style.showContainer : style.hideContainer}>
          <div className={`contain mt-3 flex px-4 ${style.typeList}`}>
            {
              typeList.map((item, index) => {
                return <div 
                key={index} 
                className={`${currentType.value === item.value ? style.typeActive : ''} ${style.typeTab}`}
                onClick={() => {setCurrentType(item)}}
                >{item.name}
                </div>
              })
            }
          </div>
          <div className={`container p-4 ${style.productList}`}>
            {
              productList.map((item: any, index) => {
                return <Product {...item} key={index} />
              })
            }
          </div>
        </div>
        <div className={currentIndex.value !== 'savings' ? style.showContainer : style.hideContainer}>
            <div className='px-4'>
              {
                activityList.map((item, index) => {
                  return <div className='mb-8' key={index}>
                    <div className={style.validTime}>
                      <div className={style.validTimeContent}>
                        <SvgIcon name='home_Costco Flyer_ic_date' />
                        <span className='text-blue-600 font-semibold'>{item.time}</span>
                        </div>
                    </div>
                    <div className={style.activityCover}>
                      <Image src={item.cover} fill={true} alt='avtivity' />
                    </div>
                  </div>
                })
              }
            </div>
        </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home;
