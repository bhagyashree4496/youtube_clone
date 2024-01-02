import React, { useContext } from "react";
import { Context } from "../context/apiContext";
import PropagateLoader from "react-spinners/PropagateLoader";
function Loading() {
  const { loading } = useContext(Context);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <PropagateLoader color="#fa1c05" loading={loading} />
    </div>
  );
}

export default Loading;
