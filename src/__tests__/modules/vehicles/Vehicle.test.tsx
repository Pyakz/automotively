import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Vehicle from '../../../modules/vehicles/Vehicle';
import { CARS } from '../../../utils/data';

describe('Vehicle component', () => {
  const vehicle = CARS[0];
  it('renders vehicle information', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Vehicle car={vehicle} />
      </MemoryRouter>,
    );

    expect(getByText(`${vehicle.make} ${vehicle.model}`)).toBeInTheDocument();
    expect(getByText(vehicle.year)).toBeInTheDocument();
    expect(getByText(`VIN: ${vehicle.vin}`)).toBeInTheDocument();
    expect(getByText(`$${vehicle.price.toLocaleString('en-US')}`)).toBeInTheDocument();
    expect(getByTestId('vehicle_img')).toHaveAttribute('src', vehicle.image_url);
  });
});
