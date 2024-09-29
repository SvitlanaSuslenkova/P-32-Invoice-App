import { FilterButton, InvoiceButton } from './Buttons';

import FilterMenu from './FilterMenu';

export default function Filter({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div
      className={`relative grid grid-rows-2 grid-cols-[auto,auto] w-full mt-7 md:pt-10 md:pb-9`}
    >
      <h1
        className={`text-2xl md:text-4xl font-bold  leading-sm6 md:leading-sm9 tracking-em0031`}
      >
        Invoices
      </h1>
      <p
        className={` text-card-foreground text-sm13 font-medium traking-em0008 leading-sm4`}
      >
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
      {isOpenMenu && <FilterMenu />}
    </div>
  );
}
