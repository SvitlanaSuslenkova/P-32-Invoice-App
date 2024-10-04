import EditDeleteMark from './EditDeleteMark';
import Status from './Status';
import { IInvoice, Iitem } from './Types';
import { formatDate } from '@/app/actions/formatDate';

export default function InvoiceView({ invoice }: { invoice: IInvoice }) {
  const items = invoice && invoice.items ? invoice.items : [];

  return (
    <div className={`capitalize`}>
      <div className={`bg-card mb-4 rounded-lg w-full shadow-smsh`}>
        <div
          className={`grid  md:grid-cols-[auto,auto] md:place-content-between p-6 md:p-8 xl:p-12  md:py-5 md:px-8 items-center `}
        >
          <div className={`md:w-40 grid grid-cols-2 items-center`}>
            <span className={`grey13`}>Status</span>
            <span className={`justify-self-end`}>
              <Status status={invoice.status} />
            </span>
          </div>

          <div className={`hidden md:inline-block`}>
            <EditDeleteMark />
          </div>
        </div>
      </div>
      <div
        className={`bg-card p-6 rounded-lg w-full shadow-smsh grey13 md:p-8 xl:p-12`}
      >
        <div className={`md:grid md:grid-cols-2 `}>
          <section className={`mb-7 md:content-center`}>
            <p className={`black15 mb-1`}>
              <span className={`text-card-foreground `}>#</span>
              {invoice.id}
            </p>
            <p>
              <span>{invoice.description}</span>
            </p>
          </section>
          <section className={`mb-7 md:text-right`}>
            <p className={`mb-1`}>{invoice.senderAddress.street}</p>
            <p className={`mb-1`}>{invoice.senderAddress.city}</p>
            <p className={`mb-1`}>{invoice.senderAddress.postCode}</p>
            <p className={`mb-1`}>{invoice.senderAddress.country}</p>
          </section>
        </div>

        <div className={`md:grid md:grid-cols-[2fr,1fr]  w-full`}>
          <div className={`grid grid-cols-2 mb-7 md:grid-cols-[auto,auto]`}>
            <article className={`grid h-full content-between `}>
              <div>
                <p className={`mb-3`}>Invoice date</p>
                <p className={`black15`}>{formatDate(invoice.createdAt)}</p>
              </div>
              <div>
                <p className={`mb-3`}>Payment due</p>
                <p className={`black15`}>{formatDate(invoice.paymentDue)}</p>
              </div>
            </article>
            <article>
              <p className={`mb-3`}>Bill to</p>
              <p className={`black15 mb-2`}>{invoice.clientName}</p>
              <p className={`mb-1`}>{invoice.clientAddress.street}</p>
              <p className={`mb-1`}>{invoice.clientAddress.city}</p>
              <p className={`mb-1`}>{invoice.clientAddress.postCode}</p>
              <p className={`mb-1`}>{invoice.clientAddress.country}</p>
            </article>
          </div>
          <div>
            <p className={`mb-7 md:mb-3`}>Sent to</p>
            <p className={`black15 normal-case`}>{invoice.clientEmail}</p>
          </div>
        </div>

        <div className={`bg-secondary rounded-lg`}>
          <section className={`p-6 pb-0 rounded-t-lg mt-7`}>
            <div
              className={`hidden md:grid md:grid-cols-[3fr,1.5fr,1.5fr,1.5fr] md:mb-6 w-full`}
            >
              <p>Item name</p>
              <p className={`text-center`}>QTY.</p>
              <p className={`text-right`}>Price</p>
              <p className={`text-right`}>Total</p>
            </div>
            {items &&
              items.length > 0 &&
              items.map((item: Iitem) => (
                <div
                  key={item.name}
                  className={`grid grid-cols-2 mb-6 md:grid-cols-[6fr,1.5fr]`}
                >
                  <div className={`md:grid md:grid-cols-2`}>
                    <p className={`black15 mb-1`}>{item.name}</p>
                    <div
                      className={`black15 text-muted flex md:grid md:grid-cols-2  md:w-full`}
                    >
                      <p className={`md:text-center`}>{item.quantity} </p>
                      <p className={`lowercase md:hidden text-center w-4 `}>
                        x
                      </p>
                      <p className={`md:text-right`}>
                        <span> £ </span>
                        {item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className={`black15 self-center justify-self-end`}>
                    <span>£ </span>
                    <span>{(item.price * item.quantity).toFixed(2)}</span>
                  </p>
                </div>
              ))}
          </section>
          <section
            className={`text-primary-foreground grid grid-cols-[auto,auto] items-center place-content-between  bg-secondary-accent p-6 rounded-b-lg`}
          >
            <p className={`leading-sm5 `}>Grand Total</p>
            <p className={`text-2xl  text-bold leading-8 tracking-[-0.02em]`}>
              <span>£ </span>
              <span>{invoice.total.toFixed(2)}</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
