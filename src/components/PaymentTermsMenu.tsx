'use client';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
interface IPaymentTermsMenu {
  setIsPaymentTermsMenu: (isPaymentTermsMenu: boolean) => void;
}

export default function PaymentTermsMenu({
  setIsPaymentTermsMenu,
}: IPaymentTermsMenu) {
  const { setValue, trigger } = useFormContext();
  const paymentTermValues = [1, 7, 14, 30];

  function handleonClick(termValue: number) {
    setValue('paymentTerms', termValue);
    setIsPaymentTermsMenu(false);
    trigger('paymentTerms');
  }

  return (
    <motion.div
      className={`absolute right-0 max-w-96 overflow-hidden w-full mt-2 black15 dark:text-muted-darker z-12 grid grid-cols-1 shadow-bsh dark:shadow-dark-bsh rounded-lg bg-card dark:bg-dark-filter`}
      key="termValueContainer"
      initial={{ height: 0 }}
      animate={{ height: 192 }}
      transition={{ duration: 0.3 }}
    >
      {paymentTermValues &&
        paymentTermValues.map((termValue) => (
          <motion.button
            key={termValue}
            className={`capitalize text-left px-6 py-4 h-12 border-t first:border-0 border-muted-darker dark:border-dark-header hover:text-primary`}
            onClick={() => handleonClick(termValue)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span>Net </span>
            {termValue}
            {termValue == 1 ? <span> day</span> : <span> days</span>}
          </motion.button>
        ))}
    </motion.div>
  );
}
