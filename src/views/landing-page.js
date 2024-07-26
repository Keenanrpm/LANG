import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>LANG</title>
      </Helmet>
      <div className="landing-page-landing-page">
        <img
          alt="Rectangle111026"
          src="/external/rectangle111026-12xs-1200h.png"
          className="landing-page-rectangle11"
        />
        <img
          alt="Rectangle121026"
          src="/external/rectangle121026-i52-500h.png"
          className="landing-page-rectangle12"
        />
        <img
          alt="LANG1026"
          src="/external/lang1026-657.svg"
          className="landing-page-lang"
        />
        <img
          alt="LANG1026"
          src="/external/lang1026-bfm4.svg"
          className="landing-page-lang1"
        />
        <span className="landing-page-text">
          <span>
            <span>
              Speak any language
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>confidently</span>
          </span>
        </span>
        <img
          alt="Travelergivesaninterview1026"
          src="/external/travelergivesaninterview1026-ii7-900w.png"
          className="landing-page-travelergivesaninterview"
        />
        <img
          alt="preschooleducationforchildrenandthestudyofgeometri1026"
          src="/external/preschooleducationforchildrenandthestudyofgeometri1026-02r-800w.png"
          className="landing-page-preschooleducationforchildrenandthestudyofgeometri"
        />
        <span className="landing-page-text05">
          <span>Social</span>
        </span>
        <span className="landing-page-text07">
          <span>Policies</span>
        </span>
        <span className="landing-page-text09">
          <span>Contact Us</span>
        </span>
        <span className="landing-page-text11">
          <span>Company</span>
        </span>
        <span className="landing-page-text13">
          <span>Lang Building HQ</span>
        </span>
        <span className="landing-page-text15">
          <span>
            <span>Instagram</span>
            <br></br>
            <span>LinkedIn</span>
            <br></br>
            <span>Facebook</span>
          </span>
        </span>
        <span className="landing-page-text22">
          <span>
            <span>Privacy Policy</span>
            <br></br>
            <span>Terms of Use</span>
          </span>
        </span>
        <span className="landing-page-text27">
          <span>
            <span>P: +62 812 3456 78</span>
            <br></br>
            <span>E: mail@lang.com</span>
          </span>
        </span>
        <span className="landing-page-text32">
          <span>
            <span>About Us</span>
            <br></br>
            <span>Our Team</span>
            <br></br>
            <span>Career</span>
          </span>
        </span>
        <span className="landing-page-text39">
          <span>© 2022 Lang. All rights reserved.</span>
        </span>
        <span className="landing-page-text41">
          <span>
            Jl. Kelapa Dua Raya No.93, Klp. Dua, Kec. Klp. Dua, Kabupaten
            Tangerang, Banten 15810
          </span>
        </span>
        <span className="landing-page-text43">
          <span>
            A new different way to improve your languange skills, best academic
            online learning platform.
          </span>
        </span>
        <span className="landing-page-text45">
          <span>Language:</span>
        </span>
        <span className="landing-page-text47">
          <span>EN</span>
        </span>
        <Link to="/login" className="landing-page-button">
          <span className="landing-page-text49">
            <span>Login</span>
          </span>
        </Link>
        <span className="landing-page-text51">
          <span>Why learn a language with LANG?</span>
        </span>
        <span className="landing-page-text53">
          <span>Learn at your own pace</span>
        </span>
        <span className="landing-page-text55">
          <span>Courses Created by Experts</span>
        </span>
        <span className="landing-page-text57">
          <span>
            Take advantage of our bite-sized lessons so you can study at a time
            that&apos;s best for you. You&apos;ll only see exercises at the
            right level for you and can achieve certificates when you pass each
            level.
          </span>
        </span>
        <span className="landing-page-text59">
          <span>1/4</span>
        </span>
        <img
          alt="Ellipse11027"
          src="/external/ellipse11027-t5jw-200h.png"
          className="landing-page-ellipse1"
        />
        <img
          alt="Ellipse31027"
          src="/external/ellipse31027-iazv-200h.png"
          className="landing-page-ellipse3"
        />
        <img
          alt="Ellipse21027"
          src="/external/ellipse21027-kg9g-200h.png"
          className="landing-page-ellipse2"
        />
        <img
          alt="Ellipse41027"
          src="/external/ellipse41027-wh07-200h.png"
          className="landing-page-ellipse4"
        />
        <img
          alt="Vector11027"
          src="/external/vector11027-r1ux.svg"
          className="landing-page-vector1"
        />
        <img
          alt="languagetranslator11027"
          src="/external/languagetranslator11027-wt7-300h.png"
          className="landing-page-languagetranslator1"
        />
        <div className="landing-page-group1">
          <Link to="/intro-1" className="landing-page-button1">
            <span className="landing-page-text61">Start Lesson!</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
