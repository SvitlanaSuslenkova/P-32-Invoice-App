'use client';

const statuses = ['draft', 'pending', 'paid'];

interface IFilterMenu {
  setFilters: (filters: string | string[] | null) => void;
  filters: string | string[] | null;
}

const FilterMenu = ({ setFilters, filters }: IFilterMenu) => {
  function handleFilter(e: React.MouseEvent<HTMLButtonElement>) {
    const filterValue = (e.target as HTMLButtonElement).value;

    if (Array.isArray(filters) && filters.includes(filterValue)) {
      //remove
      const allfilters = filters.filter((filter) => filter !== filterValue);
      setFilters(allfilters);
    } else if (typeof filters == 'string' && filters == filterValue) {
      //remove
      setFilters([]);
    } else if (typeof filters == 'string' && filters !== filterValue) {
      //add
      const allfilters = [filters, filterValue];
      setFilters(allfilters);
    } else if (Array.isArray(filters) && !filters.includes(filterValue)) {
      //add
      const allfilters = [...filters, filterValue];
      setFilters(allfilters);
    } else {
      const allfilters = filterValue; //add
      setFilters(allfilters);
    }
  }
  return (
    <div
      className={`absolute top-14 right-1/4 sm:top-14 sm:right-1/4 md:top-28 md:right-52 2xl:right-[16.9rem] z-2 w-48 h-32 p-6 rounded-lg bg-card shadow-bsh `}
    >
      <ul className={`grid  place-content-between items-center w-full h-full`}>
        {statuses.map((status) => (
          <button className={`flex items-center`} value={status} key={status}>
            <input
              id={status}
              defaultChecked={true}
              type="checkbox"
              value={status}
              onClick={(e) =>
                handleFilter(e as React.MouseEvent<HTMLButtonElement>)
              }
              className={`w-4 h-4 rounded-sm cursor-pointer appearance-none bg-muted-darker border-muted hover:border  hover:border-primary  
       checked:appearance-auto checked:accent-primary `}
            />
            <label
              htmlFor={status}
              className={`ml-3 cursor-pointer font-bold leading-sm4 tracking-em0016 sm:col-start-4 sm:row-star-1`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
            </label>
          </button>
        ))}
      </ul>
    </div>
  );
};
export default FilterMenu;
