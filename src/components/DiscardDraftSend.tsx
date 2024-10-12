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
    formState: { isSubmitting },
  } = useFormContext();
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
          setValue('status', 'draft');
          e.preventDefault();
          onSubmit();
          const values = getValues();
          console.log(values);
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
          const values = getValues();
          console.log(values);
        }}
        disabled={isSubmitting}
      />
    </div>
  );
};
