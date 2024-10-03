import { FilterButton, InvoiceButton } from './Buttons';

import FilterMenu from './FilterMenu';

interface IFilter {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
  filters: string | null | string[];
}

export default function Filter({
  isOpenMenu,
  setIsOpenMenu,
  filters,
}: IFilter) {
  return (
    <div
      className={`relative grid grid-rows-2 grid-cols-[auto,auto] w-full mt-7 md:pt-10 md:pb-9`}
    >
      <h1
        className={`text-2xl md:text-4xl font-bold  leading-sm6 md:leading-sm9 tracking-em0031`}
      >
        Invoices
      </h1>
      <p className={`grey13`}>
        <span className={`hidden sm:inline-block`}>There are</span>
        <span> </span>
        <span>7</span> total invoices
      </p>
      <div
        className={`row-start-1 row-end-3 col-start-2 grid grid-cols-[auto,auto] content-center`}
      >
        <FilterButton
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          isOpenMenu={isOpenMenu}
        />
        <InvoiceButton />
      </div>
      {isOpenMenu && <FilterMenu filters={filters} />}
    </div>
  );
}
