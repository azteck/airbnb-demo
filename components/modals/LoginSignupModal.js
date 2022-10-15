import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { EnvelopeOpenIcon, GlobeAltIcon } from '@heroicons/react/outline';
import { firebase, auth } from '../../services/firebaseConfig';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

// TODO - Add country selector and prepend +<country ISD code> to phone number

const LoginSignupModal = ({ showModal, setShowModal }) => {
  const [phoneNumber, setnumber] = useState('');
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  // Send OTP
  const signin = () => {
    console.log('Signin Function');
    if (phoneNumber === '' || phoneNumber.length < 10) return;

    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //onSignInSubmit();
          console.log(response, 'response');
        },
      },
      auth
    );

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setfinal(confirmationResult);
        //alert('code sent');
        setshow(true);
        // ...
      })
      .catch((error) => {
        console.log('Error; SMS not sent', error);
        alert(error);
        //window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        console.log('Phone number verified', result);
      })
      .catch((err) => {
        alert('Wrong code');
      });
  };

  return (
    <>
      {/* <div className="text-bold"> */}
      <Modal
        title="Login or Sign up"
        className="modalStyle "
        open={showModal}
        onCancel={() => setShowModal(!showModal)}
        footer={null} // remove default buttons in Modal
        destroyOnClose={true} //Reactplayer stops when Modal is closed
        maskClosable={false} ////Keeps Modal open when mouse is clicked outside of window
      >
        <p className="text-xl font-semibold ">Welcome to Airbnb</p>

        <div className="relative">
          <input
            type="text"
            id="phone_number"
            className="block px-2.5 pb-3 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg outline outline-1 outline-gray-700  focus:outline-2 focus:outline-blue-400 peer"
            placeholder="  +91 XXXXXXXXXX"
            autoFocus={true}
            value={phoneNumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
          <label
            htmlFor="phone_number"
            className="absolute text-lg text-gray-500  duration-500  -translate-y-5 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-3"
          >
            Phone number
          </label>
        </div>
        <p className="text-xs pt-2">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. Privacy Policy
        </p>
        <div style={{ display: !show ? 'block' : 'none' }}>
          <button
            onClick={signin}
            className="w-full rounded-lg p-2  bg-orange-500 text-white font-semibold text-base"
            id="sign-in-button"
          >
            Send OTP
          </button>
        </div>
        <div className="relative" style={{ display: show ? 'block' : 'none' }}>
          <input
            type="text"
            id="enter_otp"
            className="block px-2.5 pb-3 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg outline outline-1 outline-gray-700  focus:outline-2 focus:outline-blue-400 peer"
            placeholder="   XXXXXX"
            onChange={(e) => {
              setotp(e.target.value);
            }}
          />
          <label
            htmlFor="enter_otp"
            className="absolute text-lg text-gray-500  duration-500  -translate-y-5 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-12 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-3"
          >
            Enter OTP
          </label>

          <br />
          <button
            className="w-full rounded-lg p-2  bg-orange-500 text-white font-semibold text-base"
            onClick={ValidateOtp}
          >
            Verify
          </button>
        </div>

        {/* ********************** Horizontal Line ********************** */}
        <div className="pt-4 pb-4">
          <hr className="login w-100" />
        </div>

        {/* ********************** Start - Social Login Buttons ********************** */}
        <div className="flex flex-col space-y-4 items-center">
          <button className="socialLoginButton">
            <div className="flex items-center w-10">
              <GlobeAltIcon className="inline-flex a h-5  cursor-pointer" />
            </div>
            <div className="w-full text-center ">Continue with Google</div>
          </button>
          <button className="socialLoginButton">
            <div className="flex items-center w-10">
              <GlobeAltIcon className="inline-flex a h-5  cursor-pointer" />
            </div>
            <div className="w-full text-center ">Continue with Apple</div>
          </button>
          <button className="socialLoginButton">
            <div className="flex items-center w-10">
              <GlobeAltIcon className="inline-flex a h-5  cursor-pointer" />
            </div>
            <div className="w-full text-center ">Continue with email</div>
          </button>
          {/* ********************** End - Social Login Buttons ********************** */}
        </div>
      </Modal>
      {/* </div> */}
    </>
  );
};

export default LoginSignupModal;
