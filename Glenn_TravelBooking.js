//dummy data for simulating database
let experiences = [
    { name: "Tokyo 8 Day Tour", country: "Japan", category: "Tour", location: "Tokyo", price: 4000 },
    { name: "Osaka 7 Day Tour", country: "Japan", category: "Tour", location: "Osaka", price: 3000 },
    { name: "Universal Studio Japan one day ticket + express full package", country: "Japan", category: "Attraction", location: "Osaka", price: 299 },
    { name: "Universal Studio Singapore one day ticket + express full package", country: "Singapore", category: "Attraction", location: "Singapore", price: 200 },
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
    //find experience via country
    findByCountry(country) {
        const results = experiences.filter(x => x.country.toLowerCase() === country.toLowerCase());
        return results.length ? results : "No experiences found for this country.";
    },
    //update price for experience
    updateExPrice(name, newPrice) {
        const experience = experiences.find(x => x.name.toLowerCase() === name.toLowerCase());
        if (experience) {
            experience.price = newPrice;
            return `${name}'s price updates to $${newPrice}`;
        }
        else {
            return `Experience not found`;
        }
    },
    //delete experience
    deleteExperience(name) {
        const index = experiences.findIndex(x => x.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            const removeds = experiences.splice(index, 1);
            return `${removeds[0].name} has been removed`;
        }
        else {
            return "experience not found";
        }
    }

}