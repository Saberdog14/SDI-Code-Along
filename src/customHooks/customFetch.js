import { useEffect, useState } from "react";

function customFetch(option) {
  let url = "";
  if (option === "characters") {
    url = `https://dragonball-api.com/api/characters`;
  } else {
    url = `https://dragonball-api.com/api/planets`;
  }
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setItems(json.items));
  }, []);
  return items;
}

export default customFetch;
