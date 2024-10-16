import { RedButton, GreyButton } from './ui/Buttons';

export default function ConfirmDelete({
  setIsDeleteOpen,
  handleConfirmDelete,
}: {
  setIsDeleteOpen: (isDeleteOpen: boolean) => void;
  handleConfirmDelete: () => void;
}) {
  return (
    <div
      className={`p-6 fixed grid place-items-center top-0 left-0 z-2 w-screen h-screen bg-black bg-opacity-50  min-w-80`}
    >
      <div
        className={`bg-card dark:bg-dark-header mb-4 rounded-lg shadow-smsh w-full max-w-[30rem] p-8 md:p-12`}
      >
        <h2
          className={`font-bold text-2xl leading-8 text-foreground dark:text-primary-foreground tracking-tight mb-3`}
        >
          Confirm Deletion
        </h2>
        <p className={`grey13 dark:text-muted-darker leading-6 mb-6`}>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className={`flex flex-row gap-x-2 justify-end`}>
          <GreyButton text="Cancel" onClick={() => setIsDeleteOpen(false)} />
          <RedButton text="Delete" onClick={handleConfirmDelete} />
        </div>
      </div>
    </div>
  );
}
