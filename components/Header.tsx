import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='sticky top-0 z-10 flex items-center justify-between max-w-3xl px-6 py-4 mx-auto bg-slate-200 dark:bg-slate-800'>
      <Link href='/'>
        <a className='flex items-center gap-2 group w-fit'>
          <div className='w-12 h-12 overflow-hidden border-2 border-blue-800 rounded-full group-hover:border-blue-600 dark:border-blue-400 md:w-16 md:h-16'>
            <Image
              src='/static/images/header-image.webp'
              alt='ivan'
              width='48px'
              height='48px'
              layout='responsive'
            />
          </div>
          <span className='text-xl font-bold text-blue-800 group-hover:text-blue-600 md:text-2xl dark:text-blue-400'>
            ivanolmo.io
          </span>
        </a>
      </Link>
      <div className='justify-self-end'>{/**theme switcher*/}</div>
    </header>
  );
}

export default Header;
