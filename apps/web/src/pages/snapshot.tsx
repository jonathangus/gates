import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import SnapshotHandler from '../components/SnapshotHandler';

type Props = {};

const SnapshotPage = ({}: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'text/csv': ['.csv'],
    },
  });
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      Papa.parse(acceptedFiles[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const rowsArray = [];
          const valuesArray = [];

          // Iterating data to get column name and their values
          results.data.map((d) => {
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
          });

          setAddresses(results.data.map((d) => Object.values(d)[0]));
        },
      });
    }
  }, [acceptedFiles.length]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  if (addresses.length) {
    return <SnapshotHandler addresses={addresses} />;
  }

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default SnapshotPage;
