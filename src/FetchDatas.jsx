export const FetchDatas = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Fetching issue");
    }
    const data = await res.json();
    console.log(data.products)
    return data.products;
  } catch (err) {
    console.log("something went wrong");
    throw err;
  }
};
