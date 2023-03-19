import {FC, memo} from 'react';

import style  from './index.module.css'

export interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
}

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context('@/public/static/svg', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export const SvgIcon: FC<SvgIconProps> = memo(({name, ...props}) => {
  return (
    <svg {...(props as any)} className={style.SvgContainer} width={props.width} height={props.height} fill={props.fill}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
});

SvgIcon.displayName = 'SvgIcon';