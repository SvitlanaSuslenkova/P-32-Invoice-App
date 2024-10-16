'use client';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../app/redux/slices/invoicesSlice';
import { motion } from 'framer-motion';

const statuses = ['draft', 'pending', 'paid'];

const FilterMenu = ({ filters }: { filters: string | null | string[] }) => {
  const dispatch = useDispatch();

  const isChecked = (status: string) => {
    if (
      filters &&
      filters.length > 0 &&
      Array.isArray(filters) &&
      filters.includes(status)
    ) {
      return true;
    } else if (typeof filters == 'string' && filters == status) {
      return true;
    } else return false;
  };

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setFilters((e.target as HTMLButtonElement).value));
  };

  return (
    <motion.div
      className={`overflow-hidden dark:bg-dark-filter absolute top-14 right-1/4 sm:top-14 sm:right-1/4 md:top-28 md:right-52 2xl:right-[16.9rem] z-2 w-48 h-32 p-6 rounded-lg bg-card shadow-bsh dark:shadow-dark-bsh`}
      key="filterMenu"
      initial={{ height: 0, zIndex: 1 }}
      animate={{ height: 128, zIndex: 1 }}
      transition={{ duration: 0.2 }}
    >
      <ul className={`grid  place-content-between items-center w-full h-full`}>
        {statuses.map((status) => (
          <motion.button
            className={`flex items-center`}
            value={status}
            key={status}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              id={status}
              defaultChecked={isChecked(status)}
              type="checkbox"
              value={status}
              onClick={(e) =>
                handleFilter(e as React.MouseEvent<HTMLButtonElement>)
              }
              className={`w-4 h-4 rounded-sm cursor-pointer appearance-none bg-muted-darker dark:bg-dark-header border-muted hover:border  hover:border-primary  
       checked:appearance-auto checked:accent-primary `}
            />
            <label
              htmlFor={status}
              className={`ml-3 cursor-pointer font-bold leading-sm4 tracking-em0016 sm:col-start-4 sm:row-star-1`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
            </label>
          </motion.button>
        ))}
      </ul>
    </motion.div>
  );
};
export default FilterMenu;
