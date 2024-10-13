import { GreyButton, RedButton, PurpleButton } from './Buttons';

export const EditDeleteMark = ({
  handleDelete,
  setIsEditOpen,
}: {
  handleDelete: () => void;
  setIsEditOpen: (isEditOpen: boolean) => void;
}) => {
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Edit" onClick={() => setIsEditOpen(true)} />
      <RedButton text="Delete" onClick={handleDelete} />
      <PurpleButton text="Mark as Paid" type="submit" />
    </div>
  );
};
