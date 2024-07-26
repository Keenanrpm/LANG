import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './course-1.css'

const Course1 = (props) => {
  return (
    <div className="course1-container">
      <Helmet>
        <title>Course-1 - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Course-1 - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="course1-pilih-level">
        <span className="course1-text">
          <span>
            <span>Find the Right Level to Start</span>
            <br></br>
            <span>Learning Spanish</span>
          </span>
        </span>
        <Link to="/course-2" className="course1-navlink">
          <div className="course1-frame3">
            <span className="course1-text05">
              <span>
                <span>Learning Spanish for</span>
                <br></br>
                <span>the First Time?</span>
              </span>
            </span>
            <img
              alt="Younggirlthinksaboutsomethingandsays1021"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/6627993a-c526-4662-ad76-4256f394add8?org_if_sml=128868"
              className="course1-younggirlthinksaboutsomethingandsays"
            />
            <span className="course1-text10">
              <span>Start from Scrath</span>
            </span>
          </div>
        </Link>
        <Link to="/course-2" className="course1-navlink1">
          <div className="course1-frame4">
            <span className="course1-text12">
              <span>Already know some Spanish?</span>
            </span>
            <img
              alt="Childsolvingrubikscube1021"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/af9df12b-bc34-4fc7-b627-9e2cbea8ca82?org_if_sml=121628"
              className="course1-childsolvingrubikscube"
            />
            <span className="course1-text14">
              <span>Check your level here!</span>
            </span>
          </div>
        </Link>
        <Link to="/home" className="course1-button">
          <span className="course1-text16">
            <span>Back</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Course1
