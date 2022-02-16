const { Profile } = require("../models");

const profiledata = [
  {
    birthday: "09/11/1994",
    steamID: "lighttreason",
    originID: "liquidsin",
    twitchID: "anarchysbaby",
  },
  {
    birthday: "01/02/1993",
    steamID: "blaquefantastic",
    originID: "mygothsister",
    twitchID: "midnightmelody",
  },
  {
    birthday: "07/4/1982",
    steamID: "deaththreatseth",
    originID: "anarchyschild",
    twitchID: "futurememories",
  },
  {
    birthday: "11/11/2011",
    steamID: "oblivion",
    originID: "snoteleks",
    twitchID: "satansgirlsscouts",
  },
  {
    birthday: "04/18/2004",
    steamID: "thegrassyknoll",
    originID: "blackfury",
    twitchID: "modernaudiences",
  },

  {
    birthday: "02/20/1989",
    steamID: "facultyopiumden",
    originID: "jamaicantorturechamber",
    twitchID: "glowofdestiny",
  },
];

const profileData = () => Profile.bulkCreate(profiledata);

module.exports = profileData;
