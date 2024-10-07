import Image from 'next/image';
import Plus from '../images/icon-plus.svg';
import ArrowDown from '../images/icon-arrow-down.svg';

import ArrowLeft from '../images/icon-arrow-left.svg';

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
        style={isOpenMenu ? { rotate: '180deg' } : {}}
      />
    </button>
  );
};
export const InvoiceButton = ({ onClick }) => {
  return (
    <button
      className={`justify-self-end flex justify-center items-center gap-2 md:gap-4 pr-4 h-11 p-1.5  rounded-3xl bg-primary text-primary-foreground 
        text-sm-15 leading-sm4 font-bold traking-em0016 hover:bg-primary-hover`}
      onClick={onClick}
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
export const GoBackButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`justify-self-start flex justify-center items-center gap-2 md:gap-4 h-11 p-1.5 rounded-3xl hover:text-card-foreground`}
      onClick={onClick}
    >
      <Image src={ArrowLeft} alt="<" width={4.23} height={8.46} />
      <span className={`text-sm15 leading-sm4 font-bold traking-em0016`}>
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

export const GreyButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm15 leading-sm15 font-bold tracking-em0016 rounded-3xl h-12 px-4 md:px-6 flex justify-center items-center text-card-foreground bg-secondary hover:bg-muted-darker`}
    >
      {text}
    </button>
  );
};
export const RedButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm15 leading-sm15 font-bold tracking-em0016 rounded-3xl h-12 px-5 md:px-6 flex justify-center items-center text-primary-foreground bg-delete hover:bg-delete-muted`}
    >
      {text}
    </button>
  );
};
export const PurpleButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm15 leading-sm15 font-bold tracking-em0016 rounded-3xl h-12 px-2 sm:px-4  flex justify-center items-center text-primary-foreground bg-primary hover:bg-primary-hover`}
    >
      {text}
    </button>
  );
};

export const DarkButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm15 leading-sm15 font-bold tracking-em0016 rounded-3xl h-12 px-2 sm:px-4 flex justify-center items-center text-card-foreground bg-secondary-accent hover:bg-foreground`}
    >
      {text}
    </button>
  );
};
