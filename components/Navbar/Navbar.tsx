import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";
 

const Navbar = () => {
  return (
    <nav className=" shadow-sm  ">
      <div className="container flex flex-col justify-between   py-6 sm:flex-row sm:items-center gap-4 ">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />

        <div className="flex gap-4">
          {/* darkmode */}
          <DarkMode />
          <DropdownListMenu />
           
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
