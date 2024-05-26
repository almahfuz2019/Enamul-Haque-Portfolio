// src/components/LoadingBarProvider.js
import React, { useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import TopLoadingBar from "react-top-loading-bar";

const LoadingBarProvider = ({ children }) => {
  const ref = useRef(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  React.useEffect(() => {
    // Start the loading bar when navigating
    if (navigationType !== "POP") {
      ref.current.continuousStart();
    }
  }, [location]);

  React.useEffect(() => {
    // Complete the loading bar when location changes
    ref.current.complete();
  }, [location]);

  return (
    <>
      <TopLoadingBar color="#ff7836" ref={ref} />
      {children}
    </>
  );
};

export default LoadingBarProvider;
