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
    getValues,
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
      const v = getValues();
      console.log('values', v);
      if (Object.keys(errors).length == 0) {
        onSubmit();
        handleGoBack();
      }
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
        onClick={(e) => {
          trigger(); //check
          e.preventDefault();
          setValue('status', 'draft');
          // onSubmit();
          // handleGoBack();
          triggerForm();
        }}
        disabled={isSubmitting}
      />
      <PurpleButton
        text="Save & Send"
        type="submit"
        onClick={(e) => {
          trigger();
          e.preventDefault();
          setValue('status', 'pending');
          triggerForm();
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
