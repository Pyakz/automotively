import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

type VehicleDetailsGalleryProps = {
  gallery: string[];
  vehicleName: string;
};

const VehicleDetailsGallery = ({ gallery, vehicleName }: VehicleDetailsGalleryProps) => {
  return (
    <div className='animate__animated animate__fadeIn animate__slower  border-t-2 w-full border-slate-700 md:p-5'>
      <h2 className='text-2xl font-bold mt-3'>Gallery</h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        closable
        showCloseIcon={true}
        elementClassNames='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2'
      >
        {gallery?.map((photo: string, index) => (
          <a href={photo} key={photo + index} data-src={photo}>
            <img
              src={photo}
              data-src={photo}
              alt={vehicleName}
              className='col-span-1 row-span-2 sm:h-[200px] md:h-[250px] w-full ease-in-out rounded-md duration-300 cursor-pointer '
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default VehicleDetailsGallery;
