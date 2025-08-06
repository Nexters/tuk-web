import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed inset-0 z-[999] h-[3.125rem] px-1.5">
      <div className="m-auto flex max-w-7xl items-center justify-between overflow-hidden px-[4.375rem] max-[1280px]:max-w-[55rem] max-[1280px]:px-6">
        <Link href="/" className="serif-title-24-M flex px-2 py-2.5 text-white-default">
          TUK
        </Link>
      </div>
    </header>
  );
};

export default Header;
