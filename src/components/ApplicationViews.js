import { Route } from "react-router-dom";
import React from "react";
import Box from "./Box";
import Events from "./Events";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Box />;
        }}
      />
      <Route
        path="/events"
        render={props => {
          return <Events />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;