import axios from "axios";

export const fetchData = async () => {
  const url =
    "http://data.fixer.io/api/latest?access_key=0b04226c86c99d4d448299a0c8aa9012&format=1";
  try {
    const price = await axios.get(url);
    return price;
  } catch (error) {
    return error;
  }
};
