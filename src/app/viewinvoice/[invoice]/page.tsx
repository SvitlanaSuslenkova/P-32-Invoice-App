'use client';
import { usePathname } from 'next/navigation';

export default function ViewInvoice() {
  const pathname = usePathname();
  return <div>{pathname}</div>;
}
