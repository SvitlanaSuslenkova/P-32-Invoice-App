'use client';
import { GoBackButton } from './Buttons';
import { Input } from './Input';
import { AddNewItemButton } from './Buttons';
import { DiscardDraftSend } from './Footers';
import PaymentTermsMenu from './PaymentTermsMenu';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowDown from '../images/icon-arrow-down.svg';

//import { formInitialState } from '../components/constants/formInitialState';

//npm i tailwind-scrollbar

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
//npm install react-hook-form
import { z } from 'zod';
import { formatDateBack, todayDay } from '@/app/actions/formatDate';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from 'nanoid';

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
  const schema = z.object({
    id: z.string(),
    createdAt: z.string().date(),
    paymentDue: z.string().date(),
    description: z.string(),
    paymentTerms: z.number().positive(),
    clientName: z.string().min(2),
    clientEmail: z.string().email(),
    status: z.string(),
    senderAddress: z.object({
      street: z.string().min(2),
      city: z.string().min(2),
      postCode: z.number().positive().min(2),
      country: z.string().min(2),
    }),
    clientAddress: z.object({
      street: z.string().min(2),
      city: z.string().min(2),
      postCode: z.number().positive().min(2),
      country: z.string().min(2),
    }),
    items: z.array(
      z.object({
        name: z.string().min(2),
        quantity: z.number().positive(),
        price: z.number().positive(),
        total: z.number().positive(),
      })
    ),
    total: z.number().positive(),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    reset,
    resetField,
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
    ...methods
  } = useForm<FormFields>({
    mode: 'onBlur',
    defaultValues: {
      id: nanoid(),
      createdAt: todayDay(),
    },
    resolver: zodResolver(schema),
  });

  const handleAddItem = (e: MouseEvent) => {
    e.preventDefault();
    const newItem = nanoid();
    setItems([...items, newItem]);
  };
  function handleDeleteItem(e: MouseEvent, item: string, thisindex: number) {
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
      setValue(`paymentTerms`, paymentTerms);
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

  function itemTotal(index: number) {
    const price = watch(`items.${index}.price`);
    const qty = watch(`items.${index}.quantity`);
    const total = (Number(price) * Number(qty)).toFixed(2);
    if (price * qty > 0) {
      setValue(`items.${index}.total`, Number(total));
      return total;
    } else {
      return '0.00';
    }
  }

  function countInvoiceTotal() {
    const formItems = getValues('items');
    if (formItems?.length > 0) {
      const totalValues = formItems.map((item) => item.total);
      if (totalValues.length > 0) {
        const initialValue = 0;
        const sumOfTotalValues = totalValues.reduce(
          (acc, num) => acc + Number(num),
          initialValue
        );
        setValue(`total`, Number(sumOfTotalValues.toFixed(2)));
      }
    }
  }
  countInvoiceTotal();

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
                    {...register(`senderAddress.street`)}
                  />
                  <div className={`grid grid-cols-2 gap-x-6`}>
                    <Input
                      label="city"
                      type="text"
                      {...register(`senderAddress.city`)}
                    />
                    <Input
                      label="post code"
                      type="number"
                      {...register(`senderAddress.postCode`)}
                    />
                    <Input
                      label="country"
                      type="text"
                      className={`col-span-2`}
                      {...register(`senderAddress.country`)}
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
                    {...register(`clientName`)}
                  />
                  <Input
                    label="client's email"
                    type="text"
                    {...register(`clientEmail`)}
                  />
                  <Input
                    label="street address"
                    type="text"
                    {...register(`clientAddress.street`)}
                  />
                  <div className={`grid grid-cols-2 gap-x-6`}>
                    <Input
                      label="city"
                      type="text"
                      {...register(`clientAddress.city`)}
                    />
                    <Input
                      label="post code"
                      type="number"
                      {...register(`clientAddress.postCode`)}
                    />
                    <Input
                      label="country"
                      type="text"
                      className={`col-span-2`}
                      {...register(`clientAddress.country`)}
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
                    {...register(`description`)}
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
                        {...register(`items.${index}.name`)}
                      />
                      <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                        Qty.
                      </p>
                      <Input
                        label=""
                        type="number"
                        className={`row-start-4 sm:row-start-1 sm:col-start-2`}
                        {...register(`items.${index}.quantity`)}
                      />
                      <p className={`grey13 capitalize sm:hidden mb-[-0.8rem]`}>
                        Price
                      </p>
                      <Input
                        label=""
                        type="number"
                        className={`row-start-4 sm:row-start-1 sm:col-start-3`}
                        {...register(`items.${index}.price`)}
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
