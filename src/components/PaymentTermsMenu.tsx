'use client';
import { useEffect } from 'react';
//import { label, input, span } from 'framer-motion/client';
//import { type } from 'os';
import { useFormContext } from 'react-hook-form';
interface IPaymentTermsMenu {
  setIsPaymentTermsMenu: (isPaymentTermsMenu: boolean) => void;
}

export default function PaymentTermsMenu({
  setIsPaymentTermsMenu,
}: IPaymentTermsMenu) {
  const { register } = useFormContext();

  const paymentTermValues = [1, 7, 14, 30];

  return (
    <div
      className={`absolute w-60 mt-2 black15 dark:text-muted-darker z-12 grid grid-cols-1 shadow-bsh dark:shadow-dark-bsh rounded-lg bg-card dark:bg-dark-filter`}
    >
      {paymentTermValues &&
        paymentTermValues.map((termValue) => (
          <label
            htmlFor={termValue.toString()}
            className={`cursor-pointer capitalize text-left px-6 py-4 h-12 border-t first:border-0 border-muted-darker dark:border-dark-header hover:text-primary`}
            key={termValue}
          >
            <input
              type="radio"
              value={Number(termValue)}
              id={termValue.toString()}
              {...register('paymentTerms', {
                // valueAsNumber: true,
                required: true,
              })}
              className="hidden"
              // onChange={() => setIsPaymentTermsMenu(false)}
            />
            <span>Net </span>
            {termValue}
            {termValue == 1 ? <span> day</span> : <span> days</span>}
          </label>
        ))}
    </div>
  );
}

/*
<button
            key={termValue}
            className={`capitalize text-left px-6 py-4 h-12 border-t first:border-0 border-muted-darker dark:border-dark-header hover:text-primary`}
            onClick={() => handleonClick(termValue)}
          >
            <span>Net </span>
            {termValue}
            {termValue == 1 ? <span> day</span> : <span> days</span>}
          </button>
          */
