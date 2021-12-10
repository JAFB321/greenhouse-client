import axios from "axios";


export const getReadingType = async (readingTypeID, token) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/readingType/${readingTypeID}`,
        {
          headers: {
            "access-control-allow-origin": "http://localhost:3000",
            token
          },
        }
      );

      return res.data;
    } catch (error) {
      return { error}
    }
  };


export const getReadingTypes = async (token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/readingType`,
      {
        headers: {
          "access-control-allow-origin": "http://localhost:3000",
          token
        },
      }
    );

    return res.data;
  } catch (error) {
    return { error}
  }
};