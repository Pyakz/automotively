import React from 'react';
import { render } from '@testing-library/react';
import OwnershipHistory from '../../../modules/vehicles/details/OwnershipHistory';
import moment from 'moment';

describe('OwnershipHistory', () => {
  it('renders "No recorded owners yet." when history is empty', () => {
    const { getByText } = render(<OwnershipHistory history={[]} />);
    expect(getByText('No recorded owners yet.')).toBeInTheDocument();
  });

  it('renders a list of owners when history is not empty', () => {
    const history = [
      {
        owner: 'John Doe',
        start_date: '2022-01-01',
        end_date: '2022-01-31',
      },
      {
        owner: 'Jane Doe',
        start_date: '2022-02-01',
        end_date: null,
      },
    ];
    const { getByText, getAllByRole } = render(<OwnershipHistory history={history} />);

    expect(getByText('Ownership History')).toBeInTheDocument();

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(2);

    history.forEach((history) => {
      const date = `${moment(history.start_date).format('ll')} - ${
        history.end_date !== null ? moment(history.end_date).format('ll') : 'present'
      }`;
      expect(getByText(history.owner)).toBeInTheDocument();
      expect(getByText(date)).toBeInTheDocument();
    });
  });
});
