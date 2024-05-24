'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';


export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  
  return (    
    <label className='border-5 rounded items-center' > 
      <p className='sr-only items-center'></p>       
      <select
        defaultValue={localActive}
        className='bg-transparent'
        onChange={onSelectChange}
        disabled={isPending}        
      >       
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </label>
  );
}