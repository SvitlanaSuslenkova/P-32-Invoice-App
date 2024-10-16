export interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
}

export interface Iitem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IInvoiceDraft {
  id: string;
  createdAt: string;
  paymentDue: string | undefined;
  description: string | undefined;
  paymentTerms: number | undefined;
  clientName: string | undefined;
  clientEmail: string | undefined;
  status: string;
  senderAddress: {
    street: string | undefined;
    city: string | undefined;
    postCode: string | undefined;
    country: string | undefined;
  };
  clientAddress: {
    street: string | undefined;
    city: string | undefined;
    postCode: string | undefined;
    country: string | undefined;
  };
  items: {
    name: string | undefined;
    quantity: number | undefined;
    price: number | undefined;
    total: number | undefined;
  }[];
  total: number | undefined;
}

export interface IitemDraft {
  name: string | undefined;
  quantity: number | undefined;
  price: number | undefined;
  total: number | undefined;
}
