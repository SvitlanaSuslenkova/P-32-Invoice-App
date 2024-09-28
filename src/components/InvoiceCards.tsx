'use client';
import { useState } from 'react';
import InvoiceCard from './InvoiceCard';
import Filter from './Filter';
import NoInvoice from './NoInvoice';
import React from 'react';

export default function InvoiceCards() {
  type Status = 'draft' | 'pending' | 'paid';
  const [status, setStatus] = useState<Status>('draft'); //take it out

  return (
    <div>
      <div
        className={`px-6 sm:px-12 md:px-0 grid justify-items-center gap-y-4 content-start`}
      >
        <Filter />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
      <div>
        <NoInvoice />
      </div>
      {/*MOVE*/}
    </div>
  );
}
