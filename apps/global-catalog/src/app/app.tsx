import React, { useEffect, useState } from 'react';
import { Message } from '@vmware/api-interfaces';

import { CdsButton } from '@cds/react/button';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { CdsIcon } from '@cds/react/icon';

ClarityIcons.addIcons(userIcon);

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
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

      <div cds-layout="horizontal gap:sm">
        <CdsButton>solid</CdsButton>
        <CdsButton action="outline">outline</CdsButton>
        <CdsButton action="flat">flat</CdsButton>
        <CdsButton action="flat-inline">flat-inline</CdsButton>
      </div>
      <div>
        <CdsIcon shape="user"></CdsIcon>
      </div>
      <div>{m.message}</div>
    </div>
  );
};

export default App;
