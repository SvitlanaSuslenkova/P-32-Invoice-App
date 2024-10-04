import { RedButton, GreyButton } from './Buttons';

export default function ConfirmDelete() {
  return (
    <div className={`fixed top-0 z-2 w-full h-full`}>
      <h2>Confirm Deletion</h2>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <GreyButton text="Cancel" />
      <RedButton text="Delete" />
    </div>
  );
}
