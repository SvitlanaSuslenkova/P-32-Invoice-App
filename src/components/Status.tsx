export default function Status() {
  return (
    <p
      className={`row-start-2 sm:row-start-1 row-end-4 sm:row-end-2 sm:col-start-5 justify-self-end sm:justify-self-center flex items-center justify-center 
            w-[6.5rem] h-[2.5rem] font-bold text-sm15 leading-sm15 text-accent-one-foreground bg-accent-one-foreground bg-opacity-5`}
    >
      <span
        className={`block h-2 w-2 rounded-full mr-2 bg-accent-one-foreground`}
      ></span>
      Paid
    </p>
  );
}
