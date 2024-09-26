export default function Header() {
  return (
    <header className={`flex h-[4.5rem] md:h-[5rem] bg-header`}>
      <div
        className={`w-[4.5rem] aspect-square bg-primary rounded-r-[1.25rem] overflow-hidden md:w-[5rem]   relative before:block 
            before:absolute before:w-full before:h-full before:bg-[url('../../assets/assets/logo.svg')] before:bg-no-repeat
            before:bg-center before:bg-[length:38.8%] `}
      >
        <div
          className={`mt-[2.25rem] w-[4.5rem] aspect-[2/1] bg-[#9277FF] rounded-tl-[1.25rem] md:w-[5rem] md:mt-[2.5rem] `}
        ></div>
      </div>
      <button></button>
    </header>
  );
}
