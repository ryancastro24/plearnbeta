// components/FileList.js
import Link from 'next/link';

const FileDownload = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file}>
          <Link href={`/api/download?filename=${file}`}>
            <span>{file}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FileDownload;
