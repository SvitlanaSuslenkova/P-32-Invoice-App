'use client';
import { GoBackButton } from './Buttons';
import { Input } from './Input';
import { AddNewItemButton } from './Buttons';
import { DiscardDraftSend } from './Footers';
import PaymentTermsMenu from './PaymentTermsMenu';
import { useState } from 'react';
import Image from 'next/image';
import ArrowDown from '../images/icon-arrow-down.svg';
import IconCalendar from '../images/icon-calendar.svg';
import CalendarMenu from './CalendarMenu';

export default function NewInvoice({ setIsOpenNewInvoice }) {
  const handleGoBack = () => {
    setIsOpenNewInvoice(false);
  };
  const [isPaymentTermsMenu, setIsPaymentTermsMenu] = useState(false);
  const [isCalendarMenu, setIsCalendarMenu] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState();
  return (
    <div
      className={`sm:overflow-hidden absolute left-0 top-[4.5rem] grid place-items-start   md:top-[5rem] xl:top-0 xl:left-[6.44rem]  z-2 w-full h-svh bg-black bg-opacity-50  min-w-80`}
    >
      <div
        className={`sm:absolute px-6 w-full h-full  bg-card max-w-[38.5rem] sm:h-[calc(100vh-8rem)] sm:rounded-r-b20 sm:overflow-y-scroll`}
      >
        <div>
          <div className={` h-20 grid content-center mt-1 sm:mt-4 xl:mt-8`}>
            <GoBackButton onClick={handleGoBack} />
          </div>
          <h2
            className={`font-bold text-2xl leading-8 text-foreground tracking-tight  capitalize`}
          >
            New invoice
          </h2>
          <form>
            <section>
              <p className={`black15 text-primary capitalize mb-5 mt-5`}>
                Bill from
              </p>
              <Input label="street address" type="text" />
              <div className={`grid grid-cols-2 gap-x-6`}>
                <Input label="city" type="text" />
                <Input label="post code" type="text" />
                <Input label="country" type="text" className={`col-span-2`} />
              </div>
            </section>
            <section>
              <p className={`black15 text-primary capitalize mb-5 mt-5`}>
                Bill to
              </p>
              <Input label="client's name" type="text" />
              <Input label="client's email" type="text" />
              <Input label="street address" type="text" />
              <div className={`grid grid-cols-2 gap-x-6`}>
                <Input label="city" type="text" />
                <Input label="post code" type="text" />
                <Input label="country" type="text" className={`col-span-2`} />
              </div>
              <div className={`sm:grid grid-cols-2  gap-x-6  mb-3`}>
                <article>
                  <p className={`grey13 capitalize mt-1 mb-1`}>Invoice date</p>
                  <button
                    className={`grid grid-cols-2 items-center text-left capitalize mt-2 w-full h-14 px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary hover:cursor-pointer black15`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCalendarMenu(!isCalendarMenu);
                    }}
                  >
                    <span>{paymentTerms}</span>
                    <Image
                      className={`justify-self-end `}
                      src={IconCalendar}
                      alt="calendar"
                    />
                  </button>
                  {isCalendarMenu && (
                    <CalendarMenu setIsCalendarMenu={setIsCalendarMenu} />
                  )}
                </article>

                <article>
                  <p className={`grey13 capitalize mt-1 mb-1`}>Payment terms</p>
                  <button
                    className={`grid grid-cols-2 items-center text-left capitalize mt-2 w-full h-14 px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary hover:cursor-pointer black15`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPaymentTermsMenu(!isPaymentTermsMenu);
                    }}
                  >
                    <span>{paymentTerms}</span>
                    <Image
                      className={`justify-self-end ${
                        isPaymentTermsMenu ? 'rotate-180' : ''
                      }`}
                      src={ArrowDown}
                      alt="v"
                    />
                  </button>
                  {isPaymentTermsMenu && (
                    <PaymentTermsMenu
                      setPaymentTerms={setPaymentTerms}
                      setIsPaymentTermsMenu={setIsPaymentTermsMenu}
                    />
                  )}
                </article>
              </div>
              <Input label="project description" type="text" />
            </section>
            <section className={`pb-4 sm:pb-9`}>
              <p
                className={`mt-14 mb-4 capitalize text-card-foreground font-bold text-lg leading-8 tracking-tight`}
              >
                Item list
              </p>
              <div
                className={`hidden sm:grid sm:grid-cols-[4fr,1fr,2fr,2fr,1fr] sm:gap-4 sm:mb-6 w-full grey13`}
              >
                <p>Item name</p>
                <p className={`text-center sm:text-left`}>Qty.</p>
                <p className={`text-right sm:text-left`}>Price</p>
                <p className={`text-right sm:text-left`}>Total</p>
              </div>
              <div
                className={`grid grid-cols-[4fr,6fr,4fr,2fr]  sm:grid-cols-[4fr,1fr,2fr,2fr,1fr] gap-4 mb-8`}
              >
                <p
                  className={`grey13 capitalize sm:hidden col-span-4 sm:col-span-1 mb-[-0.8rem]`}
                >
                  Item name
                </p>
                <Input
                  label=""
                  type="text"
                  className={`row-start-2  col-span-4 sm:row-start-1 sm:col-span-1`}
                />
                <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                  Qty.
                </p>
                <Input
                  label=""
                  type="number"
                  className={`row-start-4 sm:row-start-1 sm:col-start-2`}
                />
                <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                  Price
                </p>
                <Input
                  label=""
                  type="number"
                  className={`row-start-4 sm:row-start-1 sm:col-start-3`}
                />
                <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                  Total
                </p>

                <p
                  className={` grid items-center  row-start-4 sm:row-start-1 sm:col-start-4 black15 text-card-foreground`}
                >
                  400.00
                </p>
                <div
                  className={` justify-self-end sm:justify-self-center grid place-items-center row-start-4 sm:row-start-1 sm:col-start-5`}
                >
                  <button>
                    <svg
                      width="13"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                        fill="#888EB0"
                        fillRule="nonzero"
                        className={`w-[0.81rem] h-4 p-2 hover:fill-delete transition-colors duration-200`}
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <AddNewItemButton />
            </section>
          </form>
        </div>
      </div>
      <div
        className={`sm:fixed sm:left-0 xl:left-[6.44rem] sm:bottom-0 pt-14 w-full max-w-[38.5rem] bg-card sm:rounded-br-b20 `}
      >
        <div
          className={`grid w-full   place-items-center  sm:place-items-end sm:rounded-r-b20 bg-card shadow-shadowUp   px-6 py-5 `}
        >
          <DiscardDraftSend handleGoBack={handleGoBack} />
        </div>
      </div>
    </div>
  );
}
