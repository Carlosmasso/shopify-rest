import Container from "../Container";

import HeaderClient from "./HeaderClient";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Actions from "./Actions";

export default function Header() {
  return (
    <HeaderClient>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <Navigation />
          <Actions />
        </div>
      </Container>
    </HeaderClient>
  );
}