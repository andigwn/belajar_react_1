// parent component
import React, { useEffect, useState } from "react";
import Testing from "./components/testing";

const App = () => {
  const [getLimit, setLimit] = useState(0);
  const [getMyName, setMyName] = useState('Andi');

  useEffect(() => {
    console.log('render ketika browser di buka');
  }, [])
  return (
    <>
      <center>
        {getLimit} <br />
        <button onClick={() => setLimit((prev) => prev + 1)}>tambah</button>
        <br />
        {getLimit > 0 && <button onClick={() => setLimit(0)}>reset</button>}
        {getLimit > 0 && <button onClick={() => setLimit((prev) => prev - 1)}>kurang</button>}
      </center>
      <Testing />
    </>
  )
}
export default App;
