import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './option.css'

const Option = (props) => {
  return (
    <div className="option-container">
      <Helmet>
        <title>Option - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Option - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="option-language-option">
        <span className="option-text">
          <span>I Want to Learn</span>
        </span>
        <span className="option-text02">
          <span className="option-text03">
            I Speak
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>English</span>
        </span>
        <div className="option-arrowdown">
          <div className="option-vuesaxbulkarrowdown">
            <div className="option-arrowdown1">
              <img
                alt="VectorI102"
                src="/external/vectori102-slnd.svg"
                className="option-vector"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-m5f.svg"
                className="option-vector1"
              />
            </div>
          </div>
        </div>
        <img
          alt="Rectangle91021"
          src="/external/rectangle91021-dh5r-400h.png"
          className="option-rectangle9"
        />
        <img
          alt="Rectangle91021"
          src="/external/rectangle91021-dh5r-400h.png"
          className="option-rectangle91"
        />
        <img
          alt="Rectangle101021"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/df7a38e6-9ce7-4a10-9d7b-19afa9567dd0?org_if_sml=1123"
          className="option-rectangle10"
        />
        <span className="option-text05">
          <span>Polish</span>
        </span>
        <span className="option-text07">
          <span>Spanish</span>
        </span>
        <div className="option-group2">
          <span className="option-text09">
            <span>English</span>
          </span>
          <img
            alt="unitedstatessquareflag6398045527244311021"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/ce6ba538-c365-4cb0-9096-8c11c2dc9cb5?org_if_sml=126434"
            className="option-unitedstatessquareflag639804552724431"
          />
        </div>
        <Link to="/course-1" className="option-navlink">
          <img
            alt="spainflag5152188430294211021"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/5ac7cbcb-8044-4ca1-b6d9-3154d4530ec5?org_if_sml=122873"
            className="option-spainflag515218843029421"
          />
        </Link>
        <img
          alt="indonesiaflag5128166427165011021"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/6ef47c25-7d37-4687-ae79-02e9e3ebd213?org_if_sml=114498"
          className="option-indonesiaflag512816642716501"
        />
        <Link to="/home" className="option-button">
          <span className="option-text11">
            <span>Back</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Option
