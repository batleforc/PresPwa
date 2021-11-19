import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ICat, getStored, addToStore } from "../../helper/catHandler";
import Item from "./item";

const IndexCat = ({ howMuch }: { howMuch: number }) => {
  const [cats, setCats] = useState<ICat[]>([]);
  useEffect(() => {
    Axios.get("https://api.thecatapi.com/v1/images/search", {
      params: {
        limit: howMuch,
      },
    })
      .then((value) => {
        console.log(value);
        addToStore(value.data);
        return value.data;
      })
      .catch(() => {
        return getStored();
      })
      .then((value) => {
        setCats(value);
      });
  }, [howMuch]);

  return (
    <>
      {cats.map((cat) => (
        <Item key={cat.id} catToDisplay={cat} />
      ))}
    </>
  );
};

export default IndexCat;
