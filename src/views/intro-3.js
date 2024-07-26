import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './intro-3.css'

const Intro3 = (props) => {
  return (
    <div className="intro3-container">
      <Helmet>
        <title>Intro-3 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Intro-3 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="intro3-introduction6">
        <img
          alt="LANG1324"
          src="/external/lang1324-yklj.svg"
          className="intro3-lang"
        />
        <span className="intro3-text">
          <span>Why are you learning English?</span>
        </span>
        <div className="intro3-text-field">
          <div className="intro3-content"></div>
          <input type="text" required className="intro3-textinput input" />
        </div>
        <Link to="/intro-4" className="intro3-navlink">
          <div className="intro3-text-field1">
            <div className="intro3-content1">
              <span className="intro3-text02">
                <span>Next</span>
              </span>
            </div>
          </div>
        </Link>
        <Link to="/login" className="intro3-button">
          <span className="intro3-text04">
            <span>Login</span>
          </span>
        </Link>
        <span className="intro3-text06">
          <span>3 / 6</span>
        </span>
        <Link to="/intro-2" className="intro3-text08">
          <span>Back</span>
        </Link>
        <img
          alt="Rectangle1931324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/f6e6d7cd-c362-4956-adde-f991234f9614?org_if_sml=1350"
          className="intro3-rectangle193"
        />
        <img
          alt="Rectangle1951324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/e582acd9-2a28-4f56-a08f-7a770c67218c?org_if_sml=1346"
          className="intro3-rectangle195"
        />
        <img
          alt="Rectangle1971324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/9c89432c-376f-48ec-b855-6ec4f0bd3d7c?org_if_sml=1340"
          className="intro3-rectangle197"
        />
        <img
          alt="Rectangle1941324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/0b5f09b6-5ad3-4406-9a2a-0a5e680aee13?org_if_sml=1348"
          className="intro3-rectangle194"
        />
        <img
          alt="Rectangle1961324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/6b8ea698-7777-49e3-a12a-58e92d4c2120?org_if_sml=1341"
          className="intro3-rectangle196"
        />
        <img
          alt="Rectangle1981324"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/9397e215-1341-4fd3-af72-7abffae8eaa3?org_if_sml=1341"
          className="intro3-rectangle198"
        />
      </div>
    </div>
  )
}

export default Intro3
