import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`w-full h-screen flex items-center justify-center border-4 border-dashed border-gray-300 p-4 ${
        isDragActive ? 'bg-gray-200' : 'bg-white'
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-xl font-bold">Upuść pliki tutaj...</p>
      ) : (
        <p className="text-xl">
          Przeciągnij pliki tutaj lub kliknij, aby wybrać
        </p>
      )}
    </div>
  );
};

export default DragAndDrop;
