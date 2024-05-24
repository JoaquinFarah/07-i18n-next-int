'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Tangologo.jpg';


export default function NotFound() {
  return (
    
    <html> 
      <Link href="/" className="mx-auto flex w-full flex-1 flex-wrap items-center justify-around p-4 gap-5 md:gap-0 ">  
        <Image
          src={Logo}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="mt-5 justify-center h-auto w-36 drop-shadow-2xl rounded-lg"
          priority
        />
      </Link>
           
      <body className='text-center'>
        <h1 className='mt-10 font-semibold'>ERROR 404!</h1>
      </body>
    </html>
  );
}