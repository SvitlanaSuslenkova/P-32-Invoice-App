'use client';
import { useState } from 'react';

type Status = 'draft' | 'pending' | 'paid';

export default function Status() {
  const [status, setStatus] = useState('draft'); //take it out
  return (
    <p
      className={`row-start-2 sm:row-start-1 row-end-4 sm:row-end-2 sm:col-start-5 justify-self-end sm:justify-self-center flex items-center justify-center 
            w-[6.5rem] h-[2.5rem] font-bold text-sm15 leading-sm15 rounded-md `}
      style={
        status == 'draft'
          ? {
              color: 'hsl(231, 20%, 27%)',
              backgroundColor: 'hsl(231, 20%, 27%, 5.71%)',
            }
          : status == 'pending'
          ? {
              color: 'hsl(34, 100%, 50%)',
              backgroundColor: 'hsl(34, 100%, 50%, 5.71%)',
            }
          : {
              color: 'hsl(160, 67%, 52%)',
              backgroundColor: 'hsl(160, 67%, 52%, 5.71%)',
            }
      }
    >
      <span
        className={`block h-2 w-2 rounded-full mr-2`}
        style={
          status == 'draft'
            ? {
                backgroundColor: 'hsl(231, 20%, 27%)',
              }
            : status == 'pending'
            ? {
                backgroundColor: 'hsl(34, 100%, 50%)',
              }
            : {
                backgroundColor: 'hsl(160, 67%, 52%)',
              }
        }
      ></span>
      {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </p>
  );
}
