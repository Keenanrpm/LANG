import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Login - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="login-masuk">
        <img
          alt="Rectangle111028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/465d4233-d848-46d1-97dd-e02d3279b563?org_if_sml=110066"
          className="login-rectangle11"
        />
        <span className="login-text">
          <span>Welcome Back!</span>
        </span>
        <div className="login-text-field">
          <span className="login-text02">
            <span>Insert your password here</span>
          </span>
          <input
            type="text"
            required
            placeholder="Enter Password"
            className="login-textinput input"
          />
        </div>
        <div className="login-text-field1">
          <span className="login-text04">
            <span>name@mail.com</span>
          </span>
          <input
            type="text"
            required
            placeholder="Your Email"
            className="login-textinput1 input"
          />
        </div>
        <Link to="/home" className="login-button">
          <span className="login-text06 ButtonLabelLarge">
            <span>Log In</span>
          </span>
        </Link>
        <button className="login-button1">
          <img
            alt="image11028"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/68f6901b-7ab7-444e-ac67-509e4494ca40?org_if_sml=11666"
            className="login-image1"
          />
          <span className="login-text08">
            <span>Log In with Google</span>
          </span>
        </button>
        <span className="login-text10">
          <span>E-mail</span>
        </span>
        <span className="login-text12">
          <span>Log in to your account to continue learn with LANG</span>
        </span>
        <span className="login-text14">
          <span>Password</span>
        </span>
        <img
          alt="LANG1028"
          src="/external/lang1028-63qo.svg"
          className="login-lang"
        />
        <img
          alt="Signintotheaccountwithusernameandpassword1028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/c345e0ba-1507-42c1-9235-564597ab70b0?org_if_sml=1272694"
          className="login-signintotheaccountwithusernameandpassword"
        />
        <div className="login-sms">
          <div className="login-vuesaxbulksms">
            <div className="login-sms1">
              <img
                alt="VectorI102"
                src="/external/vectori102-cy1p.svg"
                className="login-vector"
              />
              <div className="login-group">
                <img
                  alt="VectorI102"
                  src="/external/vectori102-pt.svg"
                  className="login-vector1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login-eyeslash">
          <div className="login-vuesaxbulkeyeslash">
            <div className="login-group1">
              <img
                alt="VectorI102"
                src="/external/vectori102-zdtqo.svg"
                className="login-vector2"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-kf24.svg"
                className="login-vector3"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-2mqr.svg"
                className="login-vector4"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-ur8.svg"
                className="login-vector5"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-cyg.svg"
                className="login-vector6"
              />
            </div>
          </div>
        </div>
        <Link to="/register" className="login-text16">
          <span className="login-text17">
            Can’t login?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="login-text18">Create</span>
          <span> here</span>
        </Link>
        <span className="login-text20">
          <span>Forgot Password</span>
        </span>
      </div>
    </div>
  )
}

export default Login
