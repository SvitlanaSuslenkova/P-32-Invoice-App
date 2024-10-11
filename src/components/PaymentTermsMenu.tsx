//import { useFormContext } from 'react-hook-form';

export default function PaymentTermsMenu({
  setPaymentTerms,
  setIsPaymentTermsMenu,
}) {
  //const { setValue } = useFormContext();
  function handleonClick(e, termValue: number) {
    e.preventDefault();
    console.log(termValue);
    setPaymentTerms(termValue);
    //setValue(`paymentTerms`, termValue.toString());
    setIsPaymentTermsMenu(false);
  }
  const paymentTermValues = [1, 7, 14, 30];
  return (
    <div
      className={`absolute w-60 mt-2 black15 z-12 grid grid-cols-1 shadow-bsh rounded-lg bg-card`}
    >
      {paymentTermValues &&
        paymentTermValues.map((termValue) => (
          <button
            key={termValue}
            className={`capitalize text-left px-6 py-4 h-12 border-b border-muted-darker hover:text-primary`}
            onClick={(e) => handleonClick(e, termValue)}
          >
            <span>Net </span>
            {termValue}
            {termValue == 1 ? <span> day</span> : <span> days</span>}
          </button>
        ))}
    </div>
  );
}
