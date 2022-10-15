import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import SnapshotHandler from '../components/SnapshotHandler';
import { ethers } from 'ethers';
import { Button } from '@mantine/core';

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

  const [textarea, setTextarea] = useState(
    '0xA4B7CEe8409673624EC9B075f5A4f9b8EbAdEd49,0x0a517a152D457Ed07a9103bB7589138bf39B0FbF,0xBA78CD28F7132958235D278fF3C5DC5E6d34cc15,0xf3476b36fc9942083049C04e9404516703369ef3,0xfA045B2F2A25ad0B7365010eaf9AC2Dd9905895c,0xf3476b36fc9942083049C04e9404516703369ef3,0x1fDcf949E139dB1EEfdC5D7A2787AF15a73c26B4,0xFdf2A7f1f0a2C06715473E97fdf6035bE5eb8E8A,0xd6F981Ff705021c1fb0864bfBE96BbF682ecb995,0x2A80B9B6F8D0D3ad0bbB286d7926a221fbb04549,0xeE0df573731355B210B6DFA2DbD821dbf3aA0044,0x49d5199959DD8897F133e303DA6B179bb1C592Ce,0x0cb27e883E207905AD2A94F9B6eF0C7A99223C37,0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F,0x8BCF3Bf85eD03628245b60Edc8ABfccCFE7722B6,0x3E2dAba02b8b09879ed9b517bF4603a3DD9C410F,0x490aD1B09D75D61A5eEa2C86d22A76791eEf0CeC,0xAB69eb3485C9f3E314faE75C162135b5768F65Ff,0x0B172a4E265AcF4c2E0aB238F63A44bf29bBd158,0x446c1888F1a56A9330573F876eb3d82fF7030f4B,0x563f14198222E757b8e448289f74406bCE1B82Cf,0xBcfD8dDAc6B8fe5144553B50790ca631b1760FB0'
  );
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [view, setView] = useState('');
  let finalAddress = addresses || [];
  if (!addresses.length && textarea) {
    const items = textarea.replaceAll(' ', '').split(',');
    finalAddress = items
      .map((addr) => {
        try {
          return ethers.utils.getAddress(addr);
        } catch (e) {
          return false;
        }
      })
      .filter(Boolean);
  }

  if (view === 'snapshot') {
    return <SnapshotHandler addresses={finalAddress} />;
  }

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{ border: '1px solid #CCC' }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div>Or paste addresses:</div>
      <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        rows={30}
        cols={100}
      ></textarea>

      {finalAddress.length && (
        <div>
          <div>{finalAddress.length} addresess found</div>
          <Button onClick={() => setView('snapshot')}>Generate snapshot</Button>
        </div>
      )}
    </section>
  );
};

export default SnapshotPage;
