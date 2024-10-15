import { z } from 'zod';

export const schema = z.object({
  id: z.string(),
  createdAt: z.string().date(),
  paymentDue: z.string().date(),
  description: z.string().min(4, { message: 'can’t be empty' }),
  //paymentTerms: z.number().positive({ message: 'can’t be empty' }),
  paymentTerms: z.string().min(1, { message: 'can’t be empty' }),
  clientName: z.string().min(1, { message: 'can’t be empty' }),
  clientEmail: z.string().email().min(1, { message: 'can’t be empty' }),
  status: z.string(),
  senderAddress: z.object({
    street: z.string().min(1, { message: 'can’t be empty' }),
    city: z.string().min(1, { message: 'can’t be empty' }),
    postCode: z.string().min(1, { message: 'can’t be empty' }),
    country: z.string().min(1, { message: 'can’t be empty' }),
  }),
  clientAddress: z.object({
    street: z.string().min(1, { message: 'can’t be empty' }),
    city: z.string().min(1, { message: 'can’t be empty' }),
    postCode: z.string().min(1, { message: 'can’t be empty' }),
    country: z.string().min(1, { message: 'can’t be empty' }),
  }),
  items: z.array(
    z.object({
      name: z.string().min(1, { message: 'can’t be empty' }),
      //quantity: z.string().min(1, { message: 'can’t be empty' }),
      quantity: z.number().positive({ message: 'can’t be empty' }),
      //price: z.string().min(1, { message: 'can’t be empty' }),
      price: z.number().positive({ message: 'can’t be empty' }),
      total: z.number().positive(),
      // total: z.string().min(1),
    })
  ),
  total: z.number(),
  //total: z.string().min(1),
});
