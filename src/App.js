import React, { useEffect, useState } from 'react';
import coinranking from './api/coinranking';

const App = () => {
  const [dataCoins, setDataCoins] = useState([]);

  useEffect(() => {
    coinranking
      .get('/coins')
      .then((res) => setDataCoins(res))
      .catch((e) => console.log(e));
  }, []);
  console.log(dataCoins);
  return (
    <>
      <div className="text-3xl text-red-500 font-bold underline">
        Hello World!
      </div>
    </>
  );
};

export default App;
