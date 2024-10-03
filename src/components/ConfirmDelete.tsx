import { RedButton, GreyButton } from './Buttons';

export default function Header() {
  return (
    <div>
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
