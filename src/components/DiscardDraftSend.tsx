'use client';
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

    trigger,
    //handleSubmit,
    formState: {
      errors,
      isSubmitting,
      // isSubmitted
    },
  } = useFormContext();

  async function triggerForm() {
    const t = await trigger();
    if (t) {
      console.log('errors', errors);
      onSubmit();
      handleGoBack();
    }
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
        onClick={() => {
          setValue('status', 'draft');
          triggerForm();
        }}
        disabled={isSubmitting}
      />
      <PurpleButton
        text="Save & Send"
        type="submit"
        onClick={() => {
          setValue('status', 'pending');
          triggerForm();
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
