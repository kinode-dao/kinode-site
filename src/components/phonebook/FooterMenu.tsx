import Row from "../spacing/Row"
import Col from "../spacing/Col"
import MenuItems from "../MenuItems"
import { isMobileCheck } from "../../utils/dimensions"
import classNames from "classnames"

export const FooterMenu = () => {
  const isMobile = isMobileCheck()
  return <Row className={classNames("footer-menu", { isMobile })}>
    <MenuItems onToggle={() => { }} isMobile={isMobile} menuOpen={true} setMenuOpen={() => { }} isInFooter />
  </Row>
}

