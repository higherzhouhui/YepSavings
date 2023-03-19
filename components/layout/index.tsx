import { FC, memo, ReactNode } from "react";
import style from './index.module.css'
interface LayoutProps {
  children: ReactNode
}
export const Layout: FC<LayoutProps> = memo(({ children }) => {
  return <div className={style.LayoutContainer}>
    {children}
  </div>
})

Layout.displayName = 'Layout';