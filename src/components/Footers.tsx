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

export const DiscardDraftSend = ({ handleGoBack, onSubmit }) => {
  return (
    <div
      className={`w-full grid grid-cols-[auto,auto,auto] sm:grid-cols-[auto,8.4rem,8.4rem] sm:justify-items-end gap-x-2`}
    >
      <div className={`justify-self-start`}>
        <GreyButton text="Discard" onClick={handleGoBack} />
      </div>
      <DarkButton
        text="Save as Draft"
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      />
      <PurpleButton text="Save & Send" />
    </div>
  );
};
