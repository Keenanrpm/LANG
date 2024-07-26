import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - LANG</title>
        <meta
          name="description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
        <meta property="og:title" content="Register - LANG" />
        <meta
          property="og:description"
          content="A new different way to improve your languange skills, best academic online learning platform."
        />
      </Helmet>
      <div className="register-buat-akun">
        <img
          alt="Rectangle111028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/6bf05f2e-742d-4372-871a-97fc56b234bd?org_if_sml=110066"
          className="register-rectangle11"
        />
        <span className="register-text">
          <span>Welcome to LANG!</span>
        </span>
        <div className="register-text-field">
          <span className="register-text02">
            <span>Min. 4 character</span>
          </span>
          <input type="text" required className="register-textinput input" />
        </div>
        <div className="register-text-field1">
          <span className="register-text04">
            <span>Ex:20</span>
          </span>
          <input type="text" required className="register-textinput1 input" />
        </div>
        <div className="register-text-field2">
          <span className="register-text06">
            <span>Ex: Keenan</span>
          </span>
          <input type="text" required className="register-textinput2 input" />
        </div>
        <div className="register-text-field3">
          <span className="register-text08">
            <span>name@mail.com</span>
          </span>
          <input type="text" required className="register-textinput3 input" />
        </div>
        <Link to="/home" className="register-button">
          <span className="register-text10 ButtonLabelLarge">
            <span>Create Account</span>
          </span>
        </Link>
        <span className="register-text12">
          <span>Age</span>
        </span>
        <span className="register-text14">
          <span>E-mail</span>
        </span>
        <span className="register-text16">
          <span>Create your account to get useful access</span>
        </span>
        <span className="register-text18">
          <span>Name</span>
        </span>
        <Link to="/login" className="register-text20">
          <span className="register-text21">
            Already have Account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="register-text22">Login</span>
          <span> here</span>
        </Link>
        <span className="register-text24">
          <span>Password</span>
        </span>
        <img
          alt="Handsignsthedocument1028"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/df1611bd-fa13-492a-a6f4-95f667f31ece/f357e7a8-a82c-4ed7-aa3c-ca5570944053?org_if_sml=1206471"
          className="register-handsignsthedocument"
        />
        <img
          alt="LANG1028"
          src="/external/lang1028-mim2.svg"
          className="register-lang"
        />
        <div className="register-eyeslash">
          <div className="register-vuesaxbulkeyeslash">
            <div className="register-group">
              <img
                alt="VectorI102"
                src="/external/vectori102-3tr9.svg"
                className="register-vector"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-6zk.svg"
                className="register-vector1"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-qcb.svg"
                className="register-vector2"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-7xma.svg"
                className="register-vector3"
              />
              <img
                alt="VectorI102"
                src="/external/vectori102-nrj3.svg"
                className="register-vector4"
              />
            </div>
          </div>
        </div>
        <div className="register-sms">
          <div className="register-vuesaxbulksms">
            <div className="register-sms1">
              <img
                alt="VectorI102"
                src="/external/vectori102-miqq.svg"
                className="register-vector5"
              />
              <div className="register-group1">
                <img
                  alt="VectorI102"
                  src="/external/vectori102-wuu.svg"
                  className="register-vector6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
