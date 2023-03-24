import { isArray, omit, pick } from 'lodash';
import { create } from 'zustand';
import { CARS } from '../utils/data';
import { Vehicle } from '../utils/types';

type TStore = {
  page: number;
  query?: string;
  pageSize?: number;
};

type TStoreObject = {
  store: TStore;
  setFilters: (filters: TStore) => void;
  vehicles: Vehicle[];
  filteredVehicles: (filters: TStore) => Vehicle[];
  lastPage: (filters: TStore) => number;
};

const defaultValues: TStore = {
  page: 1,
  query: '',
  pageSize: 6,
};

export const useStore = create<TStoreObject>((set) => ({
  store: defaultValues,
  setFilters: (store: TStore) => set(() => ({ store })),
  vehicles: CARS,
  filteredVehicles: (filters: TStore) => getFilteredVehicles(filters).filteredVehicles,
  lastPage: (filters: TStore) => getFilteredVehicles(filters).lastPage,
}));

// This function return anything that matches the current filters and also returns the lastPage
export const getFilteredVehicles = (
  filters: TStore,
): { filteredVehicles: Vehicle[]; lastPage: number } => {
  const { page, query = '', pageSize = 10 } = filters;
  const filteredVehicles = CARS.filter((vehicle) => {
    // remove the 'image_url', 'gallery', 'accident_history','interior_color' they will confuse the searching
    const car = omit(vehicle, [
      'image_url',
      'gallery',
      'accident_history',
      'interior_color',
      'fuel_type',
    ]);
    const searchString = Object.values(car)
      .flatMap((value) =>
        // get the owner's name only, in the ownership object
        // start and end date might confuse the user that searched the models year
        isArray(value) ? value.flatMap((item) => Object.values(pick(item, 'owner'))) : value,
      )
      .join(' ')
      .toLowerCase();
    return searchString.includes(query.toLowerCase());
  });

  // Calculate pagination limits
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Return paginated subset of filtered vehicles and last page number
  return {
    filteredVehicles: filteredVehicles.slice(startIndex, endIndex),
    lastPage: Math.ceil(filteredVehicles.length / pageSize),
  };
};
