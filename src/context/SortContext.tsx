import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { Tag } from '../api/api';
const numOne: number = 1;
const numMinusOne: number = -1;
const numZero: number = 0;

export type SortDirection = 'asc' | 'desc';

type SortContextType = {
  direction: SortDirection;
  field: keyof Tag;
  setDirection: Dispatch<SetStateAction<SortDirection>>;
  setField: Dispatch<React.SetStateAction<keyof Tag>>;
  sortTag: (direction: SortDirection, field: keyof Tag, tags: Tag[]) => Tag[];
};

export const useSortContext = createContext<SortContextType | undefined>(undefined);

export const useSort = (): SortContextType => {
  const context = useContext(useSortContext);
  if (!context) {
    throw new Error('useSort must be used within a SortProvider');
  }
  return context;
};

export const SortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [field, setField] = useState<keyof Tag>('name');
  const [direction, setDirection] = useState<SortDirection>('asc');

  const sortTag = (direction: SortDirection, field: keyof Tag, tags: Tag[]): Tag[] => {
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

  return <useSortContext.Provider value={value}>{children}</useSortContext.Provider>;
};
