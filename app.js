console.log("Starting my Node JS Project");
console.log("Travel Booking App");
const travel = require("./Glenn_TravelBooking.js");
console.log("Full experience list: ", travel.listExperiences());
console.log(travel.addExperience("Shinkansen One Way Tokyo to Osaka", "Train Ticket", "Tokyo Station", 200));
console.log(travel.findByLocation("Tokyo"))