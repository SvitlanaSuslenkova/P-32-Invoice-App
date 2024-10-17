type Status = 'draft' | 'pending' | 'paid';

export default function Status({ status }: { status: string }) {
  return (
    <p
      className={`row-start-2 sm:row-start-1 row-end-4 sm:row-end-2 sm:col-start-5 justify-self-end sm:justify-self-center flex items-center justify-center 
            w-[6.5rem] h-[2.5rem] font-bold text-sm15 leading-sm15 rounded-md 
            ${
              status == 'draft'
                ? 'text-accent-three-foreground dark:text-muted-darker bg-accent-three-foreground dark:bg-dark-filter bg-opacity-[5.71%]'
                : status == 'pending'
                ? 'text-accent-two-foreground bg-accent-two-foreground bg-opacity-[5.71%]'
                : 'text-accent-one-foreground bg-accent-one-foreground bg-opacity-[5.71%]'
            }`}
    >
      <span
        className={`block h-2 w-2 rounded-full mr-2 
            ${
              status == 'draft'
                ? ' bg-accent-three-foreground dark:bg-muted-darker'
                : status == 'pending'
                ? ' bg-accent-two-foreground '
                : ' bg-accent-one-foreground '
            }
          `}
      ></span>
      {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </p>
  );
}
