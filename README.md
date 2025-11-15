# Assignment 1
## Glenn_TravelBooking.js
## Reference
[Trip.com](https://www.trip.com/)

This Node.js module is based on **Trip.com** that manages travel experiences such as tours, attraction and tickets
The purpose of this module os to simulate the **admin** side of the travel booking platform where there will be features such as:

- Listing all avaliable experiences
- Adding new travel experiences
- Searching by country or city
- Updating price
- Deleting an experience

all data is store using simple Javascript arrays to simulate database.

## Functions

### **1.  listExperiences()**
Returns the full list of travel experiences.

### **2.   addExperience(name, country, category, location, description, price)**
Adds a new travel experience and return a message confirming addition.

### **3.  findByLocation(location)**
Search experience by locations(city like tokyo, osaka).
Return a filtered list or a message if nothing is found.
   
### **4.   findByCountry(country)**
Search experience by countries(Japan, Singapore).
Return a filtered list or a message if nothing is found.
  
### **5.    updateExPrice(name, newPrice)**
Update price of selected experience.
Return a success message or a error message.

### **6.    deletExperience(name)**
Remove an experience by name.
Return a success message or a error message.
  
## How to use this Module

### **Step 1: Install Node.js**
Make sure Node.js is install on your computer
You can check using:
```bash
node -v
```

### **Step 2: Clone this repository**
You can clone using:
```bash
git clone https://github.com/Glennlzx/glenn_travelbooking.git
```

## References
- Trip.com - https://www.trip.com/
- Node.js Documentation – https://nodejs.org
- NYP Web API Learning Materials (Brightspace)
- Github Docs -  https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
