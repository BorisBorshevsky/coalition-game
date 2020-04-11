import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import InputLabel from "@material-ui/core/InputLabel";
import NotchedOutline from "@material-ui/core/OutlinedInput/NotchedOutline";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    content: {
      padding: "18.5px 14px",
    },
    inputLabel: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 24px) scale(1)",
    },
  })
);

interface LabelledOutlineProps {
  id?: string;
  label: string;
  className?: string;
}

export const LabelledOutline = (
  props: PropsWithChildren<LabelledOutlineProps>
) => {
  const { id, label, className, children } = props;

  const classes = useStyles();

  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);

  React.useEffect(() => {
    const labelNode: HTMLElement = ReactDOM.findDOMNode(
      labelRef.current
    ) as HTMLElement;
    // @ts-ignore
    setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0);
  }, [label]);

  return (
    <div style={{ position: "relative", marginTop: "8px" }}>
      <InputLabel
        ref={labelRef}
        htmlFor={id}
        variant="outlined"
        className={classes.inputLabel}
        shrink
      >
        {label}
      </InputLabel>
      <div className={classes.root}>
        <div id={id} className={clsx(classes.content, className)}>
          {children}
          <NotchedOutline notched labelWidth={labelWidth} />
        </div>
      </div>
    </div>
  );
};
