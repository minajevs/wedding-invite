const baseConfig = {
  weddingTitle: "Свадьба Димы и Эвы",
  weddingDay: "Четверг",
  weddingTime: "15:00 - 23:00",
  weddingTimeStart: "Сбор гостей в 14:00",
  weddingDate: "13 октября 2022",
  calendarInfo: {
    timeStartISO: "2020-02-22T19:00:00+08:00",
    timeEndISO: "2020-02-22T21:00:00+08:00",
  },
  coupleName: "Дмитрий и Эва",
  venue: {
    name: "Annas koku skola",
    addressLine1: "Klīves",
    addressLine2: "",
    city: "Babītes pagasts",
    country: "Latvija",
    mapUrl: "https://goo.gl/maps/qkNSzFbPeiXc2Gms5",
  },
  logo: {
    headerLogo: "/assets/images/logo.png",
    footerLogo: "/assets/images/logo.png",
  },
  ogTags: {
    logo: "/assets/images/logo.png",
    siteName: "13oktobris.lv",
    publishedTime: "2022-09-15",
  },
}

const lang = {
  lv: {
    weddingTitle: "Dmitrija un Evas kāzas",
    coupleName: "Dmitrijs un Eva",
    weddingDay: "Ceturtdien",
    weddingDate: "2022. gada 13. oktobrī",
    weddingTimeStart: "Viesus gaidām sakot no 14:00",
  },
}

export default {
  ...baseConfig,
  lang,
}
