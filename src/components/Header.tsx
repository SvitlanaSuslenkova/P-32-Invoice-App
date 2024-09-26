import Image from 'next/image';
import Avatar from '../images/image-avatar.jpg';
import Moon from '../images/icon-moon.svg';
//import Sun from '../images/icon-sun.svg'
export default function Header() {
  return (
    <header
      className={`flex h-h18 md:h-20 bg-header xl:flex-col xl:w-[6.44rem] xl:h-screen xl:rounded-r-b20`}
    >
      <section
        className={`w-18 aspect-square bg-primary rounded-r-b20 overflow-hidden md:w-20   relative before:block 
            before:absolute before:w-full before:h-full before:bg-[url('../images/logo.svg')] before:bg-no-repeat
            before:bg-center before:bg-[length:38.8%] xl:w-full`}
      >
        <div
          className={`mt-9 w-h18 aspect-[2/1] bg-[#9277FF] rounded-tl-b20 md:w-20 md:mt-10 xl:w-full 
            xl:mt-[3.22rem] `}
        ></div>
      </section>
      <section
        className={`grid place-content-center w-16 md:w-20 aspect-square ml-auto xl:mt-auto xl:w-full xl:ml-0`}
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
        className={`w-16 md:w-20 aspect-square grid place-items-center border-l border-l-[#494E6E] xl:w-full 
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
