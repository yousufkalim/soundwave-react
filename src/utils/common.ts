import { toast } from 'react-toastify';
import request from '../api/request';
import { ICheckoutResponce } from '../types/index';

export const rgbaToHex = (rgba: string): string => {
  const parts = rgba.substring(rgba.indexOf('(') + 1, rgba.indexOf(')')).split(',');
  const r = parseInt(parts[0], 10);
  const g = parseInt(parts[1], 10);
  const b = parseInt(parts[2], 10);

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const handleCheckout = (setLoading: (value: boolean) => void): void => {
  const cartId = localStorage.getItem('cartId');
  if (cartId) {
    setLoading(true);
    request<ICheckoutResponce>('post', `/checkout/${cartId}`)
      .then((res) => {
        setLoading(false);
        window.location.href = `${res.data.checkoutURL}`;
      })
      .catch(() => {
        setLoading(false);
        toast.error('Something went wrong');
      });
  }
};

export const capitalizeAfterSpaceOrParenthesis = (str: string): string => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return str.replace(/(\s+|\()(\w)/g, (match, p1, p2) => `${p1}${p2.toUpperCase()}`);
};
