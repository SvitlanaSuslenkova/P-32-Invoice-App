import { GreyButton, PurpleButton } from './Buttons';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setDeletedId } from '@/app/redux/slices/deletedIdSlice';
import type { AppDispatch } from '@/app/redux/store';

export const CancelSave = ({
  setIsEditOpen,
  onSubmit,
  invoiceId,
}: {
  setIsEditOpen: (isEditOpen: boolean) => void;
  onSubmit: () => void;
  invoiceId: string;
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  const dispatch = useDispatch<AppDispatch>();

  const savehandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setDeletedId(invoiceId));
    onSubmit();
    setIsEditOpen(false);
  };
  return (
    <div className={`flex flex-row gap-x-2`}>
      <GreyButton text="Cancel" onClick={() => setIsEditOpen(false)} />
      <PurpleButton
        text="Save Changes"
        type="submit"
        onClick={savehandler}
        disabled={isSubmitting}
      />
    </div>
  );
};
