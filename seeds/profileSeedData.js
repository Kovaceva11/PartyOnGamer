const { Profile } = require("../models");

const profiledata = [
  {
    
    steamID: "lighttreason",
    battlenetID: "liquidsin",
    twitchID: "anarchysbaby",
  },
  {
    
    steamID: "blaquefantastic",
    battlenetID: "mygothsister",
    twitchID: "midnightmelody",
  },
  {
    
    steamID: "deaththreatseth",
    battlenetID: "anarchyschild",
    twitchID: "futurememories",
  },
  {
    
    steamID: "oblivion",
    battlenetID: "snoteleks",
    twitchID: "satansgirlsscouts",
  },
  {
    
    steamID: "thegrassyknoll",
    battlenetID: "blackfury",
    twitchID: "modernaudiences",
  },

  {
    
    steamID: "facultyopiumden",
    battlenetID: "jamaicantorturechamber",
    twitchID: "glowofdestiny",
  },
];

const profileData = () => Profile.bulkCreate(profiledata);

module.exports = profileData;
