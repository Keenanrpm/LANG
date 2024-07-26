import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './intro-4.css'

const Intro4 = (props) => {
  return (
    <div className="intro4-container">
      <Helmet>
        <title>Intro-4 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Intro-4 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="intro4-introduction2">
        <img
          alt="LANG1027"
          src="/external/lang1027-x4zj.svg"
          className="intro4-lang"
        />
        <span className="intro4-text">
          <span>Create Your Account</span>
        </span>
        <Link to="/login" className="intro4-button">
          <span className="intro4-text02">
            <span>Login</span>
          </span>
        </Link>
        <span className="intro4-text04">
          <span>5 / 6</span>
        </span>
        <Link to="/intro-2" className="intro4-text06">
          <span>Back</span>
        </Link>
        <img
          alt="Rectangle1931027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/36e5745d-938c-41dd-9a8b-325158813871?org_if_sml=1350"
          className="intro4-rectangle193"
        />
        <img
          alt="Rectangle1951027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/66024228-507c-409f-8a4b-febedd7a367d?org_if_sml=1351"
          className="intro4-rectangle195"
        />
        <img
          alt="Rectangle1971027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/4994d2a7-c171-4e24-b10a-c4f9ffeee802?org_if_sml=1364"
          className="intro4-rectangle197"
        />
        <img
          alt="Rectangle1941027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/cb49bc87-ce8a-41cf-bb63-2294429a86ee?org_if_sml=1348"
          className="intro4-rectangle194"
        />
        <img
          alt="Rectangle1961027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/1ddca752-7b4f-46c3-b282-37bc7b6b7e47?org_if_sml=1351"
          className="intro4-rectangle196"
        />
        <img
          alt="Rectangle1981028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/f9d2ed88-ec37-4326-bae1-fb2040633bc8?org_if_sml=1341"
          className="intro4-rectangle198"
        />
        <Link to="/intro-5" className="intro4-button1">
          <span className="intro4-text08 ButtonLabelLarge">
            <span>Register</span>
          </span>
        </Link>
        <div className="intro4-text-field">
          <span className="intro4-text10">
            <span>Insert password here</span>
          </span>
          <input
            type="text"
            required
            placeholder="Insert Password Here"
            className="intro4-textinput input"
          />
        </div>
        <span className="intro4-text12">
          <span className="intro4-text13">
            By proceeding, I accept the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="intro4-text14">Terms and Conditions (T&amp;Cs)</span>
          <span className="intro4-text15">
            {' '}
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>the Privacy Policy.</span>
        </span>
        <div className="intro4-text-field1">
          <span className="intro4-text17">
            <span>Your name here</span>
          </span>
          <input
            type="text"
            required
            placeholder="Your Name Here"
            className="intro4-textinput1 input"
          />
        </div>
        <div className="intro4-text-field2">
          <span className="intro4-text19">
            <span>Your e-mail here</span>
          </span>
          <input
            type="text"
            required
            placeholder="Your Email Here"
            className="intro4-textinput2 input"
          />
        </div>
      </div>
    </div>
  )
}

export default Intro4
