import React from "react";

<<<<<<< HEAD
// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
=======
>>>>>>> d6a044456dc779596855daa619582558979851fc
export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;
