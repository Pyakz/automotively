import { Vehicle } from '../../utils/types';
import { CARS } from '../../utils/data';
import { getFilteredVehicles } from '../../stores/useStore';

describe('useStore: getFilteredVehicles', () => {
  it('it returns an object with filteredVehicles and lastPage properties', () => {
    const filters = {
      page: 1,
      query: '',
      pageSize: 10,
    };
    const result = getFilteredVehicles(filters);
    expect(result).toHaveProperty('filteredVehicles');
    expect(result).toHaveProperty('lastPage');
  });

  it('it filters vehicles by make, model, VIN, year, and price', () => {
    const filters = {
      page: 1,
      query: 'honda',
      pageSize: 10,
    };
    const result = getFilteredVehicles(filters);
    expect(result.filteredVehicles.length).toBeGreaterThan(0);
    result.filteredVehicles.forEach((vehicle: Vehicle) => {
      expect(
        `${vehicle.make} ${vehicle.model} ${vehicle.vin} ${vehicle.year} ${vehicle.price}`.toLowerCase(),
      ).toContain('honda');
    });
  });

  it('it returns the correct number of vehicles and last page number based on pagination', () => {
    const filters = {
      page: 2,
      query: '',
      pageSize: 5,
    };
    const result = getFilteredVehicles(filters);
    const expectedVehicles = CARS.slice(5, 10);
    expect(result.filteredVehicles).toEqual(expectedVehicles);
    expect(result.lastPage).toEqual(2);
  });
});
