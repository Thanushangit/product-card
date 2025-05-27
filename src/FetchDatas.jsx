export const FetchDatas = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Fetching issue");
    }
    const data = await res.json();
   
    return data.products;
  } catch (err) {
    console.log("something went wrong");
    throw err;
  }
};





export const SingleFetchData = async ({params}) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    if (!res.ok) {
      throw new Error("the product not found...");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("something went wrong");
    throw err;
  }
};
