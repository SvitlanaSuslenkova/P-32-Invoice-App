import { nanoid } from 'nanoid';
export const formInitialState = {
  //DELETE ALL
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
