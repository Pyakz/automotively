import React from 'react';
import { AccidentHistory as History } from '../../../utils/types';
import { isEmpty } from 'lodash';
import moment from 'moment';

type AccidentHistoryProps = {
  history: History[];
};

const AccidentHistory = ({ history }: AccidentHistoryProps) => {
  return (
    <div className='w-full' data-testid='AccidentHistory'>
      <h2 className='text-lg font-bold'>Accident History</h2>
      <ul className='p-3'>
        {isEmpty(history) && <h3 className='text-lg'>No recorded accident yet.</h3>}
        {history.map((accident) => (
          <li key={accident.date} className='bg-slate-800 rounded-lg my-2 p-3'>
            <h3 className='font-bold text-lg'>{moment(accident.date).format('ll')}</h3>
            <h3 className='pl-2'>{accident.description}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccidentHistory;
