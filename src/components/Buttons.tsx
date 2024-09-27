import Image from 'next/image';
import Plus from '../images/icon-plus.svg';
import Arrow from '../images/icon-arrow-down.svg';

export default function Buttons() {
  return (
    <div>
      {/* height:48px*/}
      {/*Mark as Paid, Save Changes, Save & Send*/}
      <button className={`h-12`}>Mark as Paid</button>

      <button>Delete</button>

      {/*Cancel, Discard*/}
      <button>Edit</button>

      <button>Save as Draft</button>

      <button>Add New Item</button>
    </div>
  );
}

export const FilterButton = () => {
  return (
    <button
      className={`justify-self-end flex justify-center items-center gap-2 md:gap-4 h-11 p-1.5 rounded-3xl 
        text-sm-15 leading-sm4 font-bold traking-em0016`}
    >
      <span>
        Filter <span className={`hidden sm:inline`}> by status</span>
      </span>

      <Image src={Arrow} alt="v" width={8.46} height={4.23} />
    </button>
  );
};
export const InvoiceButton = () => {
  return (
    <button
      className={`justify-self-end flex justify-center items-center gap-2 md:gap-4 pr-4 h-11 p-1.5  rounded-3xl bg-primary text-primary-foreground 
        text-sm-15 leading-sm4 font-bold traking-em0016`}
    >
      <div
        className={`flex justify-center items-center w-8 aspect-square rounded-full bg-primary-foreground`}
      >
        <Image src={Plus} alt="+" width={10} height={10} />
      </div>
      <span>
        New<span className={`hidden sm:inline`}> Invoice</span>
      </span>
    </button>
  );
};
