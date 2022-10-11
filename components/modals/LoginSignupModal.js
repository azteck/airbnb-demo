import { Button, Modal } from 'antd';
import { EnvelopeOpenIcon, GlobeAltIcon } from '@heroicons/react/outline';

const LoginSignupModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className="text-bold">
        <Modal
          title="Login or Sign up"
          className="modalStyle "
          visible={showModal}
          onCancel={() => setShowModal(!showModal)}
          //width={50}
          footer={null} // remove default buttons in Modal
          destroyOnClose={true} //Reactplayer stops when Modal is closed
          maskClosable={false} ////Keeps Modal open when mouse is clicked outside of window
        >
          <p className="text-xl font-semibold ">Welcome to Airbnb</p>
          {/* <div className="flex items-center border-0 border-slate-600 rounded-lg py-1 shadow-lg"> */}
          {/* <input
            type="text"
            placeholder="Phone number"
            className="w-full border-solid border-2 border-slate-600 outline-none rounded-lg  p-2 text-lg text-gray-700 placeholder-gray-400"
          /> */}
          <div class="relative">
            <input
              type="text"
              id="small_outlined"
              class="block px-2.5 pb-3 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg outline outline-1 outline-gray-700  focus:outline-2 focus:outline-blue-400 peer"
              placeholder=" "
            />
            <label
              for="small_outlined"
              class="absolute text-lg text-gray-500  duration-500  -translate-y-3 scale-50 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-5 left-3"
            >
              Phone number
            </label>
          </div>
          {/* </div> */}
          <p className="text-xs pt-2">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </p>
          <button className="w-full rounded-lg p-2  bg-orange-500 text-white font-semibold text-base">
            Continue
          </button>
          <div className="pt-4 pb-4">
            <hr class="login w-100" />
          </div>
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
          </div>
        </Modal>
      </div>
    </>
  );
};

export default LoginSignupModal;

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  />
</svg>;
