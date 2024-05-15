import { isMobileCheck } from "../../utils/dimensions"
import Col from "../spacing/Col"
import './SignUpForNewsletter.scss'
import orangeCrescent from '../../assets/img/orange-crescent.svg'
import Text from '../../components/text/Text'
import Row from "../spacing/Row"
import Button from "../form/Button"
import classNames from "classnames"
import { useEffect, useState } from "react"

export const SignUpForNewsletter = () => {
  const isMobile = isMobileCheck()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "45497735",
          formId: "f9e67aee-532a-4174-8c4d-e76bb5f3dd96"
        });
        const allForms = document.getElementsByClassName('hbspt-form')
        const form = allForms[0] as HTMLDivElement
        Array.from(allForms).forEach(form => {
          form.remove()
        })
        // move the form to form-destination
        if (form) {
          document.getElementById('form-destination')?.appendChild(form)
        }
      }
    });

    return () => {
      document.body.removeChild(script);
    };

  }, []);

  return <Col className={classNames("sign-up-for-newsletter page", { isMobile })}>
    <img className="orange-crescent" src={orangeCrescent} />
    <Col className="sign-up-for-newsletter-content">
      <h1>Get Kinode in your inbox.</h1>
      <Row id="form-destination">
      </Row>
      <Text className="stay-updated">
        News, updates, and special opportunities for early supporters.
      </Text>
    </Col>
  </Col>
}

