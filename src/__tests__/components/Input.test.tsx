import { fireEvent, render } from '@testing-library/react';
import InputComponent from '../../components/Input';
import React from 'react'; // always import

describe('Input component', () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <InputComponent
        placeholder='Type something'
        onChange={onChange}
        defaultValue='Initial value'
      />,
    );

    const inputElement = getByPlaceholderText('Type something');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Initial value');
  });

  it('calls onChange when input value is changed', () => {
    const { getByTestId } = render(
      <InputComponent
        onChange={onChange}
        name='input'
        defaultValue='Initial value'
        placeholder='my'
      />,
    );

    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('John');

    fireEvent.change(input, { target: { value: 'Marky' } });
    expect(onChange).toHaveBeenCalledWith('Marky');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
