import React, { FC } from "react";

interface KeyProps {
  value: string;
}

const Key: FC<KeyProps> = ({ value }) => {
  return <div>Key {value}</div>;
};

export default Key;
