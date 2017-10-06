import React from "react";

<<<<<<< HEAD
// This Container component allows us to use a bootstrap container without worrying about class names
=======
>>>>>>> d6a044456dc779596855daa619582558979851fc
export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
