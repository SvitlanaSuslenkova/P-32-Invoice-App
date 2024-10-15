'use client';
import { GreyButton, PurpleButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setDeletedId } from '@/app/redux/slices/deletedIdSlice';
import type { AppDispatch } from '@/app/redux/store';

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
    formState: { isSubmitting, isSubmitted },
  } = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  function handleReturn() {
    console.log('isSubmitted', isSubmitted);
    if (isSubmitted) {
      setIsEditOpen(false);
    } else return;
  }

  const savehandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setDeletedId(invoiceId));
    onSubmit();
    handleReturn();
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
