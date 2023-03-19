import { FC, useEffect, useState } from 'react'
import { NextPage } from 'next';
import style from '@/styles/Detail.module.css'
import { Navbar, SearchInput, Product } from '@/components';
import { SvgIcon } from '@/uikit';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Detail: NextPage = () => {
  const tabList = [
    {name: 'Warehouse Savings', value: 'savings'},
    {name: 'Costco Flyer', value: 'flyer'}
  ]
  const router = useRouter()
  const { id } = router.query
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
  const [detail, setDetail] = useState(productList[0])
  useEffect(() => {
    const list = productList.filter(item => {
      return item.code == id
    })
    if (list.length) {
      setDetail(list[0])
    }
  }, [id])
  return (
    <div className={style.DetailContainer}>
        <Navbar type='Detail'/>
        <Product {...detail} detail={true} />
        <div className={style.advert}>
          <div className={style.gooleIcon}><SvgIcon name='details_bot_google' /></div>
          <div className={style.btns}>
            <div className={style.btnActive}>Send feedback</div>
            <div className={style.normal}>
              Why this ad?<SvgIcon name='google_btn_ic' />
            </div>
          </div>
        </div>
        <div className={`container p-4 ${style.productList}`}>
          <div className='my-6 text-xl font-semibold'>You might also like</div>
          {
            productList.map((item: any, index) => {
              return <Product {...item} key={index} />
            })
          }
          <div className='mt-8'>
            <div className='text-xl text-center'>Find Us on Facebook</div>
            <div className='w-3/5 mx-auto text-center' style={{opacity: 0.8}}>Follow us to receive Updates
every Monday and Friday!</div>
            <div className={style.marketContainer}>
              <Image src='/static/image/market.png' alt='market' fill={true} className={style.marketBg} />
              <div className={style.marketContent}>
                <div className={style.marketTop}>
                  <img src="/static/image/costco.png" alt='costco' />
                  <div className={style.marketTitle}>
                    <p className='text-lg'>Costco Canada Weekly Secret Sales</p>
                    <p style={{opacity: 0.8}}>5.265 followers</p>
                  </div>
                </div>
                <div className={style.marketBot}>
                  <div className={style.marketBtn}>
                    <SvgIcon name='find_logo_facebook' />Follow Page
                  </div>
                  <div className={style.marketBtn}>
                    <SvgIcon name='find_ic_learn' />Learn more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

Detail.displayName = 'Detail'
export default Detail;
