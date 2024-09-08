import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import { DefaultLayout } from '@/layouts';
import { createTask } from '@/apiCalls';

const TaskCreate = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [name, setName] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [taskId, setTaskId] = useState<string | null>(null);
  const router = useRouter();
  const [error, setError] = useState('');

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);

        if (name && acceptedFiles[0]) {
          setIsUploading(true);

          const formData = new FormData();
          formData.append('file', acceptedFiles[0]);
          formData.append('title', name);

          try {
            const result = await createTask(formData);
            setTaskId(result.id);
            router.push(`/task/${result.id}`);
          } catch (error) {
            console.error('Error during task submission:', error);
          } finally {
            setIsUploading(false);
          }
        }
      }
    },
    [name, router],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleBlur = () => {
    if (name.trim()) {
      setIsInputVisible(false);
    }
  };

  return (
    <DefaultLayout>
      {isInputVisible ? (
        <div className="max-w-md mx-auto mt-6">
          <label
            className="block text-lg font-medium text-gray-700 mb-2"
            htmlFor="task-name"
          >
            Enter task name to continue
          </label>
          <input
            id="task-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={handleBlur}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter task name"
          />
        </div>
      ) : !isUploading ? (
        <div>
          {file ? (
            <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="mt-8 text-xl font-bold text-gray-900">
                    File uploaded
                  </p>
                  <p className="mt-3 text-base font-medium text-gray-600">
                    File name: {file.name}
                  </p>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => router.push(`/task/${taskId}`)}
                      className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      Go to task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-xl font-bold">Drop files here...</p>
              ) : (
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                      <svg
                        className="mx-auto w-14 h-14 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                        />
                      </svg>
                      <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Drag and drop
                      </h2>
                      <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        The estimated processing time is approximately 3 minutes
                      </p>
                    </div>
                    <p className="mt-6 text-base text-center text-gray-600">
                      Files are accepted in .zip, .bash, .php formats
                    </p>
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
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
                Uploading files
              </p>
              <p className="mt-3 text-base font-medium text-gray-600">
                Once the file upload is complete, you can leave the window, and
                the result will appear in the task.
              </p>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default TaskCreate;
