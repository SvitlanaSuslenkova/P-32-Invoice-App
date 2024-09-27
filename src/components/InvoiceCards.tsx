import InvoiceCard from './InvoiceCard';
import Filter from './Filter';

export default function InvoiceCards() {
  return (
    <div
      className={`px-6 sm:px-12 grid justify-items-center gap-y-4 content-start`}
    >
      <Filter />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </div>
  );
}
