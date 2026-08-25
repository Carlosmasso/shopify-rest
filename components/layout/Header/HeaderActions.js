import CartButton from "./CartButton";
import MobileDrawer from "./MobileDrawer";
import SearchButton from "./SearchButton";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <SearchButton />
      <CartButton />
      <MobileDrawer />
    </div>
  );
}
