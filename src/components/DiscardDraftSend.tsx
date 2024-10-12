import { GreyButton, PurpleButton, DarkButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setEditedInvoice } from '@/app/redux/slices/invoicesSlice';
import { IInvoice } from './Types';

export const DiscardDraftSend = ({
  handleGoBack,
  onSubmit,
  invoices,
}: {
  handleGoBack: () => void;
  onSubmit: () => void;
  invoices: IInvoice[];
}) => {
  const {
    setValue,
    getValues,
    formState: { isSubmitting },
  } = useFormContext();
  const dispatch = useDispatch();

  function submittingForm() {
    onSubmit();
    const newInvoice = getValues();
    console.log(newInvoice);
    const edittedInvoices = [...invoices, newInvoice];
    console.log('edittedInvoices', edittedInvoices);
    dispatch(setEditedInvoice(edittedInvoices));
  }
  return (
    <div
      className={`w-full grid grid-cols-[auto,auto,auto] sm:grid-cols-[auto,8.4rem,8.4rem] sm:justify-items-end gap-x-2`}
    >
      <div className={`justify-self-start`}>
        <GreyButton text="Discard" onClick={handleGoBack} />
      </div>
      <DarkButton
        text="Save as Draft"
        type="submit"
        onClick={(e) => {
          setValue('status', 'draft');
          e.preventDefault();
          submittingForm();
        }}
        disabled={isSubmitting}
      />
      <PurpleButton
        text="Save & Send"
        type="submit"
        onClick={(e) => {
          setValue('status', 'pending');
          e.preventDefault();
          submittingForm();
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
