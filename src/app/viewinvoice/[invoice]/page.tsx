'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoice } from '@/app/redux/slices/OneInvoiceSlice';
import { fetchInvoices } from '@/app/redux/slices/invoicesSlice';
import { IInvoice } from '@/components/Types';
import { useRouter } from 'next/navigation';
import EditDeleteMark from '@/components/EditDeleteMark';
import ConfirmDelete from '@/components/ConfirmDelete';

import NoInvoice from '@/components/NoInvoice';
import InvoiceView from '@/components/InvoiceView';

export default function ViewInvoice() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const pathname = usePathname();
  const partsofpathname = pathname.split('/');
  const invoiceId: string = partsofpathname[partsofpathname.length - 1];

  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoice.invoice as [IInvoice]);
  const invoiceStatus = useSelector((state) => state.invoice.status);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchInvoice(invoiceId));
  }, [dispatch, invoiceId]);

  const handleGoBack = () => {
    router.back();
  };

  const handleDelete = () => {
    dispatch(fetchInvoices(invoiceId));
    setIsDeleteOpen(true);
  };

  return (
    <div>
      <div className={`h-20 grid content-center mt-1 md:mt-8 xl:mt-12`}>
        <GoBackButton onClick={handleGoBack} />
      </div>
      {invoiceStatus === 'loading' ? (
        <p>Loading...</p>
      ) : invoiceStatus === 'succeeded' && invoice.length == 1 ? (
        <InvoiceView invoice={invoice[0]} />
      ) : (
        <NoInvoice />
      )}
      <div
        className={`grid place-items-center sm:pr-20 sm:place-items-end bg-card shadow-smsh mt-14 mx-[-24px] sm:mx-[-48px] md:ml-0 px-6 py-5 md:hidden`}
      >
        <EditDeleteMark handleDelete={handleDelete} />
      </div>
      {isDeleteOpen && <ConfirmDelete />}
    </div>
  );
}
