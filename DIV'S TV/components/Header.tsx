import Image from "next/image";
import divtv from "../images/divtv.png";
import { ThemeToggler } from "./ThemeToggler";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src={divtv}
          width={120}
          height={100}
          alt="Div tv"
          className={"cursor-pointer"}
        />
      </Link>

      <div className='flex justify-right'>
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
      <div className="px-5 flex space-x-2 items-center">

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
