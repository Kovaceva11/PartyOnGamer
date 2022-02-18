const { Merch } = require("../models");

const merchdata = [
  {
    imageURL: "./public/assets/POG HAT.png",
    itemName: "Party On Gamer Hat",
    description:
      "Be the envy of all your friends as you show off your glorious new LANParty hat!",
    price: "$12.95",
    quantity: "12",
  },

  {
    imageURL: "./public/assets/POG SHIRT.png",
    itemName: "Party On Gamer T-Shirt",
    description:
      "Wear the Party On Gamer T-Shirt to sleep, wear it to the gym, wear it out to eat - it doesn't matter! Just wear it!",
    price: "$18.90",
    quantity: "14",
  },

  {
    imageURL: "./public/assets/POG STICKER.png",
    itemName: "Party On Gamer Sticker",
    description:
      "We know you know how perfect this LANParty sticker would look on your laptop.",
    price: "$6.50",
    quanitiy: "25",
  },

  {
    imageURL: "./public/assets/POG MUG.png",
    itemName: "Party On Gamer Coffee Mug",
    description:
      "It's Sunday morning. You wake up with no alarm and make yourself delicious coffee. You take a sip from your beloved LANParty mug. All is well.",
    price: "$16.95",
    quantity: "10",
  },

  {
    imageURL: "./public/assets/POG KEYCHAIN.png",
    itemName: "Party On Gamer Keychain",
    description:
      "Ready to go! You have your phone, wallet...and of course you could never misplace your keys when they're attached to your LANParty keychain!",
    price: "$4.95",
    quantity: "20",
  },

  {
    imageURL: "./public/assets/POG TOTE.png",
    itemName: "Party On Gamer Tote Bag",
    description:
      "How is anyone supposed to know you're on LANParty without the LANPARTY tote bag?",
    price: "$21.99",
    quantity: "7",
  },
];

const merchData = () => Merch.bulkCreate(merchdata);

module.exports = merchData;
