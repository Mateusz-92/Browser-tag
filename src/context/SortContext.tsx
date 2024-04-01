import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { Tag } from '../api/api';

export type SortDirection = 'asc' | 'desc';

type SortContextType = {
  direction: SortDirection;
  field: keyof Tag;
  setDirection: Dispatch<SetStateAction<SortDirection>>;
  setField: Dispatch<React.SetStateAction<keyof Tag>>;
  sortTag: (direction: SortDirection, field: keyof Tag, tags: Tag[]) => Tag[];
};

export const SortContext = createContext<SortContextType | undefined>(undefined);

export const useSort = (): SortContextType => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error('useSort must be used within a SortProvider');
  }
  return context;
};

export const SortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [field, setField] = useState<keyof Tag>('name');
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');

  const numOne: number = 1;
  const numMinusOne: number = -1;
  const numZero: number = 0;

  const sortTag = (direction: 'asc' | 'desc', field: keyof Tag, tags: Tag[]): Tag[] => {
    const sortedData = [...tags].sort((a, b) => {
      if (direction === 'asc') {
        if (a[field] < b[field]) return numMinusOne;
        if (a[field] > b[field]) return numOne;
        return numZero;
      } else {
        if (a[field] < b[field]) return numOne;
        if (a[field] > b[field]) return numMinusOne;
        return numZero;
      }
    });

    return sortedData;
  };

  const value: SortContextType = {
    direction,
    field,
    setDirection,
    setField,
    sortTag,
  };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
