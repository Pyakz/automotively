import React from 'react';
import { render } from '@testing-library/react';
import OwnershipHistory from '../../../modules/vehicles/details/OwnershipHistory';
import moment from 'moment';
import { CARS } from '../../../utils/data';

describe('OwnershipHistory', () => {
  it('renders "No recorded owners yet." when history is empty', () => {
    const { getByText } = render(<OwnershipHistory history={[]} />);
    expect(getByText('No recorded owners yet.')).toBeInTheDocument();
  });

  it('renders a list of owners when history is not empty', () => {
    const history = CARS[0].ownership_history;
    const { getByText, getAllByRole } = render(
      <OwnershipHistory history={CARS[0].ownership_history} />,
    );

    expect(getByText('Ownership History')).toBeInTheDocument();

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(history.length);

    history.forEach((history) => {
      const date = `${moment(history.start_date).format('ll')} - ${
        history.end_date !== null ? moment(history.end_date).format('ll') : 'present'
      }`;
      expect(getByText(history.owner)).toBeInTheDocument();
      expect(getByText(date)).toBeInTheDocument();
    });
  });
});
