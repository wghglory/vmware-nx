import React, { useEffect, useState } from 'react';
import { Message } from '@vmware/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div className="p-10 text-center">
        <h1 className="text-xl text-red-600 font-semibold">
          Welcome to global-catalog!
        </h1>
        <img
          width="450"
          className="inline-block"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
