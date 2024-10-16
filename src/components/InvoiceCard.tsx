import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from '../images/icon-arrow-right.svg';
import Status from './Status';
import { IInvoice, IInvoiceDraft } from './Types';
import { formatDate } from '@/app/actions/formatDate';

export default function InvoiceCard({
  invoice,
}: {
  invoice: IInvoice | IInvoiceDraft;
}) {
  return (
    <Link
      href={`/viewinvoice/${invoice!.id}`}
      className={`grid grid-cols-2 sm:grid-cols-[auto,auto,auto,auto,auto] md:grid-cols-[2fr,3fr,4fr,3fr,2fr,1fr] grid-rows-3 sm:grid-rows-1 items-center sm:justify-items-center
         bg-card dark:bg-dark-header p-6 px-[7.34%] sm:px-0 sm:py-4 sm:h-h18  rounded-lg w-full shadow-smsh
         focus:border focus:border-primary hover:border hover:border-primary md:pl-6`}
    >
      <p
        className={`justify-self-start sm:justify-self-center mb-3.5 sm:mb-0 text-sm15 leading-sm15 font-bold tracking-em0016`}
      >
        <span className={`text-card-foreground `}>#</span>
        {invoice!.id}
      </p>

      <p
        className={`dark:text-primary-foreground col-start-2 sm:col-start-3 justify-self-end sm:justify-self-center mb-3.5 sm:mb-0  grey13`}
      >
        {invoice?.clientName ?? null}
      </p>

      <p
        className={`dark:text-muted-darker justify-self-start sm:justify-self-center col-start-1 row-star-2 row-end-3 sm:col-start-2 sm:row-star-1 sm:row-end-2 font-medium text-sm13 leading-sm15 text-card-foreground `}
      >
        {invoice?.paymentDue ? (
          <span>Due {formatDate(invoice?.paymentDue)}</span>
        ) : null}
      </p>

      <Status status={invoice?.status ?? 'draft'} />
      <p
        className={`justify-self-start sm:justify-self-center font-bold leading-6 tracking-em0016 sm:col-start-4 sm:row-star-1`}
      >
        <span>£</span> {invoice?.total?.toFixed(2) ?? '0.00'}
      </p>
      <div className={`hidden sm:w-full sm:h-full md:grid place-items-center`}>
        <Image
          src={ArrowRight}
          alt=">"
          width={7}
          height={10}
          className={`h-3 w-2`}
        />
      </div>
    </Link>
  );
}
