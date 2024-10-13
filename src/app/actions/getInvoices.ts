'use server';

import { promises as fs } from 'fs';

import path from //, { join }
'path';
//import { cwd } from 'process';
const PATH_TO_INVOICES = path.join(process.cwd(), 'src', 'data.json');
//const PATH_TO_INVOICES = 'src/data.json';

export const getInvoices = async () => {
  try {
    const data = await fs.readFile(PATH_TO_INVOICES, 'utf-8');
    const invoices = JSON.parse(data);
    return invoices;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch invoices from data.json');
  }
};
