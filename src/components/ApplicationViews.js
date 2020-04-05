import { Route } from "react-router-dom";
import React from "react";
import Box from "./Box";
import Events from "./Events";

//James:
//"/" is considered the homepage where Box.js displays.
//"/events" are where the events are displayed and are in need of a
//CSS touch up.

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