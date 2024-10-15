import { CgSpinner } from 'react-icons/cg';

export default function Loading() {
  return (
    <div className={`w-full grid items-center justify-center`}>
      <CgSpinner
        className={`text-4xl mt-36 sm:mt-44 md:mt-52 xl:mt-60 animate-spin`}
      />
    </div>
  );
}
