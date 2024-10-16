'use client';
import { setNewInvoices } from '@/app/redux/slices/invoicesSlice';
import { GreyButton, PurpleButton, DarkButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IInvoiceDraft } from './Types';

export const DiscardDraftSend = ({
  handleGoBack,
  onSubmit,
  setIsDraft,
}: {
  handleGoBack: () => void;
  onSubmit: () => void;
  setIsDraft: (isDraft: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const {
    setValue,
    getValues,

    trigger,
    //handleSubmit,
    formState: {
      errors,
      isSubmitting,
      // isSubmitted
    },
  } = useFormContext();

  async function triggerForm() {
    const t = await trigger();
    if (t) {
      console.log('errors', errors);
      onSubmit();
      handleGoBack();
    }
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
        type="button"
        onClick={() => {
          setIsDraft(true);
          setValue('status', 'draft');
          const data: IInvoiceDraft = {
            id: getValues('id'),
            createdAt: getValues('createdAt'),
            paymentDue: getValues('paymentDue') || undefined,
            description: getValues('description') || undefined,
            paymentTerms: getValues('paymentTerms') || undefined,
            clientName: getValues('clientName') || undefined,
            clientEmail: getValues('clientEmail') || undefined,
            status: getValues('status'),
            senderAddress: {
              street: getValues('senderAddress.street') || undefined,
              city: getValues('senderAddress.city') || undefined,
              postCode: getValues('senderAddress.postCode') || undefined,
              country: getValues('senderAddress.country') || undefined,
            },
            clientAddress: {
              street: getValues('clientAddress.street') || undefined,
              city: getValues('clientAddress.city') || undefined,
              postCode: getValues('clientAddress.postCode') || undefined,
              country: getValues('clientAddress.country') || undefined,
            },
            items: getValues('items') || [],
            total: getValues('total') || undefined,
          };
          //const data = getValues();
          dispatch(setNewInvoices(data));

          //onSubmit();
          handleGoBack();
        }}
        disabled={isSubmitting}
      />
      <PurpleButton
        text="Save & Send"
        type="submit"
        onClick={() => {
          setValue('status', 'pending');
          triggerForm();
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
