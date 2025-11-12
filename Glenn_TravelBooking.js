//dummy data for simulating database
let experiences = [
    { name: "Tokyo 8 Day Tour", category: "Tour", location: "Tokyo", price: 4000 },
    { name: "Osaka 7 Day Tour", category: "Tour", location: "Osaka", price: 3000 },
    { name: "Universal Studio Japan one day ticket + express full package", category: "Attraction", location: "Osaka", price: 299 },
]
module.exports = {
    // List all experiences from the "database"
    listExperiences() {
        return experiences;
    },
    // Add new experience into the array (add)
    addExperience(name, category, location, price) {
        experiences.push({ name, category, location, price });
        return `${name} has been added successfully`;
    },
    //Find experiences via location (filtering)
    findByLocation(location) {
        const results = experiences.filter(x => x.location.toLowerCase() === location.toLowerCase());
        return results.length ? results : "No experiences found for this location.";
    },
    //update price for experience
    updateExPrice(name, newPrice) {

    }

}