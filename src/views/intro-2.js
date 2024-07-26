import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './intro-2.css'

const Intro2 = (props) => {
  return (
    <div className="intro2-container">
      <Helmet>
        <title>Intro-2 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Intro-2 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="intro2-introduction7">
        <img
          alt="LANG1324"
          src="/external/lang1324-00e.svg"
          className="intro2-lang"
        />
        <span className="intro2-text">
          <span>Why are you learning English?</span>
        </span>
        <Link to="/intro-4" className="intro2-navlink">
          <div className="intro2-text-field">
            <div className="intro2-content">
              <span className="intro2-text02">
                <span>I just enjoy learning language</span>
              </span>
            </div>
          </div>
        </Link>
        <Link to="/intro-4" className="intro2-navlink1">
          <div className="intro2-text-field1">
            <div className="intro2-content1">
              <span className="intro2-text04">
                <span>To connect with my family / friends</span>
              </span>
            </div>
          </div>
        </Link>
        <Link to="/intro-4" className="intro2-navlink2">
          <div className="intro2-text-field2">
            <div className="intro2-content2">
              <span className="intro2-text06">
                <span>I need it for School</span>
              </span>
            </div>
          </div>
        </Link>
        <Link to="/intro-3" className="intro2-navlink3">
          <div className="intro2-text-field3">
            <div className="intro2-content3">
              <span className="intro2-text08">
                <span>Other</span>
              </span>
            </div>
          </div>
        </Link>
        <Link to="/login" className="intro2-button">
          <span className="intro2-text10">
            <span>Login</span>
          </span>
        </Link>
        <span className="intro2-text12">
          <span>2 / 6</span>
        </span>
        <Link to="/intro-2" className="intro2-text14">
          <span>Back</span>
        </Link>
        <img
          alt="Rectangle1931324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/29612997-f250-4f9a-93da-f0c8a1b0640f?org_if_sml=1350"
          className="intro2-rectangle193"
        />
        <img
          alt="Rectangle1951324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/c20c0511-cc2a-454f-8df4-acdaece52977?org_if_sml=1341"
          className="intro2-rectangle195"
        />
        <img
          alt="Rectangle1971324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/419be686-bb54-4e57-88ea-0b8ad4e34bbf?org_if_sml=1340"
          className="intro2-rectangle197"
        />
        <img
          alt="Rectangle1941324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/3a21eb36-00cc-4f4d-a4f6-cedc0c6d6179?org_if_sml=1348"
          className="intro2-rectangle194"
        />
        <img
          alt="Rectangle1961324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/b7227247-b181-4584-82ea-2883fb98938e?org_if_sml=1341"
          className="intro2-rectangle196"
        />
        <img
          alt="Rectangle1981324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/ad341daf-4b3b-4e6b-98d2-481af762255b?org_if_sml=1341"
          className="intro2-rectangle198"
        />
      </div>
    </div>
  )
}

export default Intro2
