// Init
import React, { useContext, useState, createContext, ReactNode } from 'react';
import User from '../types/user';

interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}

interface IPosterSize {
  value: string;
  unit: string;
}
interface IResponsePoster {
  frame: IFrameProps;
  size: IPosterSize;
  albumName: string;
  singerName: string;
  price: number;
  posterImage: string;
  posterQuantity: number;
  _id: string;
}
interface IResponseCart {
  _id: string;
  totalPoster: IResponsePoster[];
  totalPrice: number;
  shippingCost: number;
}

// Initializing Create Context Hook
interface StoreType {
  loggedIn?: boolean;
  user?: User | object;
  cart?: IResponseCart | string;
}
const storeContext = createContext<StoreType | null>(null);

export type UpdateStoreType = (data: StoreType) => void;

const storeUpdateContext = createContext<UpdateStoreType | null>(null);

// We are also initializing useContexts here
// we only call these functions where we need that data
export const Store = (): StoreType | null => {
  return useContext(storeContext);
};

export const UpdateStore = (): UpdateStoreType => {
  return useContext(storeUpdateContext) as UpdateStoreType;
};

// Initializing Store Provider
export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initializing State
  const [store, setStore] = useState<StoreType>({
    loggedIn: false,
    user: {},
    cart: '',
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const updateStore = (data: StoreType): void => {
    setStore((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // Render
  return (
    <storeContext.Provider value={store}>
      <storeUpdateContext.Provider value={updateStore}>{children}</storeUpdateContext.Provider>
    </storeContext.Provider>
  );
};
