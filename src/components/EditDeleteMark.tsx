'use client';
import { GreyButton, RedButton, PurpleButton } from './Buttons';
import { useDispatch } from 'react-redux';
import { setDeletedId } from '@/app/redux/slices/deletedIdSlice';
import { setNewInvoices } from '@/app/redux/slices/newInvoicesSlice';
import type { AppDispatch } from '@/app/redux/store';
import { IInvoice } from './Types';

export const EditDeleteMark = ({
  handleDelete,
  setIsEditOpen,
  invoiceId,
  invoice,
}: {
  handleDelete: () => void;
  setIsEditOpen: (isEditOpen: boolean) => void;
  invoiceId: string;
  invoice: IInvoice;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const editStatusHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setDeletedId(invoiceId));

    const paidInvoice = {
      ...invoice,
      status: 'paid',
    };
    dispatch(setNewInvoices(paidInvoice));
    setIsEditOpen(false);
  };

  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Edit" onClick={() => setIsEditOpen(true)} />
      <RedButton text="Delete" onClick={handleDelete} />
      <PurpleButton
        text="Mark as Paid"
        type="submit"
        onClick={editStatusHandler}
      />
    </div>
  );
};
