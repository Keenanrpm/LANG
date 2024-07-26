import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './intro-1.css'

const Intro1 = (props) => {
  return (
    <div className="intro1-container">
      <Helmet>
        <title>Intro-1 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Intro-1 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="intro1-introduction1">
        <img
          alt="LANG1027"
          src="/external/lang1027-sl8k.svg"
          className="intro1-lang"
        />
        <Link to="/intro-2" className="intro1-button">
          <span className="intro1-text ButtonLabelLarge">
            <span>Next</span>
          </span>
        </Link>
        <span className="intro1-text02">
          <span>Welcome to LANG</span>
        </span>
        <img
          alt="Happygirlwavingfromtheairplanewindow1027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/1eb8d8a2-9c80-472b-9567-4aae7006e1a1?org_if_sml=1117029"
          className="intro1-happygirlwavingfromtheairplanewindow"
        />
        <span className="intro1-text04">
          <span className="intro1-text05">
            Just a few quick questions so we can create your
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="intro1-text06">language learning profile</span>
          <span>. Are you ready?</span>
        </span>
        <Link to="/login" className="intro1-button1">
          <span className="intro1-text08">
            <span>Login</span>
          </span>
        </Link>
        <span className="intro1-text10">
          <span>1 / 6</span>
        </span>
        <Link to="/" className="intro1-text12">
          <span>Back</span>
        </Link>
        <img
          alt="Rectangle1931027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/142e8dac-865a-4040-b138-fc74e30c0afa?org_if_sml=1350"
          className="intro1-rectangle193"
        />
        <img
          alt="Rectangle1951027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/c24d1471-7707-4fab-bff1-bf4cfb5009ad?org_if_sml=1341"
          className="intro1-rectangle195"
        />
        <img
          alt="Rectangle1971027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/48c0d71c-e995-41b6-8f30-d351ad55d19e?org_if_sml=1340"
          className="intro1-rectangle197"
        />
        <img
          alt="Rectangle1941027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/9dadaee3-c567-4aba-8f47-2b6d5ac63a67?org_if_sml=1340"
          className="intro1-rectangle194"
        />
        <img
          alt="Rectangle1961027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/43e5bc4a-897d-4036-b96b-306d6c866efb?org_if_sml=1341"
          className="intro1-rectangle196"
        />
        <img
          alt="Rectangle1981027"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/b092ca92-98c1-4129-8de8-f2deafffaa3b?org_if_sml=1341"
          className="intro1-rectangle198"
        />
      </div>
    </div>
  )
}

export default Intro1
