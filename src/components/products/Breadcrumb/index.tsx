interface Props {
  gender: string;
  type: string;
}

const Breadcrumb = ({ gender, type }: Props) => {
  return (
    <nav className="w-full" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2 ">
        <li>
          <div className="flex items-center text-sm font-medium text-gray-900 capitalize">
            {gender}
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center font-medium text-gray-500 hover:text-gray-600 capitalize">
            {type}
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
