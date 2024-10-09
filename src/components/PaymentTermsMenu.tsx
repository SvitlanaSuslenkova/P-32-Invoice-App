//import { useForm, FormProvider, useFormContext } from 'react-hook-form';
export default function PaymentTermsMenu({
  setPaymentTerms,
  setIsPaymentTermsMenu,
}) {
  // const { setValue } = useFormContext();
  function handleonClick(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setPaymentTerms(value);

    // setValue(`paymentTerms`, value.toString());

    setIsPaymentTermsMenu(false);
  }

  return (
    <div
      className={`absolute w-60 mt-2 black15 z-12 grid grid-cols-1 shadow-bsh rounded-lg bg-card`}
    >
      <button
        className={`capitalize grid place-items-start items-center px-6 py-4 h-12 border-b border-muted-darker hover:text-primary`}
        value={1}
        onClick={(e) => handleonClick(e)}
      >
        Net 1 day
      </button>
      <button
        className={`capitalize grid place-items-start items-center px-6 py-4 h-12 border-b border-muted-darker hover:text-primary`}
        value={7}
        onClick={(e) => handleonClick(e)}
      >
        Net 7 days
      </button>
      <button
        className={`capitalize grid place-items-start items-center px-6 py-4 h-12 border-b border-muted-darker hover:text-primary`}
        value={14}
        onClick={(e) => handleonClick(e)}
      >
        Net 14 days
      </button>
      <button
        className={`capitalize grid place-items-start items-center px-6 py-4 h-12 border-b border-muted-darker hover:text-primary`}
        value={30}
        onClick={(e) => handleonClick(e)}
      >
        Net 30 days
      </button>
    </div>
  );
}
