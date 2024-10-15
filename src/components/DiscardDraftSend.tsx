import { GreyButton, PurpleButton, DarkButton } from './Buttons';
import { useFormContext } from 'react-hook-form';

export const DiscardDraftSend = ({
  handleGoBack,
  onSubmit,
}: {
  handleGoBack: () => void;
  onSubmit: () => void;
}) => {
  const {
    setValue,

    //handleSubmit,
    formState: { isSubmitting, isSubmitted },
  } = useFormContext();
  function handleReturn() {
    console.log('isSubmitted', isSubmitted);
    if (isSubmitted) {
      handleGoBack();
    } else return;
  }
  return (
    <div
      className={`w-full grid grid-cols-[auto,auto,auto] sm:grid-cols-[auto,8.4rem,8.4rem] sm:justify-items-end gap-x-2`}
    >
      <div className={`justify-self-start`}>
        <GreyButton text="Discard" onClick={handleGoBack} />
      </div>
      <DarkButton
        text="Save as Draft"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setValue('status', 'draft');
          onSubmit();
          handleReturn();
        }}
        disabled={isSubmitting}
      />
      <PurpleButton
        text="Save & Send"
        type="submit"
        onClick={(e) => {
          setValue('status', 'pending');
          e.preventDefault();
          onSubmit();
          handleReturn();
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
