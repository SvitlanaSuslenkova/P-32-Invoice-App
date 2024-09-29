'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import { getInvoices } from '../app/actions/getInvoices';
import { IInvoice } from './Types';

export default function InvoiceCards() {
  const [invoices, setInvoices] = useState<IInvoice[] | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false); //add close on click outside?

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const allinvoices = await getInvoices();
        setInvoices(allinvoices);
        console.log(allinvoices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <div
        className={`px-6 sm:px-12 md:px-0 grid justify-items-center gap-y-4 content-start`}
      >
        <Filter isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        {loading && !invoices ? (
          <p>Loading...</p>
        ) : !loading && invoices ? (
          invoices.map((invoice) => (
            <InvoiceCard invoice={invoice} key={invoice.id} />
          ))
        ) : error ? (
          <p>Error</p>
        ) : (
          <NoInvoice />
        )}
      </div>
    </div>
  );
}
