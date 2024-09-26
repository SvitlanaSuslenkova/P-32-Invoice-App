import Image from 'next/image';
import ArrowRight from '../images/icon-arrow-right.svg';
//import ArrowDown from '../images/icon-arrow-down.svg'
export default function InvoiceCards() {
  return (
    <div className={`p-6 md:p-12`}>
      <div
        className={`grid grid-cols-2 md:grid-cols-[2fr,3fr,4fr,3fr,2fr,1fr] grid-rows-3 md:grid-rows-1 items-center md:justify-items-center bg-card p-6 md:px-0 md:py-4  rounded-lg`}
      >
        <p
          className={`mb-3.5 md:mb-0 text-sm15 leading-sm15 font-bold tracking-em0016`}
        >
          <span className={`text-card-foreground `}>#</span>RT3080
        </p>

        <p
          className={`col-start-2 md:col-start-3 justify-self-end mb-3.5 md:mb-0  font-medium text-sm13 leading-sm15 text-card-foreground   `}
        >
          Jensen Huang
        </p>

        <p
          className={`col-start-1 row-star-2 row-end-3 md:col-start-2 md:row-star-1 md:row-end-2 font-medium text-sm13 leading-sm15 text-card-foreground `}
        >
          <span>Due </span>19 Aug 2021
        </p>

        <p
          className={`row-start-2 md:row-start-1 row-end-4 md:row-end-2 md:col-start-5 justify-self-end flex items-center justify-center 
            w-[6.5rem] h-[2.5rem] font-bold text-sm15 leading-sm15 text-accent-one-foreground bg-accent-one-foreground bg-opacity-5`}
        >
          <span
            className={`block h-2 w-2 rounded-full mr-2 bg-accent-one-foreground`}
          ></span>
          Paid
        </p>
        <p
          className={`font-bold leading-6 tracking-em0016 md:col-start-4 md:row-star-1`}
        >
          <span>£</span> 1,800.90
        </p>
        <button
          className={`hidden md:w-full md:h-full md:grid md:place-items-center`}
        >
          <Image src={ArrowRight} alt=">" width={4} height={8} />
        </button>
      </div>
    </div>
  );
}
