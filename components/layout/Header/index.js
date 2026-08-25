import Container from "../Container";

import HeaderClient from "./HeaderClient";

import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <HeaderClient>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <Navigation />
          <HeaderActions />
        </div>
      </Container>
    </HeaderClient>
  );
}
