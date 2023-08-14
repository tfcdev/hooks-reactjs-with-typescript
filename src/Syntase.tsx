import React from "react";

// Forma de tipagem
type TitleProps = {
  text: string;
};

interface ItitlePropsExt {
  size?: "small" | "large";
}

// Para children
// string, numberm, ...etc
// React.Reactnode quando passamos txs como children

const Title = ({ text, size }: TitleProps & ItitlePropsExt) => {
  return (
    <h1>
      {text} - {size}
    </h1>
  );
};

// Obtendo os tipos de um object

const user = {
  id: 1,
  name: "Talismar",
  age: 38,
  isAdmin: true,
};

type UserAttributes = typeof user;

Title.defaultProps = { size: "large" };
