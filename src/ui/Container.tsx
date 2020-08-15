import React, { PropsWithChildren } from "react";

interface containerProps {
  className: string;
}

export const Container = (props: PropsWithChildren<containerProps>) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};
