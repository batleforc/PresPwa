export interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const getStored = () => {
  var cat = localStorage.getItem("cat");
  if (cat !== null) return JSON.parse(cat) as ICat[];
  else return [] as ICat[];
};

export const addToStore = (cat: ICat[]) => {
  var storedCat: ICat[] = getStored().concat(cat);
  if (storedCat.length > 50)
    storedCat.slice(Math.max(storedCat.length - 50, 0));
  localStorage.setItem("cat", JSON.stringify(storedCat));
};
