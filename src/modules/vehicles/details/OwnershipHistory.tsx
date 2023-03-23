import React from 'react';
import { OwnershipHistory as History } from '../../../utils/types';
import { isEmpty } from 'lodash';
import moment from 'moment';

type OwnershipHistoryProps = {
  history: History[];
};

const OwnershipHistory = ({ history }: OwnershipHistoryProps) => {
  return (
    <div className='w-full mt-5 animate__animated animate__fadeIn animate__delay'>
      <h2 className='text-lg font-bold'>Ownership History</h2>
      <ul className='p-3' data-testid='items'>
        {isEmpty(history) && <h3 className='text-lg'>No recorded owners yet.</h3>}
        {history.map((owner) => (
          <li key={owner.owner} className='bg-slate-800 rounded-lg my-2 p-2'>
            <h3 className='font-bold text-lg'>{owner.owner}</h3>
            <h3>
              {moment(owner.start_date).format('ll')} -{' '}
              {owner.end_date !== null ? moment(owner.end_date).format('ll') : 'present'}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnershipHistory;
