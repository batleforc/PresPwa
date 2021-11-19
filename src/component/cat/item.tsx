import React from "react";
import { ICat } from "../../helper/catHandler";

const Item = ({ catToDisplay }: { catToDisplay: ICat }) => {
  return <img src={catToDisplay.url} alt={catToDisplay.id} />;
};

export default Item;
