//import Image from "next/image";
import Header from '../components/Header';
import InvoiceCards from '../components/InvoiceCards';
import Buttons from '@/components/Buttons';

export default function Home() {
  return (
    <main className={`grid xl:grid-cols-[6.44rem,auto]`}>
      <Header />
      <div className={`grid justify-items-center w-full`}>
        <div className={`grid content-center w-full max-w-[45.63rem]`}>
          <InvoiceCards />
          <Buttons />
        </div>
      </div>
    </main>
  );
}
