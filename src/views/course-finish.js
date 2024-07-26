import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './course-finish.css'

const CourseFinish = (props) => {
  return (
    <div className="course-finish-container">
      <Helmet>
        <title>Course-Finish - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Course-Finish - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="course-finish-course-finish">
        <span className="course-finish-text">
          <span>Perfect</span>
        </span>
        <span className="course-finish-text02">
          <span>6/ 6</span>
        </span>
        <div className="course-finish-group1">
          <img
            alt="Rectangle1931082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/88e9d0a3-0e6e-4735-be4b-3c527814c3d8?org_if_sml=1350"
            className="course-finish-rectangle193"
          />
          <img
            alt="Rectangle1951082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/3ebe6db7-a3b8-4b9c-8c4b-7c08a600faa1?org_if_sml=1350"
            className="course-finish-rectangle195"
          />
          <img
            alt="Rectangle1971082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/9e3664e5-5b7b-4de1-91f5-da73302ef52a?org_if_sml=1349"
            className="course-finish-rectangle197"
          />
          <img
            alt="Rectangle1941082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/a7d4b802-824a-40e2-ac68-89419945dafa?org_if_sml=1349"
            className="course-finish-rectangle194"
          />
          <img
            alt="Rectangle1961082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/3d61158e-4fe5-4870-900a-2e29483d7f17?org_if_sml=1350"
            className="course-finish-rectangle196"
          />
          <img
            alt="Rectangle1981082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/8c520f1b-44e0-4193-b8f5-8b57782ed8df?org_if_sml=1350"
            className="course-finish-rectangle198"
          />
        </div>
        <img
          alt="LANG1082"
          src="/external/lang1082-zvc.svg"
          className="course-finish-lang"
        />
        <div className="course-finish-group2">
          <Link to="/course-reward" className="course-finish-button">
            <span className="course-finish-text04 ButtonLabelLarge">
              <span>Continue</span>
            </span>
          </Link>
          <button className="course-finish-button1">
            <span className="course-finish-text06 ButtonLabelLarge">
              <span>Review</span>
            </span>
          </button>
        </div>
        <img
          alt="Chefholdingaplateofdessertinhishand1082"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/68c6221b-243b-4eda-a85f-4435b854e66b?org_if_sml=1114155"
          className="course-finish-chefholdingaplateofdessertinhishand"
        />
        <span className="course-finish-text08">
          <span>
            You just completed all the course. Continue to collect your rewards.
          </span>
        </span>
      </div>
    </div>
  )
}

export default CourseFinish
