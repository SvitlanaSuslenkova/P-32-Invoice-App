'use client';
import { GoBackButton } from './Buttons';
import { Input } from './Input';
import { AddNewItemButton } from './Buttons';
import { DiscardDraftSend } from './Footers';
import PaymentTermsMenu from './PaymentTermsMenu';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowDown from '../images/icon-arrow-down.svg';
import { nanoid } from 'nanoid';
//import { IInvoice } from './Types';

//npm i tailwind-scrollbar

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
//npm install react-hook-form
//import { z } from 'zod';
import { formatDateBack } from '@/app/actions/formatDate';

export default function NewInvoice({
  setIsOpenNewInvoice,
}: {
  setIsOpenNewInvoice: boolean;
}) {
  const [startDate, setStartDate] = useState(new Date());

  const [items, setItems] = useState([nanoid()]);

  const handleGoBack = () => {
    setIsOpenNewInvoice(false);
  };
  const [isPaymentTermsMenu, setIsPaymentTermsMenu] = useState(false);

  const [paymentTerms, setPaymentTerms] = useState();

  //const [total, setTotal] = useState();

  const initialState = {
    id: nanoid(),
    createdAt: '',
    paymentDue: '',
    description: '',
    paymentTerms: '',
    clientName: '',
    clientEmail: '',
    status: '',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [
      {
        name: '',
        quantity: '',
        price: '',
        total: '',
      },
    ],
    total: '',
  };

  const {
    reset,
    resetField,
    register,
    unregister,
    handleSubmit,
    watch,
    // formState: { errors },
    getValues,
    getValue,
    setValue,
    setValues,
    ...methods
  } = useForm({
    mode: 'onBlur',
    defaultValues: initialState,
  });

  const handleAddItem = (e: MouseEvent) => {
    e.preventDefault();
    const newItem = nanoid();
    setItems([...items, newItem]);
  };
  function handleDeleteItem(e: MouseEvent, item: string, thisindex: number) {
    console.log(thisindex);
    e.preventDefault();
    if (items.length > 1) {
      const newItems = items.filter((thisitem) => thisitem !== item);
      setItems(newItems);
      const formItems = getValues('items');
      const newFormItems = formItems.filter(
        (_item, index: number) => index !== thisindex
      );
      unregister('items');
      setValue('items', newFormItems);
    }
  }

  useEffect(() => {
    if (paymentTerms !== undefined) {
      setValue(`paymentTerms`, paymentTerms.toString());
    }
  }, [paymentTerms]);

  useEffect(() => {
    if (startDate !== undefined && paymentTerms !== undefined) {
      const firstDate = new Date(startDate);
      const result = firstDate.setDate(
        firstDate.getDate() + Number(paymentTerms)
      );
      const DueDate = new Date(result);
      setValue(`paymentDue`, formatDateBack(DueDate).toString());
    }
  }, [startDate, paymentTerms]);

  const itemTotal = (index: number) => {
    // NOT RENDERED NOT RENDERED NOT RENDERED NOT RENDEREDNOT RENDERED NOT RENDERED NOT RENDERED
    const price = Number(getValues(`items.${index}.price`));
    const qty = Number(getValues(`items.${index}.quantity`));
    const total = (price * qty).toFixed(2);
    if (price * qty > 0) {
      setValue(`items.${index}.total`, total);
      return total;
    } else {
      return '0.00';
    }
  };

  const formSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    console.log('formSubmit');
  };
  const onSubmit = () => {
    handleSubmit(formSubmit);
    const values = getValues();
    console.log(values);
  };

  return (
    <div
      className={`sm:overflow-hidden absolute left-0 top-[4.5rem] grid place-items-start   md:top-[5rem] xl:top-0 xl:left-[6.44rem]  z-2 w-full h-svh bg-black bg-opacity-50  min-w-80`}
    >
      <div
        className={` sm:flex bg-card sm:h-[calc(100vh-8rem)] pr-4 sm:absolute sm:rounded-r-b20`}
      >
        <FormProvider {...methods}>
          <form>
            <div
              className={` pl-6 pr-2 w-full h-full  bg-card max-w-[37.5rem] sm:h-[calc(100vh-8rem)] sm:rounded-r-b20 
            sm:overflow-y-scroll scrollbar-track-card scrollbar-thin scrollbar-thumb-muted-darker `}
            >
              <div>
                <div
                  className={` h-20 grid content-center mt-1 sm:mt-4 xl:mt-8`}
                >
                  <GoBackButton onClick={handleGoBack} />
                </div>
                <h2
                  className={`font-bold text-2xl leading-8 text-foreground tracking-tight  capitalize`}
                >
                  New invoice
                </h2>

                <section>
                  <p className={`black15 text-primary capitalize mb-5 mt-5`}>
                    Bill from
                  </p>
                  <Input
                    label="street address"
                    type="text"
                    name="street"
                    //{...register(`senderAddress.street`)}
                    onChange={(e) => {
                      setValue(
                        `senderAddress.street`,
                        e.target.value.toString()
                      );
                    }}
                  />
                  <div className={`grid grid-cols-2 gap-x-6`}>
                    <Input
                      label="city"
                      type="text"
                      name="city"
                      // {...register(`senderAddress.city`)}
                      onChange={(e) => {
                        setValue(
                          `senderAddress.city`,
                          e.target.value.toString()
                        );
                      }}
                    />
                    <Input
                      label="post code"
                      type="number"
                      name="postCode"
                      //  {...register(`senderAddress.postCode`)}
                      onChange={(e) => {
                        setValue(
                          `senderAddress.postCode`,
                          e.target.value.toString()
                        );
                      }}
                    />
                    <Input
                      label="country"
                      type="text"
                      className={`col-span-2`}
                      name="country"
                      // {...register(`senderAddress.country`)}
                      onChange={(e) => {
                        setValue(
                          `senderAddress.country`,
                          e.target.value.toString()
                        );
                      }}
                    />
                  </div>
                </section>
                <section>
                  <p className={`black15 text-primary capitalize mb-5 mt-5`}>
                    Bill to
                  </p>
                  <Input
                    label="client's name"
                    type="text"
                    name="clientName"
                    //{...register(`clientName`)}
                    onChange={(e) => {
                      setValue(`clientName`, e.target.value.toString());
                    }}
                  />
                  <Input
                    label="client's email"
                    type="text"
                    // name="clientEmail"
                    // {...register(`clientEmail`)}
                    onChange={(e) => {
                      setValue(`clientEmail`, e.target.value.toString());
                    }}
                  />
                  <Input
                    label="street address"
                    type="text"
                    name="street"
                    //{...register(`clientAddress.street`)}
                    onChange={(e) => {
                      setValue(
                        `clientAddress.street`,
                        e.target.value.toString()
                      );
                    }}
                  />
                  <div className={`grid grid-cols-2 gap-x-6`}>
                    <Input
                      label="city"
                      type="text"
                      name="city"
                      //{...register(`clientAddress.city`)}
                      onChange={(e) => {
                        setValue(
                          `clientAddress.city`,
                          e.target.value.toString()
                        );
                      }}
                    />
                    <Input
                      label="post code"
                      type="number"
                      name="postCode"
                      //{...register(`clientAddress.postCode`)}
                      onChange={(e) => {
                        setValue(
                          `clientAddress.postCode`,
                          e.target.value.toString()
                        );
                      }}
                    />
                    <Input
                      label="country"
                      type="text"
                      className={`col-span-2`}
                      name="country"
                      //{...register(`clientAddress.country`)}
                      onChange={(e) => {
                        setValue(
                          `clientAddress.country`,
                          e.target.value.toString()
                        );
                      }}
                    />
                  </div>
                  <div
                    className={`grid justify-items-stretch  sm:grid-cols-2  sm:gap-x-6  mb-3`}
                  >
                    <article>
                      <div className={`mb-4 w-full grid`}>
                        <p className={`grey13 capitalize mt-1 mb-3`}>
                          Invoice date
                        </p>
                        <DatePicker
                          cssClass="e-custom-style"
                          dateFormat="dd MMM yyyy"
                          selected={startDate}
                          onChange={(date) => {
                            setStartDate(date);
                            setValue(`createdAt`, formatDateBack(date));
                          }}
                          className={`justify-self-stretch w-full min-w-full px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary black15 bg-[url('../images/icon-calendar.svg')] bg-[right_1rem_bottom_1rem] bg-no-repeat`}
                          //  {...register(`createdAt`)}
                        />
                      </div>
                    </article>

                    <article className={`relative`}>
                      <p className={`grey13 capitalize mt-1 mb-3`}>
                        Payment terms
                      </p>
                      <button
                        className={`grid grid-cols-2 items-center text-left capitalize mt-2 w-full h-14 px-5 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-primary hover:ring-1 hover:ring-primary hover:cursor-pointer black15`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsPaymentTermsMenu(!isPaymentTermsMenu);
                        }}
                        // {...register(`paymentTerms`)}
                      >
                        {paymentTerms ? (
                          <p>
                            <span>Net </span>
                            {paymentTerms}
                            {paymentTerms == 1 ? (
                              <span> day</span>
                            ) : (
                              <span> days</span>
                            )}
                          </p>
                        ) : (
                          <span></span>
                        )}
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
                  <Input
                    label="project description"
                    type="text"
                    name="description"
                    onChange={(e) => {
                      setValue(`description`, e.target.value.toString());
                    }}
                  />
                </section>
                <section className={`pb-4 sm:pb-9`}>
                  <p
                    className={`mt-14 mb-4 capitalize text-card-foreground font-bold text-lg leading-8 tracking-tight`}
                  >
                    Item list
                  </p>
                  <div
                    className={`hidden sm:grid sm:grid-cols-[4fr,1.5fr,2fr,2fr,1fr] sm:gap-4 sm:mb-6 w-full grey13`}
                  >
                    <p>Item name</p>
                    <p className={`text-center sm:text-left`}>Qty.</p>
                    <p className={`text-right sm:text-left`}>Price</p>
                    <p className={`text-right sm:text-left`}>Total</p>
                  </div>
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className={`grid grid-cols-[4fr,6fr,4fr,2fr]  sm:grid-cols-[4fr,1.5fr,2fr,2fr,1fr] gap-4 mb-8`}
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
                        name="name"
                        // {...register(`items.${index}.itemName`)}
                        onChange={(e) => {
                          setValue(
                            `items.${index}.name`,
                            e.target.value.toString()
                          );
                        }}
                      />
                      <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                        Qty.
                      </p>
                      <Input
                        label=""
                        type="number"
                        className={`row-start-4 sm:row-start-1 sm:col-start-2`}
                        name="quantity"
                        // {...register(`items.${index}.quantity`)}
                        onChange={(e) => {
                          setValue(
                            `items.${index}.quantity`,
                            e.target.value.toString()
                          );
                        }}
                      />
                      <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                        Price
                      </p>
                      <Input
                        label=""
                        type="number"
                        className={`row-start-4 sm:row-start-1 sm:col-start-3`}
                        name="price"
                        //{...register(`items.${index}.price`)}
                        onChange={(e) => {
                          setValue(
                            `items.${index}.price`,
                            e.target.value.toString()
                          );
                        }}
                      />
                      <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                        Total
                      </p>

                      <p
                        className={` grid items-center  row-start-4 sm:row-start-1 sm:col-start-4 black15 text-card-foreground`}
                      >
                        {itemTotal(index)}
                      </p>
                      <div
                        className={` justify-self-end sm:justify-self-center grid place-items-center row-start-4 sm:row-start-1 sm:col-start-5`}
                      >
                        <button
                          value={item}
                          onClick={(e) => handleDeleteItem(e, item, index)}
                        >
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
                  ))}
                  <AddNewItemButton handleAddItem={handleAddItem} />
                </section>
              </div>
            </div>
            <div
              className={`sm:fixed sm:left-0 xl:left-[6.44rem] sm:bottom-0 pt-14 w-full max-w-[38.5rem] bg-card sm:rounded-br-b20 `}
            >
              <div
                className={`grid w-full   place-items-center  sm:place-items-end sm:rounded-r-b20 bg-card shadow-shadowUp   px-6 py-5 `}
              >
                <DiscardDraftSend
                  handleGoBack={handleGoBack}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
