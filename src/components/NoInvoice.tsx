import Image from 'next/image';
import ImgEmpty from '../images/illustration-empty.svg';
export default function NoInvoice() {
  return (
    <div className={`max-w-52 text-center`}>
      <Image src={ImgEmpty} alt="no-information" width={241} height={200} />
      <p className={`text-2xl font-bold leading-sm6 tracking-em0031`}>
        There is nothing here
      </p>
      <p
        className={`text-sm13 font-medium leading-sm4 tracking-em0008 text-card-foreground`}
      >
        Create a new invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
}
