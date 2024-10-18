'use client';
import { GreyButton, PurpleButton, DarkButton } from '../ui/Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/redux/store';
import {
  setDeletedInvoices,
  setNewInvoices,
} from '@/app/redux/slices/invoicesSlice';
import { IInvoiceDraft } from '../Types';

export const CancelSave = ({
  setIsEditOpen,
  onSubmit,
  invoiceId,
  setIsDraft,
}: {
  setIsEditOpen: (isEditOpen: boolean) => void;
  onSubmit: () => void;
  invoiceId: string;
  setIsDraft: (isDraft: boolean) => void;
}) => {
  const {
    trigger,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  async function triggerForm() {
    const t = await trigger();
    if (t) {
      onSubmit();
      dispatch(setDeletedInvoices(invoiceId));
      setIsEditOpen(false);
    }
  }

  return (
    <div
      className={`w-full grid grid-cols-[auto,auto,auto] sm:grid-cols-[auto,8.4rem,8.4rem] sm:justify-items-end gap-x-2`}
    >
      <GreyButton text="Cancel" onClick={() => setIsEditOpen(false)} />
      <DarkButton
        text="Save Draft"
        type="button"
        onClick={() => {
          setIsDraft(true);
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

          dispatch(setDeletedInvoices(invoiceId));
          dispatch(setNewInvoices(data));

          setIsEditOpen(false);
        }}
      />
      <PurpleButton
        text="Save and Send"
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
/*
'use client';
import { GreyButton, PurpleButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/redux/store';
import { setDeletedInvoices } from '@/app/redux/slices/invoicesSlice';

export const CancelSave = ({
  setIsEditOpen,
  onSubmit,
  invoiceId,
}: {
  setIsEditOpen: (isEditOpen: boolean) => void;
  onSubmit: () => void;
  invoiceId: string;
}) => {
  const {
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  async function triggerForm() {
    const t = await trigger();
    if (t) {
      console.log('errors', errors);
      const v = getValues();
      console.log('values', v);
      if (Object.keys(errors).length == 0) {
        dispatch(setDeletedInvoices(invoiceId));
        onSubmit();
        setIsEditOpen(false);
      }
    }
  }

  const savehandler = () => {
    triggerForm();
  };
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Cancel" onClick={() => setIsEditOpen(false)} />
      <PurpleButton
        text="Save Changes"
        type="submit"
        onClick={savehandler}
        disabled={isSubmitting}
      />
    </div>
  );
};
*/
