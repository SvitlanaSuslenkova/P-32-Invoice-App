'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import { getInvoices } from '../app/actions/getInvoices';

export default function InvoiceCards() {
  const [invoices, setInvoices] = useState();
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const fetchInvoices = async () => {
    const allinvoices = await getInvoices();
    setInvoices(allinvoices);
    console.log(allinvoices);
    setLoading(false);
  };
  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div>
      <div
        className={`px-6 sm:px-12 md:px-0 grid justify-items-center gap-y-4 content-start`}
      >
        <Filter />
        {loading && !invoices ? (
          <p>Loading...</p>
        ) : !loading && invoices ? (
          invoices.map((invoice) => (
            <InvoiceCard invoice={invoice} key={invoice.id} />
          ))
        ) : (
          <NoInvoice />
        )}
      </div>
    </div>
  );
}
