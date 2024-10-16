'use client';
import { GreyButton, RedButton, PurpleButton } from '../ui/Buttons';
import { useDispatch } from 'react-redux';
import {
  setNewInvoices,
  setDeletedInvoices,
} from '@/app/redux/slices/invoicesSlice';
import type { AppDispatch } from '@/app/redux/store';
import { IInvoice, IInvoiceDraft } from '../Types';

export const EditDeleteMark = ({
  handleDelete,
  setIsEditOpen,
  invoiceId,
  invoice,
}: {
  handleDelete: () => void;
  setIsEditOpen: (isEditOpen: boolean) => void;
  invoiceId: string;
  invoice: IInvoice | IInvoiceDraft;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const editStatusHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setDeletedInvoices(invoiceId));

    const paidInvoice = {
      ...invoice,
      status: 'paid',
    };
    dispatch(setNewInvoices(paidInvoice));
    setIsEditOpen(false);
  };

  const isDraft = () => {
    return invoice?.status == 'draft' ? true : false;
  };
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton
        text="Edit"
        onClick={() => setIsEditOpen(true)}
        disabled={!isDraft()}
      />
      <RedButton text="Delete" onClick={handleDelete} />
      <PurpleButton
        text="Mark as Paid"
        type="submit"
        onClick={editStatusHandler}
        disabled={isDraft()}
      />
    </div>
  );
};
