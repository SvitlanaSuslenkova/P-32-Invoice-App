'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoice } from '@/app/redux/slices/OneInvoiceSlice';
import { IInvoice } from '@/components/Types';
import Status from '@/components/Status';

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
      {invoice.length == 1 && (
        <div className={``}>
          <div className={`bg-card rounded-lg w-full shadow-smsh`}>
            <div
              className={`grid grid-cols-2 p-6 md:py-5 md:px-8 items-center `}
            >
              <span>Status</span>
              <span className={`justify-self-end`}>
                <Status status={invoice[0].status} />
              </span>
            </div>
          </div>
        </div>
      )}
      <p></p>
    </div>
  );
}
//
