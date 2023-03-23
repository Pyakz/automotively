import React from 'react';
import { render } from '@testing-library/react';
import AccidentHistory from '../../../modules/vehicles/details/AccidentHistory';
import moment from 'moment';

describe('AccidentHistory', () => {
  it('renders "No recorded owners yet." when history is empty', () => {
    const { getByText } = render(<AccidentHistory history={[]} />);
    expect(getByText('No recorded accident yet.')).toBeInTheDocument();
  });

  it('renders a list of owners when history is not empty', () => {
    const history = [
      {
        date: '2018-04-05',
        description: 'Rear-end collision with another vehicle. No injuries reported.',
      },
      {
        date: '2020-09-12',
        description: 'Side collision with another vehicle. Minor injuries reported.',
      },
    ];
    const { getByText, getAllByRole } = render(<AccidentHistory history={history} />);
    expect(getByText('Accident History')).toBeInTheDocument();

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(2);

    history.forEach((history) => {
      expect(getByText(moment(history.date).format('ll'))).toBeInTheDocument();
      expect(getByText(history.description)).toBeInTheDocument();
    });
  });
});
