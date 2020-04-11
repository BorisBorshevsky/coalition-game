import { Typography } from "@material-ui/core";
import React from "react";
import Link from "@material-ui/core/Link";

export const MadeWithLove = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with "}
      <span role="img" aria-label="Love">
        ❤️
      </span>{" "}
      {" by "}
      <Link color="inherit" href="https://www.google.com/">
        Barak Aharoni
      </Link>
      {" and "}
      <Link color="inherit" href="https://www.google.com/">
        Boris Borshevsky
      </Link>
      {"."}
    </Typography>
  );
};
