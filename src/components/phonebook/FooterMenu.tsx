import Row from "../spacing/Row"
import Col from "../spacing/Col"
import MenuItems from "../MenuItems"
import { isMobileCheck } from "../../utils/dimensions"

export const FooterMenu = () => {
  const isMobile = isMobileCheck()
  return <Row className="footer-menu">
    <MenuItems onToggle={() => { }} isMobile={isMobile} menuOpen={true} />
  </Row>
}

