import axios from "axios";


export const getZones = async (token) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/zone`,
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


export const deleteAlertParameters = async (zoneID, alertParameterID, token) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/zone/${zoneID}/parameters/${alertParameterID}`,
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
}

export const addAlertParameters = async (zoneID, data, token) => {
  try {
    // console.log(data);
    // return{ error:true}
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/zone/${zoneID}/parameters`,
      data,
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
}