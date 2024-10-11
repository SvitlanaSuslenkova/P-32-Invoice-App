import { GreyButton, RedButton, PurpleButton, DarkButton } from './Buttons';

export const EditDeleteMark = ({ handleDelete }) => {
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Edit" />
      <RedButton text="Delete" onClick={handleDelete} />
      <PurpleButton text="Mark as Paid" />
    </div>
  );
};
