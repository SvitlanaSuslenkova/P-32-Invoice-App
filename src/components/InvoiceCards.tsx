'use client';

import React, { useState, useEffect } from 'react';
import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import { IInvoice } from './Types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchInvoices,
  setFilteredInvoices,
} from '../app/redux/slices/invoicesSlice';

export default function InvoiceCards() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [invoicesToShow, setInvoicesToShow] = useState<IInvoice[] | null>([]);

  const dispatch = useDispatch();

  const invoices = useSelector((state) => state.invoices.invoices);
  const filteredInvoices = useSelector(
    (state) => state.invoices.filteredinvoices
  );
  const filters = useSelector((state) => state.filters.filters);
  const invoicesStatus = useSelector((state) => state.invoices.status);
  //const error = useSelector((state) => state.invoices.error);

  useEffect(() => {
    if (invoicesStatus === 'idle') {
      dispatch(fetchInvoices());
    }
  }, [dispatch, invoices]);

  useEffect(() => {
    if (invoicesStatus === 'succeeded') {
      dispatch(setFilteredInvoices(filters));
    }
  }, [dispatch, invoices, filters, invoicesStatus]);

  useEffect(() => {
    if (filteredInvoices && filteredInvoices.length > 0) {
      setInvoicesToShow(filteredInvoices);
    } else {
      setInvoicesToShow([]);
    }
  }, [filteredInvoices]);

  return (
    <div className={`grid justify-items-center gap-y-4 content-start w-full `}>
      <Filter
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        filters={filters}
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
  );
}
