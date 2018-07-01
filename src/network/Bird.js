import BirdResponse from "./BirdAreaResponse";

const api = {
  HOST: "api.birdapp.com",
  PROTOCOL: "https"
};

export default class Bird {
  static endpoints = {
    areaNearby: "/area/nearby",
    birdNearby: "/bird/nearby"
  };
  static exampleResponses = [BirdResponse];

  static getConfiguredPath(method, options) {
    const path = Bird.endpoints[method];
    return Bird.getURL(path, options.query);
  }

  static getURL(path, query) {
    let constructedQuery = "";
    if (query) {
      let separator = "?";
      for (const key in query) {
        constructedQuery += `${separator}${key}=${query[key]}`;
        separator = "&";
      }
    }
    return `${api.PROTOCOL}://${api.HOST}${path}${constructedQuery}`;
  }
  static callAPI(method, options) {
    const url = Bird.getConfiguredPath(method, options);
    console.info("Calling fetch", url);
    return fetch(url, {
      method: "GET",

      headers: {
        //   ":authority": "api.birdapp.com",
        location:
          '{"latitude":34.008338,"heading":134.296875,"speed":0.15000000596046448,"longitude":-118.481099,"altitude":1358.5433483123779,"accuracy":5}',
        cookie: "__cfduid=d69aa196f6fe73d123d00102c9c5d819a1530241849",
        // 'user-agent': 'Bird/3.3.0 (co.bird.Ride; build:8; iOS 11.4.0) Alamofire/4.7.2',
        "device-name": "Charles",
        "carrier-name": "Verizon",
        "connection-type": "Wifi",
        "device-id": "BEC888BB-A606-45E9-890C-9C62D1208AB8",
        radio: "CTRadioAccessTechnologyLTE",
        platform: "ios",
        authorization:
          "Bird eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBVVRIIiwidXNlcl9pZCI6Ijg2ZDZmZjhlLTYyODMtNDU3ZC05NzAyLWZmMzIyZWM1Y2IyNyIsImRldmljZV9pZCI6IkJFQzg4OEJCLUE2MDYtNDVFOS04OTBDLTlDNjJEMTIwOEFCOCIsImV4cCI6MTU2MTkyNDE3MH0.K-IRdnkp7qWLgaXBwelTs2jF2RYD91_tPPaBqryhKK0",
        "accept-language": "en-US;q=1.0",
        "device-model": "iPhone X",
        "battery-level": "0.52",
        timezone: "America/Denver",
        "client-time": `${new Date().toISOString().slice(0, -5)}Z`, // "2018-06-30T23:27:56Z",
        accept: "*/*",
        "accept-encoding": "gzip;q=1.0, compress;q=0.5",
        "app-version": "3.3.0",
        "os-version": "11.4",
        "x-newrelic-id": "VQEBUl9aCBABUFRQAgQHVVQ="
      }

      // credentials: 'same-origin', // send cookies
      // credentials: 'include',     // send cookies, even in CORS
    })
      .then(response => response.json())
      .then(response => ({
        method,
        response,
        url
      }))
      .catch(console.error);
  }
}
