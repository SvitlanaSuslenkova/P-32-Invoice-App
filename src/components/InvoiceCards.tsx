export default function InvoiceCards() {
  return (
    <div className={`p-6 md:p-12`}>
      <div
        className={`grid grid-cols-2 grid-rows-3 items-center bg-card p-6 md:px-4 md:py-12 rounded-lg`}
      >
        <p
          className={`mb-3.5 text-[0.94rem] leading-[0.94rem] font-bold tracking-[-0.016em]`}
        >
          <span className={`text-card-foreground `}>#</span>RT3080
        </p>
        <p
          className={`mb-3.5 justify-self-end font-medium text-[0.81rem] leading-[0.94rem] text-card-foreground `}
        >
          Jensen Huang
        </p>
        <p
          className={`text-[0.94rem] font-medium text-[0.81rem] leading-[0.94rem] text-card-foreground `}
        >
          <span>Due </span>19 Aug 2021
        </p>
        <p
          className={`justify-self-end flex items-center justify-center row-start-2 row-end-4 col-start-2 flex w-[6.5rem] h-[2.5rem] font-bold text-[0.94rem] leading-[0.94rem] text-accent-one-foreground bg-accent-one-foreground bg-opacity-5`}
        >
          <span
            className={`block h-[0.5rem] w-[0.5rem] rounded-full mr-2 bg-accent-one-foreground`}
          ></span>
          Paid
        </p>
        <p className={`font-bold leading-6 tracking-[-0.016em]`}>
          <span>£</span> 1,800.90
        </p>
      </div>
    </div>
  );
}
