import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import FilterMenu from './FilterMenu';

export default function InvoiceCards() {
  return (
    <div>
      <div
        className={`px-6 sm:px-12 md:px-0 grid justify-items-center gap-y-4 content-start`}
      >
        <Filter />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
      <div>
        <NoInvoice />
      </div>
      <FilterMenu />
    </div>
  );
}
