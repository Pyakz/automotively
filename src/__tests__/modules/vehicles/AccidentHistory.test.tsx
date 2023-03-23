import React from 'react';
import { render } from '@testing-library/react';
import AccidentHistory from '../../../modules/vehicles/details/AccidentHistory';
import moment from 'moment';
import { CARS } from '../../../utils/data';

describe('AccidentHistory', () => {
  it('renders "No recorded owners yet." when history is empty', () => {
    const { getByText } = render(<AccidentHistory history={[]} />);
    expect(getByText('No recorded accident yet.')).toBeInTheDocument();
  });

  it('renders a list of owners when history is not empty', () => {
    const history = CARS[0].accident_history;

    const { getByText, getAllByRole } = render(<AccidentHistory history={history} />);
    expect(getByText('Accident History')).toBeInTheDocument();

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(history.length);

    history.forEach((history) => {
      expect(getByText(moment(history.date).format('ll'))).toBeInTheDocument();
      expect(getByText(history.description)).toBeInTheDocument();
    });
  });
});
