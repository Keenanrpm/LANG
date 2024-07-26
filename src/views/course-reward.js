import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './course-reward.css'

const CourseReward = (props) => {
  return (
    <div className="course-reward-container">
      <Helmet>
        <title>Course-Reward - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Course-Reward - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="course-reward-reward">
        <span className="course-reward-text">
          <span>100+ XP</span>
        </span>
        <span className="course-reward-text02">
          <span>6/ 6</span>
        </span>
        <div className="course-reward-group1">
          <img
            alt="Rectangle1931082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/95b4e518-0c86-46fc-aed7-7a93aebf4b5b?org_if_sml=1350"
            className="course-reward-rectangle193"
          />
          <img
            alt="Rectangle1951082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/36ad315a-6473-4530-be79-777f4f179d90?org_if_sml=1350"
            className="course-reward-rectangle195"
          />
          <img
            alt="Rectangle1971082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/e91747c2-1b1f-4c93-b3da-98f81d64d35f?org_if_sml=1349"
            className="course-reward-rectangle197"
          />
          <img
            alt="Rectangle1941082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/94d0d795-d056-48db-bfc4-c839793b5845?org_if_sml=1349"
            className="course-reward-rectangle194"
          />
          <img
            alt="Rectangle1961082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/75a36a4a-46b2-4f56-9d67-c73050604aab?org_if_sml=1350"
            className="course-reward-rectangle196"
          />
          <img
            alt="Rectangle1981082"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/509b9942-5ae1-4db6-b8f3-6b630fb117fe?org_if_sml=1350"
            className="course-reward-rectangle198"
          />
        </div>
        <img
          alt="LANG1082"
          src="/external/lang1082-mrrn.svg"
          className="course-reward-lang"
        />
        <div className="course-reward-group2">
          <Link to="/learn" className="course-reward-button">
            <span className="course-reward-text04 ButtonLabelLarge">
              <span>Continue</span>
            </span>
          </Link>
          <button className="course-reward-button1">
            <span className="course-reward-text06 ButtonLabelLarge">
              <span>Review</span>
            </span>
          </button>
        </div>
        <span className="course-reward-text08">
          <span>Yeay! finish the course to get more reward</span>
        </span>
        <img
          alt="handholdingwinnerscup1082"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/22b4699f-6bc9-42b1-b413-5d8dcbe597bb?org_if_sml=192558"
          className="course-reward-handholdingwinnerscup"
        />
      </div>
    </div>
  )
}

export default CourseReward
