import { create } from "zustand";
import { CARS } from "../data";
import { Vehicle } from "../types";

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
  query: "",
  pageSize: 5,
};

export const useStore = create<TStoreObject>((set) => ({
  store: defaultValues,
  setFilters: (store: TStore) => set(() => ({ store })),
  vehicles: CARS,
  filteredVehicles: (filters: TStore) =>
    getFilteredVehicles(filters).filteredVehicles,
  lastPage: (filters: TStore) => getFilteredVehicles(filters).lastPage,
}));

// This function return anything that matches the current filters and also returns the lastPage
const getFilteredVehicles = (
  filters: TStore
): { filteredVehicles: Vehicle[]; lastPage: number } => {
  const { page, query = "", pageSize = 10 } = filters;
  const filteredVehicles = CARS.filter(({ make, model, vin, year, price }) => {
    // Filter by make, model, or VIN
    const searchString =
      `${make} ${model} ${vin} ${year} ${price}`.toLowerCase();
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
