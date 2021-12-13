import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { ThemeSwith } from "../ThemeSwith";
import { Nav } from "./styles";
import { translate } from "../../providers/i18n/translate";

const Header = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">
          <FormattedMessage id="menu.home" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FormattedMessage id="menu.about" />
        </Link>
      </li>
      <li>
        <Link to="/statistics">
          <FormattedMessage id="menu.statistics" />
        </Link>
      </li>
      <li>
        <Link to="/settings">{translate("menu.settings")}</Link>
      </li>
      <li>
        <ThemeSwith />
      </li>
    </ul>
  </Nav>
);

export default Header;
