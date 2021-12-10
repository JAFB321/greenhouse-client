import axios from "axios";


export const getPlant = async (plantID, token) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/plant/${plantID}`,
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

  export const getPlants = async (token) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/plant`,
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
   