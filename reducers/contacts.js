import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      lastName: "Croft",
      firstName: "Pierre",
      emails: [{ emailType: "personnal", email: "Pierre@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0731577423",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 10,
        emailCounter: 13,
      },
    },
    {
      lastName: "Dumont",
      firstName: "Sharon",
      emails: [{ emailType: "personnal", email: "Sharon@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0719841066",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Basket", color: "#E5712F", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 11,
        emailCounter: 10,
      },
    },
    {
      lastName: "Vincent",
      firstName: "Ryan",
      emails: [{ emailType: "personnal", email: "Ryan@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0662908805",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "Cinéma", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 9,
        emailCounter: 13,
      },
    },
    {
      lastName: "Durden",
      firstName: "Josettte",
      emails: [{ emailType: "personnal", email: "DuJo@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0674339150",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 6,
        emailCounter: 5,
      },
    },
    {
      lastName: "Patulacci",
      firstName: "Rania",
      emails: [{ emailType: "personnal", email: "PaRa@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0671011450",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 17,
        emailCounter: 1,
      },
    },
    {
      lastName: "Papin",
      firstName: "Yasmine",
      emails: [{ emailType: "personnal", email: "Papin.Yasmine@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0675403942",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Randonnée", color: "#21AC14", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 4,
        emailCounter: 15,
      },
    },
    {
      lastName: "Poirot",
      firstName: "Penny",
      emails: [{ emailType: "personnal", email: "Poirot.Penny@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0602976022",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [{ title: "Famille", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 0,
        emailCounter: 12,
      },
    },
    {
      lastName: "Curry",
      firstName: "Ryan",
      emails: [{ emailType: "personnal", email: "CuRy@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0660796367",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Twitter", color: "#1DA1F3", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Rugby", color: "#21AC14", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 0,
        emailCounter: 14,
      },
    },
    {
      lastName: "Mbappé",
      firstName: "John",
      emails: [{ emailType: "personnal", email: "MbJo@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0626842326",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 15,
        emailCounter: 16,
      },
    },
    {
      lastName: "Green",
      firstName: "Jean-Pierre",
      emails: [{ emailType: "personnal", email: "GrJe@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0790782298",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [{ title: "Fac", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 13,
        emailCounter: 17,
      },
    },
    {
      lastName: "Cooper",
      firstName: "Noémie",
      emails: [{ emailType: "personnal", email: "Cooper.Noémie@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0647325315",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 0,
        emailCounter: 15,
      },
    },
    {
      lastName: "Mosby",
      firstName: "Dora",
      emails: [{ emailType: "personnal", email: "Mosby.Dora@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0608938117",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Twitter", color: "#1DA1F3", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 10,
        emailCounter: 7,
      },
    },
    {
      lastName: "Giroud",
      firstName: "Luc",
      emails: [{ emailType: "personnal", email: "GiLu@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0747186231",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Basket", color: "#E5712F", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 13,
        emailCounter: 17,
      },
    },
    {
      lastName: "Lebowski",
      firstName: "Dora",
      emails: [{ emailType: "personnal", email: "Lebowski.Dora@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0731237293",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.219Z",
      tags: [
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "Jeux", color: "#5A5A5F", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 8,
        emailCounter: 1,
      },
    },
    {
      lastName: "Papin",
      firstName: "Philippe",
      emails: [{ emailType: "personnal", email: "Philippe@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0695876303",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 4,
        emailCounter: 12,
      },
    },
    {
      lastName: "White",
      firstName: "Noémie",
      emails: [{ emailType: "personnal", email: "White.Noémie@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0608613180",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 7,
        emailCounter: 7,
      },
    },
    {
      lastName: "Vega",
      firstName: "Marion",
      emails: [{ emailType: "personnal", email: "Marion@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0746565943",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 7,
        emailCounter: 6,
      },
    },
    {
      lastName: "O Neil",
      firstName: "Rania",
      emails: [{ emailType: "personnal", email: "Rania@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0658459909",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Youtube", color: "#F60000", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 2,
        emailCounter: 10,
      },
    },
    {
      lastName: "Zidane",
      firstName: "Catherine",
      emails: [{ emailType: "personnal", email: "Catherine@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0649437443",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Discord", color: "#5562EA", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 5,
        emailCounter: 6,
      },
    },
    {
      lastName: "Curry",
      firstName: "Olivier",
      emails: [{ emailType: "personnal", email: "CuOl@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0655545754",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Tik Tok", color: "#000000", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 19,
        emailCounter: 14,
      },
    },
    {
      lastName: "Pitt",
      firstName: "Nicolas",
      emails: [{ emailType: "personnal", email: "PiNi@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0663276971",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Instagram", color: "#F7382F", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 11,
        emailCounter: 6,
      },
    },
    {
      lastName: "Curry",
      firstName: "Catherine",
      emails: [{ emailType: "personnal", email: "CuCa@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0666122701",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Collègues", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 0,
        emailCounter: 2,
      },
    },
    {
      lastName: "Martoni",
      firstName: "John",
      emails: [{ emailType: "personnal", email: "Martoni.John@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0701561967",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Basket", color: "#E5712F", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 3,
        emailCounter: 4,
      },
    },
    {
      lastName: "Söze",
      firstName: "Marcel",
      emails: [{ emailType: "personnal", email: "Söze.Marcel@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0695560793",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 13,
        emailCounter: 7,
      },
    },
    {
      lastName: "Bradbury",
      firstName: "Léa",
      emails: [{ emailType: "personnal", email: "Bradbury.Léa@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0797693183",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 13,
        emailCounter: 13,
      },
    },
    {
      lastName: "Rimbault",
      firstName: "Lucette",
      emails: [{ emailType: "personnal", email: "Lucette@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0639096537",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Discord", color: "#5562EA", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 14,
        emailCounter: 5,
      },
    },
    {
      lastName: "Defrasnes",
      firstName: "Mohamed",
      emails: [{ emailType: "personnal", email: "Defrasnes.Mohamed@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0663334012",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Collègues", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 15,
        emailCounter: 4,
      },
    },
    {
      lastName: "Mc Fly",
      firstName: "Thomas",
      emails: [{ emailType: "personnal", email: "Mc Fly.Thomas@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0623531643",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Discord", color: "#5562EA", border: "none" },
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 7,
        emailCounter: 2,
      },
    },
    {
      lastName: "Dupont",
      firstName: "Noomane",
      emails: [{ emailType: "personnal", email: "DuNo@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0709992078",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Lycée", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 17,
        emailCounter: 8,
      },
    },
    {
      lastName: "Papin",
      firstName: "Lucas",
      emails: [{ emailType: "personnal", email: "Lucas@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0623089485",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Randonnée", color: "#21AC14", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 18,
        emailCounter: 2,
      },
    },
    {
      lastName: "O Neil",
      firstName: "Paul",
      emails: [{ emailType: "personnal", email: "O Neil.Paul@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0680016568",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Facebook", color: "#1877F2", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 11,
        emailCounter: 12,
      },
    },
    {
      lastName: "Lecter",
      firstName: "John",
      emails: [{ emailType: "personnal", email: "LeJo@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0729822218",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 9,
        emailCounter: 3,
      },
    },
    {
      lastName: "Pitt",
      firstName: "Josettte",
      emails: [{ emailType: "personnal", email: "PiJo@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0608285469",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Facebook", color: "#1877F2", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 6,
        emailCounter: 1,
      },
    },
    {
      lastName: "White",
      firstName: "Olivier",
      emails: [{ emailType: "personnal", email: "WhOl@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0617129640",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Randonnée", color: "#21AC14", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 19,
        emailCounter: 13,
      },
    },
    {
      lastName: "Green",
      firstName: "Luc",
      emails: [{ emailType: "personnal", email: "Green.Luc@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0725573363",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 4,
        emailCounter: 7,
      },
    },
    {
      lastName: "Jeremie",
      firstName: "Odile",
      emails: [{ emailType: "personnal", email: "Jeremie.Odile@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0729006258",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Rugby", color: "#21AC14", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 0,
        emailCounter: 10,
      },
    },
    {
      lastName: "Dupond",
      firstName: "Thomas",
      emails: [{ emailType: "personnal", email: "Dupond.Thomas@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0629371884",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 15,
        emailCounter: 11,
      },
    },
    {
      lastName: "Orwell",
      firstName: "Nicolas",
      emails: [{ emailType: "personnal", email: "Nicolas@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0706160642",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Randonnée", color: "#21AC14", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 11,
        emailCounter: 8,
      },
    },
    {
      lastName: "Jordan",
      firstName: "Patrice",
      emails: [{ emailType: "personnal", email: "Jordan.Patrice@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0781211657",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 17,
        emailCounter: 17,
      },
    },
    {
      lastName: "Fourcade",
      firstName: "Noémie",
      emails: [{ emailType: "personnal", email: "Fourcade.Noémie@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0750898390",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 4,
        emailCounter: 2,
      },
    },
    {
      lastName: "Al-Khwarizmi",
      firstName: "Lucas",
      emails: [{ emailType: "personnal", email: "AlLu@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0640238920",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 19,
        emailCounter: 17,
      },
    },
    {
      lastName: "Asimov",
      firstName: "Gabin",
      emails: [{ emailType: "personnal", email: "Gabin@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0692240766",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 2,
        emailCounter: 16,
      },
    },
    {
      lastName: "Curry",
      firstName: "Patrice",
      emails: [{ emailType: "personnal", email: "Curry.Patrice@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0719993168",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Jeux", color: "#5A5A5F", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
        { title: "Cinéma", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 15,
        emailCounter: 9,
      },
    },
    {
      lastName: "Fermat",
      firstName: "Lucette",
      emails: [
        { emailType: "personnal", email: "Fermat.Lucette@caramail.com" },
      ],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0719607656",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Jeux", color: "#5A5A5F", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 19,
        emailCounter: 6,
      },
    },
    {
      lastName: "Dupont",
      firstName: "Gabin",
      emails: [{ emailType: "personnal", email: "Gabin@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0602871472",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Basket", color: "#E5712F", border: "none" },
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 6,
        emailCounter: 9,
      },
    },
    {
      lastName: "Deray",
      firstName: "Odile",
      emails: [{ emailType: "personnal", email: "DeOd@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0729137369",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Rugby", color: "#21AC14", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 17,
        emailCounter: 7,
      },
    },
    {
      lastName: "Cooper",
      firstName: "Marcel",
      emails: [{ emailType: "personnal", email: "CoMa@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0679044779",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 13,
        emailCounter: 4,
      },
    },
    {
      lastName: "Kenobi",
      firstName: "Dora",
      emails: [{ emailType: "personnal", email: "KeDo@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0756383770",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Jeux", color: "#5A5A5F", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 13,
        emailCounter: 19,
      },
    },
    {
      lastName: "Lebowski",
      firstName: "Gwenael",
      emails: [{ emailType: "personnal", email: "Lebowski.Gwenael@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0689353322",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Basket", color: "#E5712F", border: "none" },
        { title: "Randonnée", color: "#21AC14", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 1,
        emailCounter: 7,
      },
    },
    {
      lastName: "Durden",
      firstName: "Mohamed",
      emails: [{ emailType: "personnal", email: "Mohamed@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0734641575",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Discord", color: "#5562EA", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 11,
        emailCounter: 17,
      },
    },
    {
      lastName: "Curry",
      firstName: "Hélène",
      emails: [{ emailType: "personnal", email: "CuHé@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0710170131",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Fac", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 8,
        emailCounter: 10,
      },
    },
    {
      lastName: "Lecter",
      firstName: "Yasmine",
      emails: [{ emailType: "personnal", email: "Lecter.Yasmine@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0671302936",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Jeux", color: "#5A5A5F", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 16,
        emailCounter: 8,
      },
    },
    {
      lastName: "Dupont",
      firstName: "Hélène",
      emails: [{ emailType: "personnal", email: "DuHé@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0693056906",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 2,
        emailCounter: 0,
      },
    },
    {
      lastName: "Pythagore",
      firstName: "Bob",
      emails: [{ emailType: "personnal", email: "PyBo@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0684005039",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Basket", color: "#E5712F", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 11,
        emailCounter: 5,
      },
    },
    {
      lastName: "Brown",
      firstName: "Méwen",
      emails: [{ emailType: "personnal", email: "Méwen@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0668974630",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Facebook", color: "#1877F2", border: "none" },
        { title: "Basket", color: "#E5712F", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 15,
        emailCounter: 8,
      },
    },
    {
      lastName: "Biales",
      firstName: "Philippe",
      emails: [{ emailType: "personnal", email: "BiPh@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0684312657",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 16,
        emailCounter: 12,
      },
    },
    {
      lastName: "Rimbault",
      firstName: "Patrice",
      emails: [{ emailType: "personnal", email: "RiPa@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0683211788",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 15,
        emailCounter: 8,
      },
    },
    {
      lastName: "Jones",
      firstName: "Bob",
      emails: [{ emailType: "personnal", email: "JoBo@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0624318853",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 6,
        emailCounter: 12,
      },
    },
    {
      lastName: "Colucci",
      firstName: "Lucette",
      emails: [
        { emailType: "personnal", email: "Colucci.Lucette@hotmail.com" },
      ],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0661928996",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 8,
        emailCounter: 13,
      },
    },
    {
      lastName: "Mosby",
      firstName: "Thomas",
      emails: [{ emailType: "personnal", email: "Mosby.Thomas@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0692997794",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Lecture", color: "#FFFFFF", border: "#0031B8" }],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 7,
        emailCounter: 7,
      },
    },
    {
      lastName: "Asimov",
      firstName: "Youness",
      emails: [{ emailType: "personnal", email: "Youness@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0707189756",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Youtube", color: "#F60000", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 17,
        emailCounter: 17,
      },
    },
    {
      lastName: "Curry",
      firstName: "Dora",
      emails: [{ emailType: "personnal", email: "CuDo@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0600053460",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 11,
        emailCounter: 15,
      },
    },
    {
      lastName: "Mbappé",
      firstName: "Yvon",
      emails: [{ emailType: "personnal", email: "MbYv@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0731293750",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Jeux", color: "#5A5A5F", border: "none" },
        { title: "Discord", color: "#5562EA", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 9,
        emailCounter: 5,
      },
    },
    {
      lastName: "Chirac",
      firstName: "Penny",
      emails: [{ emailType: "personnal", email: "ChPe@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0656704049",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Jeux", color: "#5A5A5F", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 16,
        emailCounter: 11,
      },
    },
    {
      lastName: "Croft",
      firstName: "Mohamed",
      emails: [{ emailType: "personnal", email: "Mohamed@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0650470048",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 8,
        emailCounter: 1,
      },
    },
    {
      lastName: "Papin",
      firstName: "Yasmine",
      emails: [{ emailType: "personnal", email: "Yasmine@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0702876321",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Twitch", color: "#9147FF", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 13,
        emailCounter: 10,
      },
    },
    {
      lastName: "Lecter",
      firstName: "Jean-Pierre",
      emails: [{ emailType: "personnal", email: "LeJe@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0739828984",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Tennis", color: "#EDC808", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 7,
        emailCounter: 8,
      },
    },
    {
      lastName: "Chirac",
      firstName: "Thomas",
      emails: [{ emailType: "personnal", email: "Chirac.Thomas@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0755939760",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Randonnée", color: "#21AC14", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 0,
        emailCounter: 15,
      },
    },
    {
      lastName: "Karamasov",
      firstName: "Marcel",
      emails: [
        { emailType: "personnal", email: "Karamasov.Marcel@capsule.com" },
      ],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0795883858",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 6,
        emailCounter: 9,
      },
    },
    {
      lastName: "Söze",
      firstName: "Noomane",
      emails: [{ emailType: "personnal", email: "Noomane@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0627280928",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Twitch", color: "#9147FF", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 18,
        emailCounter: 3,
      },
    },
    {
      lastName: "Camus",
      firstName: "Nicolas",
      emails: [{ emailType: "personnal", email: "Nicolas@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0654072560",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Rugby", color: "#21AC14", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 12,
        emailCounter: 15,
      },
    },
    {
      lastName: "Kenobi",
      firstName: "Lucette",
      emails: [{ emailType: "personnal", email: "KeLu@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0612223664",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
        { title: "Amis", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 19,
        emailCounter: 12,
      },
    },
    {
      lastName: "Hugo",
      firstName: "Gabin",
      emails: [{ emailType: "personnal", email: "Hugo.Gabin@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0736297110",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
        { title: "Instagram", color: "#F7382F", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 12,
        emailCounter: 7,
      },
    },
    {
      lastName: "Papin",
      firstName: "Philippe",
      emails: [{ emailType: "personnal", email: "Philippe@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0631827430",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Tennis", color: "#EDC808", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 0,
        emailCounter: 1,
      },
    },
    {
      lastName: "Bradbury",
      firstName: "Serge",
      emails: [{ emailType: "personnal", email: "Serge@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0684881587",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "École", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 6,
        emailCounter: 16,
      },
    },
    {
      lastName: "Defrasnes",
      firstName: "Marion",
      emails: [{ emailType: "personnal", email: "Defrasnes.Marion@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0680976518",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 3,
        emailCounter: 18,
      },
    },
    {
      lastName: "Doe",
      firstName: "Paul",
      emails: [{ emailType: "personnal", email: "DoPa@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0745771704",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Twitch", color: "#9147FF", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 18,
        emailCounter: 1,
      },
    },
    {
      lastName: "Lennon",
      firstName: "Gabin",
      emails: [{ emailType: "personnal", email: "Gabin@capsule.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0625368845",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Collègues", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 18,
        emailCounter: 6,
      },
    },
    {
      lastName: "Vega",
      firstName: "Youness",
      emails: [{ emailType: "personnal", email: "Vega.Youness@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0620182286",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "Discord", color: "#5562EA", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 0,
        emailCounter: 1,
      },
    },
    {
      lastName: "Mbappé",
      firstName: "Luc",
      emails: [{ emailType: "personnal", email: "Luc@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0713787518",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 7,
        emailCounter: 9,
      },
    },
    {
      lastName: "Gump",
      firstName: "Penny",
      emails: [{ emailType: "personnal", email: "GuPe@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0761897644",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Tennis", color: "#EDC808", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 16,
        emailCounter: 5,
      },
    },
    {
      lastName: "Poirot",
      firstName: "Pierre",
      emails: [{ emailType: "personnal", email: "Pierre@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0709979695",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Discord", color: "#5562EA", border: "none" },
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Collègues", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 3,
        emailCounter: 15,
      },
    },
    {
      lastName: "Martoni",
      firstName: "Pierre",
      emails: [{ emailType: "personnal", email: "Pierre@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0759007692",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 19,
        emailCounter: 11,
      },
    },
    {
      lastName: "Karamasov",
      firstName: "Youness",
      emails: [{ emailType: "personnal", email: "Youness@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0660881006",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 2,
        emailCounter: 1,
      },
    },
    {
      lastName: "Biales",
      firstName: "Alexandre",
      emails: [{ emailType: "personnal", email: "Biales.Alexandre@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0782090100",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 2,
        emailCounter: 9,
      },
    },
    {
      lastName: "Colucci",
      firstName: "Odile",
      emails: [{ emailType: "personnal", email: "CoOd@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0762225812",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Lecture", color: "#FFFFFF", border: "#0031B8" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 11,
        emailCounter: 19,
      },
    },
    {
      lastName: "Pitt",
      firstName: "Josettte",
      emails: [{ emailType: "personnal", email: "PiJo@caramail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0720417115",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "Lecture", color: "#FFFFFF", border: "#0031B8" },
        { title: "École", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 1,
        emailCounter: 16,
      },
    },
    {
      lastName: "Green",
      firstName: "John",
      emails: [{ emailType: "personnal", email: "GrJo@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0654787025",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Collègues", color: "#0031B8", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 19,
        emailCounter: 12,
      },
    },
    {
      lastName: "Chirac",
      firstName: "Gabin",
      emails: [{ emailType: "personnal", email: "Gabin@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0637464971",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "Lycée", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 14,
        emailCounter: 16,
      },
    },
    {
      lastName: "Deray",
      firstName: "Bob",
      emails: [{ emailType: "personnal", email: "Bob@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0603120468",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Lecture", color: "#FFFFFF", border: "#0031B8" }],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 8,
        emailCounter: 5,
      },
    },
    {
      lastName: "Cooper",
      firstName: "Mohamed",
      emails: [{ emailType: "personnal", email: "Mohamed@capsule.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0741004011",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Rugby", color: "#21AC14", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Famille", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 16,
        emailCounter: 13,
      },
    },
    {
      lastName: "Marple",
      firstName: "Yvon",
      emails: [{ emailType: "personnal", email: "Yvon@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0700031679",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [{ title: "Tennis", color: "#EDC808", border: "none" }],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 10,
        emailCounter: 7,
      },
    },
    {
      lastName: "Lecter",
      firstName: "Serge",
      emails: [{ emailType: "personnal", email: "Serge@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0622189184",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Collègues", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 2,
        smsCounter: 6,
        emailCounter: 1,
      },
    },
    {
      lastName: "Patulacci",
      firstName: "Pierre",
      emails: [{ emailType: "personnal", email: "PaPi@orange.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0636799867",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 2,
        emailCounter: 14,
      },
    },
    {
      lastName: "Karamasov",
      firstName: "Etienne",
      emails: [{ emailType: "personnal", email: "Karamasov.Etienne@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0630898183",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Discord", color: "#5562EA", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
        { title: "Twitch", color: "#9147FF", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 5,
        emailCounter: 8,
      },
    },
    {
      lastName: "Wilde",
      firstName: "Patrice",
      emails: [{ emailType: "personnal", email: "Patrice@yahoo.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0628149660",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Amis", color: "#0031B8", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
        { title: "Facebook", color: "#1877F2", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 3,
        smsCounter: 12,
        emailCounter: 11,
      },
    },
    {
      lastName: "Dick",
      firstName: "Noémie",
      emails: [{ emailType: "personnal", email: "Noémie@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0740274723",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Collège", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 0,
        smsCounter: 3,
        emailCounter: 16,
      },
    },
    {
      lastName: "Papin",
      firstName: "Yannick",
      emails: [{ emailType: "personnal", email: "PaYa@hotmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0791665754",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Foot", color: "#21AC14", border: "none" },
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Youtube", color: "#F60000", border: "none" },
        { title: "Tik Tok", color: "#000000", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 1,
        smsCounter: 17,
        emailCounter: 14,
      },
    },
    {
      lastName: "Marple",
      firstName: "Yannick",
      emails: [{ emailType: "personnal", email: "MaYa@gmail.com" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0673392475",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Randonnée", color: "#21AC14", border: "none" },
        { title: "Basket", color: "#E5712F", border: "none" },
        { title: "Cinéma", color: "#000000", border: "none" },
        { title: "Twitter", color: "#1DA1F3", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 17,
        emailCounter: 0,
      },
    },
    {
      lastName: "Pitt",
      firstName: "Philippe",
      emails: [{ emailType: "personnal", email: "PiPh@sfr.fr" }],
      phones: [
        {
          phoneType: "perosnnal",
          number: "0731032180",
          country: "France",
          areaCode: "+33",
        },
      ],
      dob: "2022-12-22T21:21:12.220Z",
      tags: [
        { title: "Fac", color: "#0031B8", border: "none" },
        { title: "Instagram", color: "#F7382F", border: "none" },
        { title: "École", color: "#0031B8", border: "none" },
      ],
      contactedTimesCounter: {
        phoneCounter: 4,
        smsCounter: 12,
        emailCounter: 1,
      },
    },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",

  initialState,
  reducers: {
    // addContact permet d'ajouter un contact dans ce reducer qui est un tableau représentant l'ensemble des contacts
    // action.payload sera un objet contact
    addContact: (state, action) => {
      state.value.push(action.payload);
      //console.log(action.payload)
    },
    // replaceAllTags permet de remplacer le tableau de tags à un contact :
    //action.payload doit être de la forme {indexContact : index_du_contact, tags: tableau_tags}
    setTags: (state, action) => {
      state.value[action.payload.indexContact].tags = action.payload.tags;
    },
    // addOneTag permet d'ajouter un tag au tableau de tag d'un contact
    // action.payload doit être de la forme {indexContact : index_du_contact, tag : objet_tag}
    addOneTag: (state, action) => {
      state.value[action.payload.indexContact].tags.push(action.payload.tag);
    },

    //updateTags permet de fusionner le tableau de tags d'un contact avec un nouveau tableau de tag
    //action.payload doit être de la forme {indexContact : index_dans_contact, tags: tableau_tags}
    // updateTags: (state, action) => {
    //      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
    //     const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);

    //     if(indexContact !== -1){
    //         // on parcourt le tableau de tags des contacts : si on trouve un tag avec le même titre on le remplace sinon on le rajoute
    //         for(let oneTag of action.payload.tags){
    //             const searchTag = state.value[indexContact].tags.findIndex(elt => elt.title === oneTag.title);
    //             if(searchTag !== -1){
    //                 state.value[indexContact].tags[searchTag] = oneTag;
    //             }else{
    //                 state.value[indexContact].tags.push(oneTag)
    //             }
    //         }
    //     }else{
    //         console.log('error in addOneTag : contact not find')
    //     }
    // },

    //updateContact permet de modifier les données d'un contact
    //action.payload doit être de la forme {indexContact : index_du_contact, newDatas: obj_contact}
    updateContact: (state, action) => {
      state.value[action.payload.indexContact] = action.payload.newDatas;
    },

    //addEmail permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, email: obj_email}
    addEmail: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].emails.push(action.payload.email);
      } else {
        console.log("error in addEmail : contact not find");
      }
    },

    //updateEmail permet de modifier un email selon son type
    //action.payload doit être de la forme {contact : obj_contact, email :obj_email}
    updateEmail: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].emails = state.value[indexContact].emails.map(
          (elt, index) => {
            if (elt.type === action.payload.email.type) {
              return action.payload.email;
            }
            return elt;
          }
        );
      } else {
        console.log("error in updateEmail : contact not find");
      }
    },

    //addPhone permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, phone : obj_phone}
    addPhone: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].phones.push(action.payload.phone);
      } else {
        console.log("error in addPhone : contact not find");
      }
    },

    //updatePhone permet de modifier un objet téléphone (numéro et/ou country, et/ou area) selon son type
    //action.payload doit être de la forme {contact : obj_contact, phone :obj_phone}
    updatePhone: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].phones = state.value[indexContact].phones.map(
          (elt, index) => {
            if (elt.type === action.payload.phone.type) {
              return action.payload.phone;
            }
            return elt;
          }
        );
      } else {
        console.log("error in updatePhone : contact not find");
      }
    },

    setContact: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  addContact,
  setTags,
  addOneTag,
  updateContact,
  addEmail,
  addPhone,
  updatePhone,
  updateEmail,
  updateTags,
  setContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;
