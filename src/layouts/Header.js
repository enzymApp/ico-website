import React      from 'react'
import { Row, Col } from 'reactstrap'

import LanguageFlag from '../components/LanguageFlag'
import Menu         from '../components/Menu'

const LANGS = [
  {langCode: 'fr', imgSrc: '/images/picto/flag_FR.svg'},
  {langCode: 'en', imgSrc: '/images/picto/flag_EN.svg'},
]

const Header = () => (
  <div id="header">
    <div className="container-fluid">
      <Row className="align-items-center">
        <Col xs="6" md="8" lg="8">
          <div id="logo_top">
            <a href="#"><img src="/images/logo/enzym_small_white.png" /></a>
            <div className="left-side">
              <Menu />
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4" className="right-side">
          <div className="language-flag">
            {LANGS.map(({langCode, imgSrc}) => (
              <LanguageFlag {...{langCode, imgSrc}} key={langCode} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  </div>
)

export default Header
