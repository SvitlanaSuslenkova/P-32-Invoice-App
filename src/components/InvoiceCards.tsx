'use client';
import React, { useState, useEffect } from 'react';
import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import { IInvoice } from './Types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoices } from '../app/redux/slices/invoicesSlice';
import NewInvoice from './NewInvoice';
//import { TypedUseSelectorHook } from 'react-redux';
//import type { RootState, AppDispatch } from '../app/redux/store';

export default function InvoiceCards() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isOpenNewInvoice, setIsOpenNewInvoice] = useState<boolean>(false);

  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);

  const newInvoices = useSelector((state) => {
    console.log(state);
    return state.newInvoices.newInvoices;
  });

  const filters = useSelector((state) => state.filters.filters);
  const invoicesStatus = useSelector((state) => state.invoices.status);
  //const error = useSelector((state) => state.invoices.error);

  const deletedId = useSelector((state) => state.deletedId.deletedId);

  useEffect(() => {
    if (invoicesStatus === 'idle') {
      dispatch(fetchInvoices());
    }
  }, [dispatch, invoices, invoicesStatus]);

  const [invoicesToShow, setInvoicesToShow] = useState<IInvoice[] | null>([]);
  const newInvoicesArray = [...invoices, ...newInvoices];

  const newInvoicesArrayWithoutDeleted = () => {
    if (deletedId && deletedId.length > 0) {
      return newInvoicesArray.filter(
        (invoice: IInvoice) => !deletedId.includes(invoice.id)
      );
    }
    return newInvoicesArray;
  };
  const invoicesToShowArray = () => {
    const filteredInvoices = newInvoicesArrayWithoutDeleted();

    if (filters && filters.length > 0) {
      return filteredInvoices.filter((invoice: IInvoice) =>
        filters.includes(invoice.status)
      );
    }
    return [];
  };

  useEffect(() => {
    setInvoicesToShow(invoicesToShowArray);
  }, [invoices, newInvoices, deletedId, filters]);

  const handleOpenNewInvoice = () => {
    setIsOpenNewInvoice(true);
  };

  return (
    <div
      className={`grid content-center w-full max-w-[45.63rem] 2xl:max-w-[60rem] px-6 sm:px-12 md:px-0  `}
    >
      <div
        className={`grid justify-items-center gap-y-4 content-start w-full `}
      >
        <Filter
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          filters={filters}
          handleOpenNewInvoice={handleOpenNewInvoice}
        />

        {invoicesStatus === 'loading' ? (
          <p>Loading...</p>
        ) : invoicesStatus === 'succeeded' &&
          invoicesToShow &&
          invoicesToShow.length > 0 ? (
          invoicesToShow.map((invoice: IInvoice) => (
            <InvoiceCard invoice={invoice} key={invoice.id} />
          ))
        ) : invoicesStatus === 'succeeded' && invoicesToShow?.length == 0 ? (
          <div className={`mt-16 md:mt-44 xl:mt-16`}>
            <NoInvoice />
          </div>
        ) : invoicesStatus == 'failed' ? (
          <p>Error</p>
        ) : null}
      </div>
      {isOpenNewInvoice && (
        <NewInvoice setIsOpenNewInvoice={setIsOpenNewInvoice} />
      )}
    </div>
  );
}
