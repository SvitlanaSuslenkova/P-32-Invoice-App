import { GreyButton, RedButton, PurpleButton } from './Buttons';

export default function EditDeleteMark() {
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Edit" />
      <RedButton text="Delete" />
      <PurpleButton text="Mark as Paid" />
    </div>
  );
}
