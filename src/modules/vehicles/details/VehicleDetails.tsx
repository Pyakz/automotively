import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../../stores/useStore';
import AccidentHistory from './AccidentHistory';
import OwnershipHistory from './OwnershipHistory';
import VehicleDetailsGallery from './VehicleDetailsGallery';

const VehicleDetails = () => {
  const { vehicles } = useStore();
  const params = useParams();
  const vehicle = vehicles.find((vehicle) => vehicle.vin === params.vin);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='text-slate-50' date-testid='vehicle_details_page'>
      <nav className='mt-2 md:flex items-center justify-between'>
        <FiArrowLeft
          onClick={() => navigate(-1)}
          size='25'
          color='white'
          className='hover:scale-125 cursor-pointer'
        />
      </nav>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:p-5 md:mt-15 mt-10'>
        <div className='col-span-2 md:col-span-1 animate__animated animate__fadeIn'>
          <h1 className='md:text-4xl text-3xl font-bold md:text-start text-center'>
            {vehicle?.make} {vehicle?.model}
          </h1>

          <h2 className='text-lg md:text-start text-center'>{vehicle?.year}</h2>

          <img
            className='w-[800px] h-auto'
            src={vehicle?.image_url}
            alt={`${vehicle?.make} ${vehicle?.model}`}
            date-testid='vehicle_details_image'
          />
          <div className='md:text-start text-center'>
            <h2 className='md:text-5xl text-3xl font-bold'>
              ${vehicle?.price.toLocaleString('en-US')}
            </h2>
          </div>
        </div>
        <div className='animate__animated animate__fadeIn animate__slow col-span-2 md:col-span-1 md:border-l-2 border-t-2 md:border-t-0  md:pt-0 pt-3 md:mt-0 mt-3 md:px-5 border-slate-700'>
          <div className=''>
            <h2 className='text-2xl font-bold'>Details</h2>
            <div className=''>
              <div className='md:flex w-full md:justify-between md:items-center md:mt-3 mt-5'>
                <h2 className='text-xl'>VIN:</h2>
                <h2 className='font-bold text-xl'>{vehicle?.vin}</h2>
              </div>
              <div className='md:flex w-full md:justify-between md:items-center md:mt-3 mt-5'>
                <h2 className='text-xl'>Interior Color:</h2>
                <h2 className='font-bold text-xl'>{vehicle?.interior_color}</h2>
              </div>
              <div className='md:flex w-full justify-between md:items-center md:mt-3 mt-5'>
                <h2 className='text-xl'>Exterior Color:</h2>
                <h2 className='font-bold text-xl'>{vehicle?.exterior_color}</h2>
              </div>
              <div className='md:flex w-full md:justify-between md:items-center md:mt-3 mt-5'>
                <h2 className='text-xl'>MPG / Fuel Type</h2>
                <h2 className='font-bold text-xl'>{vehicle?.fuel_type}</h2>
              </div>
            </div>
          </div>
          <OwnershipHistory history={vehicle?.ownership_history || []} />
          <AccidentHistory history={vehicle?.accident_history || []} />
        </div>
      </div>

      <VehicleDetailsGallery
        gallery={vehicle?.gallery || []}
        vehicleName={`${vehicle?.make} ${vehicle?.model}`}
      />
    </div>
  );
};

export default VehicleDetails;
