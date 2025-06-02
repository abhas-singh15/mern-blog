
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar fluid rounded>
      <Link to={'/'}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-yellow-400 rounded-lg self-center whitespace-nowrap ">Abhas</span>
            Blog
        </span>
        </Link>

        <form>
            <TextInput
                type="text"
                placeholder="search..."
                rightIcon={AiOutlineSearch}
                className="hidden lg:inline"
                />
        </form>

        <Button className='w-12 h-10 p-0.5 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
        </Button>

      <div className="flex md:order-2">
        <Button>
            <Link to={'/sign-up'}>Get started</Link></Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active= {path === '/'}>
            <Link to={'/'}>Home</Link>
                </NavbarLink>
        <NavbarLink active= {path === '/about'}>
            <Link to={'/about'}>About</Link>
            </NavbarLink>
        <NavbarLink active= {path === '/dashboard'}>
            <Link to={'/dashboard'}>Dashboard</Link>
        </NavbarLink>
        <NavbarLink active= {path === '/projects'}>
            <Link to={'/projects'}>Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
