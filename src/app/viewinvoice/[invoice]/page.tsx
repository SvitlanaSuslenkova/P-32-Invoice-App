'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchInvoice } from '@/app/redux/slices/oneInvoiceSlice';

import { fetchInvoices } from '@/app/redux/slices/invoicesSlice';
import { setDeletedId } from '@/app/redux/slices/deletedIdSlice';

import { useRouter } from 'next/navigation';
import { EditDeleteMark } from '@/components/EditDeleteMark';
import ConfirmDelete from '@/components/ConfirmDelete';

import NoInvoice from '@/components/NoInvoice';
import InvoiceView from '@/components/InvoiceView';
import { IInvoice } from '@/components/Types';

//import { TypedUseSelectorHook } from 'react-redux';
import type {
  RootState,
  //AppDispatch
} from '../../redux/store';

export default function ViewInvoice() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const pathname = usePathname();
  const partsofpathname = pathname.split('/');
  const invoiceId: string = partsofpathname[partsofpathname.length - 1];

  const dispatch = useDispatch();

  const invoicesStatus = useSelector(
    (state: RootState) => state.invoices.status
  );
  const invoices = useSelector((state: RootState) => state.invoices.invoices);
  const router = useRouter();
  // +++++ADD NEW INVOICES????

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch, invoiceId]);

  const invoice = invoices.filter(
    (invoice: IInvoice) => invoiceId == invoice.id
  );

  const handleDelete = () => {
    setIsDeleteOpen(true);
  };
  const handleConfirmDelete = () => {
    dispatch(setDeletedId(invoiceId));
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
        {invoicesStatus === 'loading' ? (
          <p>Loading...</p>
        ) : invoicesStatus === 'succeeded' && invoice ? (
          <InvoiceView invoice={invoice[0]} handleDelete={handleDelete} />
        ) : (
          <NoInvoice />
        )}
      </div>
      <div
        className={`grid w-full place-items-center sm:pr-20 sm:place-items-end bg-card shadow-smsh mt-14  px-6 py-5 md:hidden`}
      >
        <EditDeleteMark handleDelete={handleDelete} />
      </div>
      {isDeleteOpen && (
        <ConfirmDelete
          setIsDeleteOpen={setIsDeleteOpen}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
}
