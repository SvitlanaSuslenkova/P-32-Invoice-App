import Image from 'next/image';
import ImgEmpty from '../images/illustration-empty.svg';
export default function NoInvoice() {
  return (
    <div
      className={`dark:text-primary-foreground grid justify-items-center max-w-64 text-center`}
    >
      <Image src={ImgEmpty} alt="no-information" width={241} height={200} />
      <p className={`text-2xl font-bold leading-sm6 tracking-em0031`}>
        There is nothing here
      </p>
      <p className={`grey13 mt-5 dark:text-primary-foreground`}>
        Create a new invoice by clicking the <b>New</b> Invoice button and get
        started
      </p>
    </div>
  );
}
