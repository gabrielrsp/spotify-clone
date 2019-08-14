import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars3.githubusercontent.com/u/26857314?s=460&v=4"
        alt="Avatar"
      />
      Gabriel Rodrigues
    </User>
  </Container>
);

export default Header;
