import Image from 'next/image';
import Avatar from '../images/image-avatar.jpg';
import Moon from '../images/icon-moon.svg';
//import Sun from '../images/icon-sun.svg'
export default function Header() {
  return (
    <header
      className={`flex h-[4.5rem] md:h-[5rem] bg-header xl:flex-col xl:w-[6.44rem] xl:h-screen xl:rounded-r-[1.25rem]`}
    >
      <section
        className={`w-[4.5rem] aspect-square bg-primary rounded-r-[1.25rem] overflow-hidden md:w-[5rem]   relative before:block 
            before:absolute before:w-full before:h-full before:bg-[url('../images/logo.svg')] before:bg-no-repeat
            before:bg-center before:bg-[length:38.8%] xl:w-full`}
      >
        <div
          className={`mt-[2.25rem] w-[4.5rem] aspect-[2/1] bg-[#9277FF] rounded-tl-[1.25rem] md:w-[5rem] md:mt-[2.5rem] xl:w-full 
            xl:mt-[3.22rem] `}
        ></div>
      </section>
      <section
        className={`grid place-content-center w-[4.5rem] md:w-[5rem] aspect-square ml-auto xl:mt-auto xl:w-full xl:ml-0`}
      >
        <button className={`p-2 hover:brightness-150`}>
          <Image
            className={`rounded-full`}
            src={Moon}
            width={20}
            height={20}
            alt="profile image"
          />
        </button>
      </section>
      <section
        className={`w-[4.5rem] md:w-[5rem] aspect-square grid place-items-center border-l border-l-[#494E6E] xl:w-full 
            xl:ml-0 xl:border-l-0 xl:border-t xl:border-t-[#494E6E]`}
      >
        <Image
          className={`rounded-full xl:w-10`}
          src={Avatar}
          width={32}
          height={32}
          alt="profile image"
        />
      </section>
    </header>
  );
}
