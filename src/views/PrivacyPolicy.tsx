import { useRef } from 'react'
import classNames from 'classnames'
import Marquee from 'react-fast-marquee'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

import Text from '../components/text/Text'
import Container from '../components/spacing/Container'
import Row from '../components/spacing/Row'
import { isMobileCheck } from '../utils/dimensions'
import mars from '../assets/img/mars-set-solar-system-planets-rendered-3d-elements-this-image-furnished-by-nasa 1.png'
import dunes from '../assets/img/bg 1.png'

import './PrivacyPolicy.scss'

const PrivacyPolicy  = () => {
  const isMobile = isMobileCheck()
  
  const parallax = useRef<IParallax>(null)

  return (<div>
    <Container className='privacy-policy-container'>
      <h2>Privacy Policy</h2>
      <p>Last updated: April 27, 2023</p>
      <p>
        Uqbar ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes our practices regarding the collection, use, and disclosure of information for the Pongo by Uqbar and EScape mobile applications ("Apps").

        By using the Apps, you agree to the terms of this Privacy Policy. If you do not agree with any part of this Privacy Policy, please do not use the Apps.
      </p>
      <h3>1. Information We Do Not Collect</h3>
      <p>
        We do not collect, store, or share any personal information, such as your name, email address, phone number, social media accounts, messages, or contacts. The Apps are designed to be used without requiring you to provide any personally identifiable information.
      </p>
      <h3>2. Anonymous System Data Collection</h3>
      <p>
        We collect anonymous system data to help us understand how the Apps are being used, such as the number of installations and crash reports. This data helps us improve the Apps' performance and overall user experience.
        The anonymous system data collected includes, but is not limited to:

        - Device type (e.g., smartphone, tablet)
        - Operating system version
        - App version
        - Date and time of the event (e.g., installation, crash)

        Please note that this data is collected anonymously and cannot be used to identify you personally.
      </p>
      <h3>3. Data Sharing</h3>
      <p>
        We do not share any collected data with third parties. The anonymous system data collected is solely for the purpose of improving the Apps' performance and user experience.
      </p>
      <h3>4. Changes to This Privacy Policy</h3>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time. We encourage you to review this Privacy Policy periodically to stay informed about our privacy practices.

        Any changes made to this Privacy Policy will be effective immediately upon posting on this page, with an updated "Last Updated" date at the top of the policy.
      </p>
      <h3>5. Contact Us</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at fabnev-hinmur@gmail.com.

        Your continued use of the Apps following the posting of changes to this Privacy Policy constitutes your acceptance of those changes.
      </p>
    </Container>
  </div>)
}

export default PrivacyPolicy
