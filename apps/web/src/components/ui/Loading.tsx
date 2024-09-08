export const Loading = () => {
  return (
    <div className="grid px-4 py-24 sm:px-6 lg:px-8 place-items-center">
      <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
        <div className="absolute top-0 right-0 pt-3 pr-3"></div>

        <div className="p-8">
          <div className="text-center">
            <svg
              className="w-10 h-10 mx-auto text-gray-900 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <p className="mt-8 text-xl font-bold text-gray-900">
              App is loading...
            </p>
            <p className="mt-3 text-base font-medium text-gray-600">
              Please wait
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
