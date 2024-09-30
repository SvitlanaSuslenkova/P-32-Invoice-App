import Image from 'next/image';
import Plus from '../images/icon-plus.svg';
import ArrowDown from '../images/icon-arrow-down.svg';

import ArrowLeft from '../images/icon-arrow-left.svg';

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

interface IFilterButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpenMenu: boolean;
}
export const FilterButton = ({ onClick, isOpenMenu }: IFilterButton) => {
  return (
    <button
      className={`justify-self-end flex justify-center items-center gap-2 md:gap-4 h-11 p-1.5 rounded-3xl 
        text-sm-15 leading-sm4 font-bold traking-em0016 hover:text-header`}
      onClick={onClick}
    >
      <span>
        Filter <span className={`hidden sm:inline`}> by status</span>
      </span>

      <Image
        src={ArrowDown}
        alt="v"
        width={8.46}
        height={4.23}
        style={isOpenMenu ? { rotate: '180deg' } : ''}
      />
    </button>
  );
};
export const InvoiceButton = () => {
  return (
    <button
      className={`justify-self-end flex justify-center items-center gap-2 md:gap-4 pr-4 h-11 p-1.5  rounded-3xl bg-primary text-primary-foreground 
        text-sm-15 leading-sm4 font-bold traking-em0016 hover:bg-primary-hover`}
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
export const GoBackButton = () => {
  return (
    <button
      className={`justify-self-start flex justify-center items-center gap-2 md:gap-4 h-11 p-1.5 rounded-3xl`}
    >
      <Image src={ArrowLeft} alt="<" width={4.23} height={8.46} />
      <span className={`text-sm15 leading-sm4 font-bold traking-em0016  `}>
        Go back
      </span>
    </button>
  );
};

export const AddNewItemButton = () => {
  return (
    <button
      className={`flex justify-center items-center gap-2 md:gap-4 h-11 rounded-3xl 
        text-sm-15 leading-sm4 font-bold traking-em0016 w-full text-muted bg-secondary md:hover:bg-muted-darker`}
    >
      + Add New Item
    </button>
  );
};
