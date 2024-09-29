import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from '../images/icon-arrow-right.svg';
import Status from './Status';
//import ArrowDown from '../images/icon-arrow-down.svg'

export default function InvoiceCard({ invoice }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <Link
      href="/viewinvoice"
      className={`grid grid-cols-2 sm:grid-cols-[auto,auto,auto,auto,auto] md:grid-cols-[2fr,3fr,4fr,3fr,2fr,1fr] grid-rows-3 sm:grid-rows-1 items-center sm:justify-items-center
         bg-card p-6 px-[7.34%] sm:px-0 sm:py-4 sm:h-h18  rounded-lg w-full shadow-smsh
         focus:border focus:border-primary md:pl-6`}
    >
      <p
        className={`justify-self-start sm:justify-self-center mb-3.5 sm:mb-0 text-sm15 leading-sm15 font-bold tracking-em0016`}
      >
        <span className={`text-card-foreground `}>#</span>
        {invoice.id}
      </p>

      <p
        className={`col-start-2 sm:col-start-3 justify-self-end sm:justify-self-center mb-3.5 sm:mb-0  font-medium text-sm13 leading-sm15 text-card-foreground   `}
      >
        {invoice.clientName}
      </p>

      <p
        className={`justify-self-start sm:justify-self-center col-start-1 row-star-2 row-end-3 sm:col-start-2 sm:row-star-1 sm:row-end-2 font-medium text-sm13 leading-sm15 text-card-foreground `}
      >
        <span>Due </span>
        {formatDate(invoice.paymentDue)}
      </p>

      <Status status={invoice.status} />
      <p
        className={`justify-self-start sm:justify-self-center font-bold leading-6 tracking-em0016 sm:col-start-4 sm:row-star-1`}
      >
        <span>£</span> {invoice.total}
      </p>
      <div className={`hidden sm:w-full sm:h-full md:grid place-items-center`}>
        <Image src={ArrowRight} alt=">" width={7} height={14} />
      </div>
    </Link>
  );
}
