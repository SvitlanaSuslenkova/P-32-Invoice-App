'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { EditDeleteMark } from '@/components/EditDeleteMark';
import EditForm from '@/components/EditForm';
import ConfirmDelete from '@/components/ConfirmDelete';
import NoInvoice from '@/components/NoInvoice';
//import Loading from '@/components/Loading';
import InvoiceView from '@/components/InvoiceView';
import { IInvoice } from '@/components/Types';
import { setDeletedInvoices } from '@/app/redux/slices/invoicesSlice';
import type { RootState, AppDispatch } from '../../redux/store';
export default function ViewInvoice() {
  const router = useRouter();

  //const { handleSubmit } = useFormContext();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const pathname = usePathname();
  const partsofpathname = pathname.split('/');
  const invoiceId: string = partsofpathname[partsofpathname.length - 1];

  const dispatch = useDispatch<AppDispatch>();

  const editedinvoices = useSelector(
    (state: RootState) => state.invoices.editedinvoices
  );
  const invoice = editedinvoices.filter(
    (invoice: IInvoice) => invoiceId == invoice.id
  );

  const handleGoBack = () => {
    router.back();
  };

  const handleDelete = () => {
    setIsDeleteOpen(true);
  };
  const handleConfirmDelete = () => {
    dispatch(setDeletedInvoices(invoiceId));
    setIsDeleteOpen(false);
    handleGoBack();
  };

  return (
    <>
      <div
        className={`grid content-center w-full sm:mt-20 max-w-[45.63rem] 2xl:max-w-[60rem] px-6 sm:px-12 md:px-0  `}
      >
        <div className={`h-20 grid content-center mt-1 md:mt-8 xl:mt-12`}>
          <GoBackButton onClick={handleGoBack} />
        </div>
        {invoice[0] ? (
          <InvoiceView
            invoice={invoice[0]}
            handleDelete={handleDelete}
            setIsEditOpen={setIsEditOpen}
          />
        ) : (
          <NoInvoice />
        )}
      </div>
      <div
        className={`grid w-full place-items-center sm:pr-20 sm:place-items-end bg-card shadow-smsh mt-14  px-6 py-5 md:hidden`}
      >
        <EditDeleteMark
          handleDelete={handleDelete}
          setIsEditOpen={setIsEditOpen}
          invoiceId={invoiceId}
          invoice={invoice[0]}
        />
      </div>
      {isDeleteOpen && (
        <ConfirmDelete
          setIsDeleteOpen={setIsDeleteOpen}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
      {isEditOpen && (
        <EditForm setIsEditOpen={setIsEditOpen} invoice={invoice[0]} />
      )}
    </>
  );
}
