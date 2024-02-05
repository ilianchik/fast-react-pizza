import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-pizza flex flex-wrap items-center justify-center gap-x-24 gap-y-1 border-b-2 border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:justify-between sm:gap-x-0 sm:gap-y-0 sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
