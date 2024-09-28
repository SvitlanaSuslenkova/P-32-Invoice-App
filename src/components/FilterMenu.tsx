import { Checkbox } from './Checkbox';
export default function FilterMenu() {
  return (
    <div>
      <button>
        <Checkbox /> Draft
      </button>
      <button>Pending</button>
      <button>Paid</button>
    </div>
  );
}
