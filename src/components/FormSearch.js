import React from 'react';

const FormSearch = () => {
  return (
    <form className="w-80 md:w-[60%] flex">
        <div className="mb-6 w-full flex flex-wrap">
          <div className="w-full flex space-x-2">
            <input
              type="email"
              id="email"
              className="bg-black border border-gray-red active:border-none text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="Spiderman No Way Home"
              required
              autoComplete="off"
            />
            <button type="submit" className="text-white transition-all active:ring-white active:ring-1 font-medium rounded-lg text-sm p-3 sm:w-auto text-center ">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7917 12.1667H12.9358L12.6325 11.8742C13.6942 10.6392 14.3333 9.03583 14.3333 7.29167C14.3333 3.4025 11.1808 0.25 7.29167 0.25C3.4025 0.25 0.25 3.4025 0.25 7.29167C0.25 11.1808 3.4025 14.3333 7.29167 14.3333C9.03583 14.3333 10.6392 13.6942 11.8742 12.6325L12.1667 12.9358V13.7917L17.5833 19.1975L19.1975 17.5833L13.7917 12.1667V12.1667ZM7.29167 12.1667C4.59417 12.1667 2.41667 9.98917 2.41667 7.29167C2.41667 4.59417 4.59417 2.41667 7.29167 2.41667C9.98917 2.41667 12.1667 4.59417 12.1667 7.29167C12.1667 9.98917 9.98917 12.1667 7.29167 12.1667Z" fill="#5E565A"/>
              </svg>  
            </button>
          </div>
        </div>
      </form>
  );
};

export default FormSearch;
