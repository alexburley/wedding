module.exports = [
  {
    display: "Slaley Hall Hotel",
    link: "https://www.slaleyhallhotel.com",
    miles: "8",
    pounds: "££££",
  },
  {
    display: "Derwent Manor Hotel",
    link: "https://derwentmanorhotel.com/",
    miles: "7",
    pounds: "£££",
  },
  {
    display: "The Angel of Corbridge",
    link: "https://www.theangelofcorbridge.com",
    miles: "8",
    pounds: "£££",
  },
  {
    display: "The Anchor Inn",
    link: "https://www.theanchorinnwhittonstall.co.uk/accommodation",
    miles: "5",
    pounds: "££",
  },
  {
    display: "The Duke of Wellington Inn",
    link: "https://www.thedukeofwellingtoninn.co.uk/",
    miles: "5",
    pounds: "£££",
  },
  {
    display: "The George Hotel",
    link: "https://bespokehotels.com/the-george-hotel",
    miles: "15",
    pounds: "££",
  },
  //{
  // display: "Lord Crewe Arms Hotel", // UNAVAILABLE
  //},
  //{
  // display: "Beaumont Hotel", //UNAVAILABLE
  //},
].sort((a, b) => {
  if (a.pounds.length > b.pounds.length) return 1;
  else return -1;
});
