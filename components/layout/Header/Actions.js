import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import MobileDrawer from "./MobileDrawer";

export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <SearchButton />
      <CartButton />
      <MobileDrawer />
    </div>
  );
}