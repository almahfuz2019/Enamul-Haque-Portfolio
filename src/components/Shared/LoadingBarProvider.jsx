import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import TopLoadingBar from "react-top-loading-bar";

const LoadingBarProvider = ({ children }) => {
  const ref = useRef(null); // Ref to hold reference to the TopLoadingBar component
  const location = useLocation(); // Hook from react-router-dom to get current location
  const navigationType = useNavigationType(); // Custom hook to get navigation type

  // Effect to start continuous loading bar when navigation type is not "POP"
  React.useEffect(() => {
    if (navigationType !== "POP") {
      ref.current.continuousStart();
    }
  }, [location, navigationType]);

  // Effect to complete loading bar on location change
  React.useEffect(() => {
    ref.current.complete();
  }, [location]);

  return (
    <>
      {/* TopLoadingBar component with custom color and using ref for control */}
      <TopLoadingBar color="#ff7836" ref={ref} />
      {children} {/* Render children components */}
    </>
  );
};

// PropTypes validation for LoadingBarProvider component
LoadingBarProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid React node
};

export default LoadingBarProvider;
