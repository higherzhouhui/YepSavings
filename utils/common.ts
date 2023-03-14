import {NextRouter} from 'next/router';

import 'nprogress/nprogress.css';
/**
 * 防抖
 */
export const debounce = (fn: (params: any) => void, ms: number) => {
  let timer: any;
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(args);
      timer = null;
    }, ms);
  };
};

/**
 * 复制url到剪贴板
 */
export const copyUrlToClip = (phref?: string) => {
  let href = window.location.href;
  if (phref) {
    href = phref;
  }
  const aux = document.createElement('input');
  aux.setAttribute('value', href);
  document.body.appendChild(aux);
  aux.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(aux);
};

export const progressInit = (router: NextRouter) => {
  const handleRouteChange = () => {
  };
  const handleRouteComplete = () => {
  };
  router.events.on('routeChangeStart', handleRouteChange);
  router.events.on('routeChangeComplete', handleRouteComplete);
  return () => {
    router.events.off('routeChangeStart', handleRouteChange);
    router.events.off('routeChangeComplete', handleRouteComplete);
  };
};
