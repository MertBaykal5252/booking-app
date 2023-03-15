const Configuration = {
  api: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

const Urls = {
  getSession: Configuration.api + "/client/getsession",
  getBusLocations: Configuration.api + "/location/getbuslocations",
  getJourneys: Configuration.api + "/journey/getbusjourneys",
};

export const fetchSession = async () => {
  const request = await fetch(Urls.getSession, {
    method: "POST",
    mode: "no-cors",
    headers: Configuration.headers,
    body: {
      type: 7,
      connection: {
        "ip-address": "88.227.56.225",
        port: "5117",
      },
      browser: {
        name: "Chrome",
        version: "111.0.5563.64",
      },
    },
  });
  console.log(request.json());
  const response = await request.json();
  return response || "";
};

export const fetchLocations = async (query = "") => {
  const request = await fetch(Urls.getBusLocations, {
    method: "POST",
    mode: "no-cors",
    headers: Configuration.headers,
    body: JSON.stringify({
      data: null,
      "device-session": {
        "session-id": "PqtdftjloK3Kpka97+ILDzMa6D9740nggLiTzXiLlzA=",
        "device-id": "PqtdftjloK3Kpka97+ILDzMa6D9740nggLiTzXiLlzA=",
      },
      date: "2016-03-11T11:33:00",
      language: "tr-TR",
    }),
  });
  const response = await request?.json();
  return response;
};
