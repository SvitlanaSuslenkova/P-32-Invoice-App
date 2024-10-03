'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GoBackButton } from '../../../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoice } from '@/app/redux/slices/OneInvoiceSlice';
import { IInvoice } from '@/components/Types';
import { Iitem } from '@/components/Types';
import Status from '@/components/Status';
import { useRouter } from 'next/navigation';
import EditDeleteMark from '@/components/EditDeleteMark';
import { formatDate } from '@/app/actions/formatDate';

export default function ViewInvoice() {
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

  const items = invoice && invoice.length === 1 ? invoice[0].items : [];

  return (
    <div>
      <div className={`h-20 grid content-center mt-12`}>
        <GoBackButton onClick={handleGoBack} />
      </div>
      {invoiceStatus === 'loading' && <p>Loading...</p>}
      {invoice.length == 1 && (
        <div className={`capitalize`}>
          <div className={`bg-card mb-4 rounded-lg w-full shadow-smsh`}>
            <div
              className={`grid  md:grid-cols-[auto,auto] md:place-content-between p-6 md:p-8 xl:p-12  md:py-5 md:px-8 items-center `}
            >
              <div className={`md:w-40 grid grid-cols-2 items-center`}>
                <span className={`grey13`}>Status</span>
                <span className={`justify-self-end`}>
                  <Status status={invoice[0].status} />
                </span>
              </div>

              <div className={`hidden md:inline-block`}>
                <EditDeleteMark />
              </div>
            </div>
          </div>
          <div
            className={`bg-card p-6 rounded-lg w-full shadow-smsh grey13 md:p-8 xl:p-12`}
          >
            <section className={`mb-7`}>
              <p className={`black15 mb-1`}>
                <span className={`text-card-foreground `}>#</span>
                {invoice[0].id}
              </p>
              <p>
                <span>{invoice[0].description}</span>
              </p>
            </section>
            <section className={`mb-7`}>
              <p className={`mb-1`}>{invoice[0].senderAddress.street}</p>
              <p className={`mb-1`}>{invoice[0].senderAddress.city}</p>
              <p className={`mb-1`}>{invoice[0].senderAddress.postCode}</p>
              <p className={`mb-1`}>{invoice[0].senderAddress.country}</p>
            </section>
            <section className={`grid grid-cols-2 mb-7`}>
              <article className={`grid h-full content-between `}>
                <div>
                  <p className={`mb-3`}>Invoice date</p>
                  <p className={`black15`}>
                    {formatDate(invoice[0].createdAt)}
                  </p>
                </div>
                <div className={``}>
                  <p className={`mb-3`}>Payment due</p>
                  <p className={`black15`}>
                    {formatDate(invoice[0].paymentDue)}
                  </p>
                </div>
              </article>
              <article>
                <p className={`mb-3`}>Bill to</p>
                <p className={`black15 mb-2`}>{invoice[0].clientName}</p>
                <p className={`mb-1`}>{invoice[0].clientAddress.street}</p>
                <p className={`mb-1`}>{invoice[0].clientAddress.city}</p>
                <p className={`mb-1`}>{invoice[0].clientAddress.postCode}</p>
                <p className={`mb-1`}>{invoice[0].clientAddress.country}</p>
              </article>
            </section>
            <section>
              <p className={`mb-7`}>Sent to</p>
              <p className={`black15 normal-case`}>{invoice[0].clientEmail}</p>
            </section>
            <div className={`bg-secondary rounded-lg`}>
              <section className={`p-6 pb-0 rounded-t-lg mt-7`}>
                {items &&
                  items.length > 0 &&
                  items.map((item: Iitem) => (
                    <div key={item.name} className={`grid grid-cols-2 mb-6`}>
                      <div>
                        <p className={`black15 mb-1`}>{item.name}</p>
                        <p className={`black15 text-muted`}>
                          <span>{item.quantity}</span>
                          <span> x £ </span>
                          <span>{item.price.toFixed(2)}</span>
                        </p>
                      </div>
                      <p className={`black15 self-center justify-self-end`}>
                        <span>£ </span>
                        <span>{(item.price * item.quantity).toFixed(2)}</span>
                      </p>
                    </div>
                  ))}
              </section>
              <section
                className={`text-primary-foreground grid grid-cols-[auto,auto] items-center place-content-between  bg-secondary-accent p-6 rounded-b-lg`}
              >
                <p className={`leading-sm5 `}>Grand Total</p>
                <p
                  className={`text-2xl  text-bold leading-8 tracking-[-0.02em]`}
                >
                  <span>£ </span>
                  <span>{invoice[0].total}</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
      <div
        className={`grid place-items-center sm:pr-20 sm:place-items-end bg-card shadow-smsh mt-14 mx-[-24px] sm:mx-[-48px] md:ml-0 px-6 py-5 md:hidden`}
      >
        <EditDeleteMark />
      </div>
    </div>
  );
}
