'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoice } from '@/app/redux/slices/OneInvoiceSlice';
import { IInvoice } from '@/components/Types';

export default function ViewInvoice() {
  const pathname = usePathname();
  const partsofpathname = pathname.split('/');
  const invoiceId: string = partsofpathname[partsofpathname.length - 1];

  const dispatch = useDispatch();

  const invoice = useSelector((state) => state.invoice.invoice as [IInvoice]);

  const invoiceStatus = useSelector((state) => state.invoice.status);

  useEffect(() => {
    dispatch(fetchInvoice(invoiceId));
  }, [dispatch, invoiceId]);

  return (
    <div>
      <GoBackButton />
      {invoiceStatus === 'loading' && <p>Loading...</p>}
      <p>{invoice.length == 1 && invoice[0].id}</p>
      <p></p>
    </div>
  );
}
