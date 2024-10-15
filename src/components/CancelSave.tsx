'use client';
import { GreyButton, PurpleButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
//import { setDeletedId } from '@/app/redux/slices/deletedIdSlice';

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
    formState: {
      errors,
      isSubmitting,
      // isSubmitted

      // , isSubmitted
    },
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

  const savehandler = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerForm();
    // onSubmit();
    //handleReturn();
    //setIsEditOpen(false);
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
