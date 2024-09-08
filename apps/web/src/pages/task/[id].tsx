import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { DefaultLayout } from '@/layouts';
import { Loading } from '@/components/ui/Loading';

const TaskDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [taskData, setTaskData] = useState(null);
  const [inputFile, setInputFile] = useState();
  const [resultFile, setResultFile] = useState(null);
  const [fade, setFade] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/task/${id}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch task details');
        }
        const data = await response.json();
        setTaskData(data);
        setResultFile(data.resultFile || null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchTaskDetails();
    }
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Task Details</h1>
          <p className="mt-2 text-lg text-gray-600">#{id}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-base font-medium text-gray-500">Gas price</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {taskData.gasPrice || '0.0005'} ETH
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-base font-medium text-gray-500">Used</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {taskData.cpu || '4 CPU 4GB RAM'}
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-base font-medium text-gray-500">Memory</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {taskData.memory || '16GB'}
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-base font-medium text-gray-500">Network</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {taskData.network || '1 Gbps'}
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-base font-medium text-gray-500">Disk</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {taskData.disk || '500GB SSD'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          <div>
            <div className="max-w-xs mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-xl shadow-gray-500/10">
              <div className="p-4">
                <p className="text-center font-medium text-gray-800 mb-2">
                  {taskData.inputFile || 'advance_equations.sh'}
                </p>
                <div className="flex justify-center items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    x
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
                  </svg>
                </div>

                <div className="flex items-center justify-between mt-4 space-x-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="max-w-xs mx-auto overflow-hidden bg-white border border-gray-100 rounded-lg shadow-xl shadow-gray-500/10">
              <div className="p-4">
                <p className="text-center font-medium text-gray-800 mb-2">
                  {resultFile === null
                    ? 'File is not available yet'
                    : 'result.sh'}
                </p>
                <div className="flex justify-center items-center mt-4">
                  {resultFile === null ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="128"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-gray-400 transition-opacity duration-500 ${fade ? 'opacity-50' : 'opacity-100'}`}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 3l18 18" />
                      <path d="M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="128"
                      height="128"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M9 15l2 2l4 -4" />
                    </svg>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4 space-x-4">
                  <button
                    type="button"
                    disabled={resultFile === null}
                    className={`inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 border rounded-lg focus:outline-none ${
                      resultFile === null
                        ? 'text-gray-400 bg-gray-200 border-gray-300 cursor-not-allowed'
                        : 'text-gray-900 bg-transparent border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white'
                    }`}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    disabled={resultFile === null}
                    className={`inline-flex items-center justify-center w-full px-4 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-lg focus:outline-none ${
                      resultFile === null
                        ? 'text-gray-400 bg-gray-200 border-gray-300 cursor-not-allowed'
                        : 'text-white bg-gray-900 hover:bg-gray-700'
                    }`}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TaskDetails.getLayout = function (page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default TaskDetails;
