import InvoiceCards from '../components/InvoiceCards';

export default function Home() {
  return (
    <main className={``}>
      <div className={`grid justify-items-center w-full content-start`}>
        <div
          className={`grid content-center w-full max-w-[45.63rem] 2xl:max-w-[60rem] `}
        >
          <InvoiceCards />
        </div>
      </div>
    </main>
  );
}
