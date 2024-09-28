//import Image from "next/image";
import Header from '../components/Header';
import InvoiceCards from '../components/InvoiceCards';

export default function Home() {
  return (
    <main className={`grid xl:grid-cols-[6.44rem,auto]`}>
      <Header />
      <div className={`grid justify-items-center w-full content-start`}>
        <div className={`grid content-center w-full max-w-[45.63rem] `}>
          <InvoiceCards />
        </div>
      </div>
    </main>
  );
}
