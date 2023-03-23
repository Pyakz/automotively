import { fireEvent, render } from '@testing-library/react';
import Pagination from '../../components/Pagination';
import React from 'react'; // always import

describe('Pagination component', () => {
  const onPageChange = jest.fn();

  const props = {
    onPageChange,
    pageRange: 2,
    currentPage: 1,
    lastPage: 10,
  };

  it('should render correctly', () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const paginationElement = getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
  });

  it('renders the correct number of page buttons', () => {
    const { getAllByRole } = render(<Pagination {...props} />);
    const pageButtons = getAllByRole('button');
    expect(pageButtons.length).toEqual(5); // 1, 2, 3, 4, 5
  });

  it('dont show the previous button on the first page', () => {
    const { queryByTestId } = render(<Pagination {...props} currentPage={1} />);
    const previousButton = queryByTestId('previous');
    const nextButton = queryByTestId('next');
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeNull();
  });

  it('dont show the next button on the last page', () => {
    const { queryByTestId } = render(<Pagination {...props} currentPage={10} />);
    const previousButton = queryByTestId('previous');
    const nextButton = queryByTestId('next');
    expect(nextButton).toBeNull();
    expect(previousButton).toBeInTheDocument();
  });

  it('calls onPageChange when a page button is clicked', () => {
    const { getAllByRole } = render(<Pagination {...props} />);
    const pageButtons = getAllByRole('button');

    fireEvent.click(pageButtons[1]); // Click
    fireEvent.click(pageButtons[2]); // Click
    fireEvent.click(pageButtons[3]); // Click
    fireEvent.click(pageButtons[4]); // Click
    expect(onPageChange).toHaveBeenCalledWith(4);
  });
});
