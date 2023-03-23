import { getByTestId, render } from '@testing-library/react';
import VehicleList from '../../../modules/vehicles/VehicleList';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Vehicle from '../../../modules/vehicles/Vehicle';

describe('Vehicle component', () => {
  const car = {
    vin: '123',
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    price: 20000,
    image_url: 'https://example.com/image.png',
  };

  it('renders vehicle information', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Vehicle car={car} />
      </MemoryRouter>,
    );

    expect(getByText('Toyota Corolla')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
    expect(getByText('VIN: 123')).toBeInTheDocument();
    expect(getByText('$20,000')).toBeInTheDocument();
    expect(getByTestId('vehicle_img')).toHaveAttribute('src', 'https://example.com/image.png');
  });
});
