import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import TopLoadingBar from "react-top-loading-bar";
const LoadingBarProvider = ({ children }) => {
  const ref = useRef(null);
  const location = useLocation();
  const navigationType = useNavigationType();
  React.useEffect(() => {
    if (navigationType !== "POP") {
      ref.current.continuousStart();
    }
  }, [location]);
  React.useEffect(() => {
    ref.current.complete();
  }, [location]);

  return (
    <>
      <TopLoadingBar color="#ff7836" ref={ref} />
      {children}
    </>
  );
};
LoadingBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LoadingBarProvider;
