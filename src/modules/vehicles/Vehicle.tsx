import React from 'react'; // always imports
import { NavLink } from 'react-router-dom';
import { Vehicle as TVehicle } from '../../utils/types';

type VehicleProps = {
  car: TVehicle;
};

const Vehicle = (props: VehicleProps) => {
  const { vin, make, model, year, price, image_url } = props.car;

  return (
    <NavLink
      data-testid='vehicle'
      to={`/vehicles/${vin}`}
      className='animate__animated animate__fadeIn col-span-1 row-span-2 group cursor-pointer p-3 bg-slate-800  rounded-md  hover:bg-slate-700 ease-in-out duration-500'
    >
      <div className='top-0 w-full'>
        <h2 className='group-hover:text-slate-100  font-bold text-2xl text-slate-50'>
          {make} {model}
        </h2>
        <h2 className='group-hover:text-slate-100  text-slate-50'>{year}</h2>
      </div>
      <img
        src={image_url}
        alt={make + model}
        data-testid='vehicle_img'
        className='maxW-[350px] md:h-[250px]  group-hover:scale-110 ease-in-out duration-300 mx-auto '
      />
      <div className=''>
        <h2 className='group-hover:text-slate-100 text-slate-50 text-lg'>VIN: {vin}</h2>
        <h2 className='group-hover:text-slate-100 text-slate-50 text-2xl font-bold'>
          ${price.toLocaleString('en-US')}
        </h2>
      </div>
    </NavLink>
  );
};

export default Vehicle;
