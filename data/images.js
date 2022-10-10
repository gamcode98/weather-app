const { url } = require("../config");

const images = [
  {
    day: {
      originalname: "mainly-clear-day.png",
      path: `${url}/uploads/mainly-clear-day.png`,
    },
    night: {
      originalname: "mainly-clear-night.png",
      path: `${url}/uploads/mainly-clear-night.png`,
    },
    code: 1,
    description: ["Mainly clear", "Principalmente despejado"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "partly-cloudy-day.png",
      path: `${url}/uploads/partly-cloudy-day.png`,
    },
    night: {
      originalname: "partly-cloudy-night.png",
      path: `${url}/uploads/partly-cloudy-night.png`,
    },
    code: 2,
    description: ["Partly cloudy", "Parcialmente nublado"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "overcast.png",
      path: `${url}/uploads/overcast.png`,
    },
    night: {
      originalname: "overcast.png",
      path: `${url}/uploads/overcast.png`,
    },
    code: 3,
    description: ["Overcast", "Nublado"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "fog.png",
      path: `${url}/uploads/fog.png`,
    },
    night: {
      originalname: "fog.png",
      path: `${url}/uploads/fog.png`,
    },
    code: 45,
    description: ["Fog", "Niebla"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "drizzle-light-day.png",
      path: `${url}/uploads/drizzle-light-day.png`,
    },
    night: {
      originalname: "drizzle-light-night.png",
      path: `${url}/uploads/drizzle-light-night.png`,
    },
    code: 51,
    description: ["Drizzle light", "Llovizna ligera"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "drizzle-moderate-day.png",
      path: `${url}/uploads/drizzle-moderate-day.png`,
    },
    night: {
      originalname: "drizzle-moderate-night.png",
      path: `${url}/uploads/drizzle-moderate-night.png`,
    },
    code: 53,
    description: ["Drizzle moderate", "Llovizna moderada"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "drizzle-dense-intensity.png",
      path: `${url}/uploads/drizzle-dense-intensity.png`,
    },
    night: {
      originalname: "drizzle-dense-intensity.png",
      path: `${url}/uploads/drizzle-dense-intensity.png`,
    },
    code: 55,
    description: ["Drizzle dense intensity", "Llovizna intensidad densa"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "freezing-drizzle-light.png",
      path: `${url}/uploads/freezing-drizzle-light.png`,
    },
    night: {
      originalname: "freezing-drizzle-light.png",
      path: `${url}/uploads/freezing-drizzle-light.png`,
    },
    code: 56,
    description: ["Freezing drizzle light", "Llovizna helada ligera"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "freezing-drizzle-dense-intensity.png",
      path: `${url}/uploads/freezing-drizzle-dense-intensity.png`,
    },
    night: {
      originalname: "freezing-drizzle-dense-intensity.png",
      path: `${url}/uploads/freezing-drizzle-dense-intensity.png`,
    },
    code: 57,
    description: [
      "Freezing drizzle dense intensity",
      "Llovizna helada intensidad densa",
    ],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-slight-day.png",
      path: `${url}/uploads/rain-slight-day.png`,
    },
    night: {
      originalname: "rain-slight-night.png",
      path: `${url}/uploads/rain-slight-night.png`,
    },
    code: 61,
    description: ["Rain slight", "Poca lluvia"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-moderate-day.png",
      path: `${url}/uploads/rain-moderate-day.png`,
    },
    night: {
      originalname: "rain-moderate-night.png",
      path: `${url}/uploads/rain-moderate-night.png`,
    },
    code: 63,
    description: ["Rain moderate", "Lluvia moderada"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-heavy-intensity-day.png",
      path: `${url}/uploads/rain-heavy-intensity-day.png`,
    },
    night: {
      originalname: "rain-heavy-intensity-night.png",
      path: `${url}/uploads/rain-heavy-intensity-night.png`,
    },
    code: 65,
    description: ["Rain heavy intensity", "Lluvia fuerte"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "freezing-rain-light.png",
      path: `${url}/uploads/freezing-rain-light.png`,
    },
    night: {
      originalname: "freezing-rain-light.png",
      path: `${url}/uploads/freezing-rain-light.png`,
    },
    code: 66,
    description: ["Freezing rain light", "Lluvia helada ligera"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "freezing-rain-heavy-intensity.png",
      path: `${url}/uploads/freezing-rain-heavy-intensity.png`,
    },
    night: {
      originalname: "freezing-rain-heavy-intensity.png",
      path: `${url}/uploads/freezing-rain-heavy-intensity.png`,
    },
    code: 67,
    description: ["Freezing rain heavy intensity", "Lluvia helada fuerte"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-fall-slight-day.png",
      path: `${url}/uploads/snow-fall-slight-day.png`,
    },
    night: {
      originalname: "snow-fall-slight-night.png",
      path: `${url}/uploads/snow-fall-slight-night.png`,
    },
    code: 71,
    description: ["Snow fall slight", "Caida de nieve ligera"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-fall-moderate.png",
      path: `${url}/uploads/snow-fall-moderate.png`,
    },
    night: {
      originalname: "snow-fall-moderate.png",
      path: `${url}/uploads/snow-fall-moderate.png`,
    },
    code: 73,
    description: ["Snow fall moderate", "Caida de nieve moderada"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-fall-heavy-intensity-day.png",
      path: `${url}/uploads/snow-fall-heavy-intensity-day.png`,
    },
    night: {
      originalname: "snow-fall-heavy-intensity-night.png",
      path: `${url}/uploads/snow-fall-heavy-intensity-night.png`,
    },
    code: 75,
    description: ["Snow fall heavy intensity", "Caida de nieve fuerte"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-grains.png",
      path: `${url}/uploads/snow-grains.png`,
    },
    night: {
      originalname: "snow-grains.png",
      path: `${url}/uploads/snow-grains.png`,
    },
    code: 77,
    description: ["Snow grains", "Granos de nieve"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-showers-slight-day.png",
      path: `${url}/uploads/rain-showers-slight-day.png`,
    },
    night: {
      originalname: "rain-showers-slight-night.png",
      path: `${url}/uploads/rain-showers-slight-night.png`,
    },
    code: 80,
    description: ["Rain showers slight", "Lluvia leve"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-moderate-day.png",
      path: `${url}/uploads/rain-moderate-day.png`,
    },
    night: {
      originalname: "rain-moderate-night.png",
      path: `${url}/uploads/rain-moderate-night.png`,
    },
    code: 81,
    description: ["Rain showers moderate", "Lluvia moderada"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "rain-showers-violent.png",
      path: `${url}/uploads/rain-showers-violent.png`,
    },
    night: {
      originalname: "rain-showers-violent.png",
      path: `${url}/uploads/rain-showers-violent.png`,
    },
    code: 82,
    description: ["Rain showers violent", "Lluvia violenta"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-showers-slight.png",
      path: `${url}/uploads/snow-showers-slight.png`,
    },
    night: {
      originalname: "snow-showers-slight.png",
      path: `${url}/uploads/snow-showers-slight.png`,
    },
    code: 85,
    description: ["Snow showers slight", "Chabuscos de nieve leves"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "snow-showers-heavy.png",
      path: `${url}/uploads/snow-showers-heavy.png`,
    },
    night: {
      originalname: "snow-showers-heavy.png",
      path: `${url}/uploads/snow-showers-heavy.png`,
    },
    code: 86,
    description: ["Snow showers heavy", "Chabuscos de nieve fuertes"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "thunderstorm-slight-day.png",
      path: `${url}/uploads/thunderstorm-slight-day.png`,
    },
    night: {
      originalname: "thunderstorm-slight-night.png",
      path: `${url}/uploads/thunderstorm-slight-night.png`,
    },
    code: 95,
    description: ["Thunderstorm slight", "Tormenta ligera"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "thunderstorm-with-slight.png",
      path: `${url}/uploads/thunderstorm-with-slight.png`,
    },
    night: {
      originalname: "thunderstorm-with-slight.png",
      path: `${url}/uploads/thunderstorm-with-slight.png`,
    },
    code: 96,
    description: ["Thunderstorm \n with slight", "Tormenta con granizo leve"],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "thunderstorm-with-slight-and-heavy-hail.png",
      path: `${url}/uploads/thunderstorm-with-slight-and-heavy-hail.png`,
    },
    night: {
      originalname: "thunderstorm-with-slight-and-heavy-hail.png",
      path: `${url}/uploads/thunderstorm-with-slight-and-heavy-hail.png`,
    },
    code: 99,
    description: [
      "Thunderstorm \n with heavy hail",
      "Tormenta con granizo  fuerte",
    ],
    created_at: Date.now(),
  },
  {
    day: {
      originalname: "clear-sky-day.png",
      path: `${url}/uploads/clear-sky-day.png`,
    },
    night: {
      originalname: "clear-sky-night.png",
      path: `${url}/uploads/clear-sky-night.png`,
    },
    code: 0,
    description: ["Clear sky", "Despejado"],
    created_at: Date.now(),
  },
];

module.exports = images;
