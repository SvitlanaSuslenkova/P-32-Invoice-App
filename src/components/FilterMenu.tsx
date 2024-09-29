const statuses = ['draft', 'pending', 'paid'];

const FilterMenu = () => {
  return (
    <div
      className={`absolute top-14 right-1/4 sm:top-14 sm:right-1/4 md:top-28 md:right-52 2xl:right-[16.9rem] z-2 w-48 h-32 p-6 rounded-lg bg-card shadow-bsh`}
    >
      <ul className={``}>
        {statuses.map((status) => (
          <li className={``} key={status}>
            <div className={``}>
              <input
                id={status}
                type="checkbox"
                value={status}
                className={`w-4 h-4 rounded-sm cursor-pointer appearance-none bg-muted-darker border-muted hover:border  hover:border-primary  
       checked:appearance-auto checked:accent-primary `}
              />
              <label
                htmlFor={status}
                className={`ml-3 cursor-pointer font-bold leading-sm4 tracking-em0016 sm:col-start-4 sm:row-star-1`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FilterMenu;
