import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './intro-5.css'

const Intro5 = (props) => {
  return (
    <div className="intro5-container">
      <Helmet>
        <title>Intro-5 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Intro-5 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="intro5-introduction3">
        <img
          alt="LANG1028"
          src="/external/lang1028-g534.svg"
          className="intro5-lang"
        />
        <span className="intro5-text">
          <span>6 / 6</span>
        </span>
        <span className="intro5-text02">
          <span>Back</span>
        </span>
        <img
          alt="Rectangle1931028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/cfd427db-378a-4979-b789-3c2ac1027cc0?org_if_sml=1350"
          className="intro5-rectangle193"
        />
        <img
          alt="Rectangle1951028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/b20274c2-eb3e-443d-86f2-44be6ecc3fa3?org_if_sml=1351"
          className="intro5-rectangle195"
        />
        <img
          alt="Rectangle1971028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/dcc93567-5085-4d7a-8f16-ca9afb10446d?org_if_sml=1341"
          className="intro5-rectangle197"
        />
        <img
          alt="Rectangle1941028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/cb5bfadd-3b96-4d7c-ad68-1025a5ce1d6b?org_if_sml=1348"
          className="intro5-rectangle194"
        />
        <img
          alt="Rectangle1961028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/9d2bb6e4-53f9-4fed-ba1b-1b6d2d0b3f1c?org_if_sml=1351"
          className="intro5-rectangle196"
        />
        <img
          alt="Rectangle1981028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/95109d61-1a5d-4c96-b480-f2b580fd7578?org_if_sml=1342"
          className="intro5-rectangle198"
        />
        <Link to="/option" className="intro5-button">
          <span className="intro5-text04 ButtonLabelLarge">
            <span>Start Learning</span>
          </span>
        </Link>
        <span className="intro5-text06">
          <span>Succesful Create</span>
        </span>
        <img
          alt="Hiredemployee1028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/68e9ae64-f131-407e-9cbb-190de3ae5262?org_if_sml=1114650"
          className="intro5-hiredemployee"
        />
        <span className="intro5-text08">
          <span>
            Your account has been successfuly create. Now you can learn any
            language you want.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Intro5
