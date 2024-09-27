import Image from 'next/image';
import ArrowRight from '../images/icon-arrow-right.svg';
//import ArrowDown from '../images/icon-arrow-down.svg'
export default function InvoiceCard() {
  return (
    <button
      className={`grid grid-cols-2 sm:grid-cols-[auto,auto,auto,auto,auto] md:grid-cols-[2fr,3fr,4fr,3fr,2fr,1fr] grid-rows-3 sm:grid-rows-1 items-center sm:justify-items-center
         bg-card p-6 px-[7.34%] sm:px-0 sm:py-4 sm:h-h18  rounded-lg w-full shadow-smsh`}
    >
      <p
        className={`justify-self-start sm:justify-self-center mb-3.5 sm:mb-0 text-sm15 leading-sm15 font-bold tracking-em0016`}
      >
        <span className={`text-card-foreground `}>#</span>RT3080
      </p>

      <p
        className={`col-start-2 sm:col-start-3 justify-self-end sm:justify-self-center mb-3.5 sm:mb-0  font-medium text-sm13 leading-sm15 text-card-foreground   `}
      >
        Jensen Huang
      </p>

      <p
        className={`justify-self-start sm:justify-self-center col-start-1 row-star-2 row-end-3 sm:col-start-2 sm:row-star-1 sm:row-end-2 font-medium text-sm13 leading-sm15 text-card-foreground `}
      >
        <span>Due </span>19 Aug 2021
      </p>

      <p
        className={`row-start-2 sm:row-start-1 row-end-4 sm:row-end-2 sm:col-start-5 justify-self-end sm:justify-self-center flex items-center justify-center 
            w-[6.5rem] h-[2.5rem] font-bold text-sm15 leading-sm15 text-accent-one-foreground bg-accent-one-foreground bg-opacity-5`}
      >
        <span
          className={`block h-2 w-2 rounded-full mr-2 bg-accent-one-foreground`}
        ></span>
        Paid
      </p>
      <p
        className={`justify-self-start sm:justify-self-center font-bold leading-6 tracking-em0016 sm:col-start-4 sm:row-star-1`}
      >
        <span>£</span> 1,800.90
      </p>
      <div className={`hidden sm:w-full sm:h-full md:grid place-items-center`}>
        <Image src={ArrowRight} alt=">" width={4} height={8} />
      </div>
    </button>
  );
}
