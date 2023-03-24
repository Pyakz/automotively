import { useStore } from '../../stores/useStore';
import Vehicle from './Vehicle';
import React from 'react';
const VehicleList = () => {
  const { store, filteredVehicles } = useStore();
  const vehiclesList = filteredVehicles(store);

  return (
    <div className='flex flex-col flex-1 h-max'>
      <h2 className='text-slate-300 my-5 text-end'>Showing {vehiclesList?.length || 0} vehicles</h2>
      {vehiclesList.length === 0 ? (
        <h1 className='text-slate-300 text-3xl text-center w-full' data-testid='no-vehicle'>
          No vehicles found.
        </h1>
      ) : (
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          data-testid='vehicle-list'
        >
          {vehiclesList?.map((car) => (
            <Vehicle key={car.vin} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleList;
