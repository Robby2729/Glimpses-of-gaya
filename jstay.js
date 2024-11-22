const hotels = [
    {
        name: "Sambodhi Resort",
        address: "Bodh Gaya",
        price: "120 per night",
        facilities: "Free WiFi, Breakfast included, Pool",
        availability: "Available",
        imageUrl: "stay1.png "
    },
    {
        name: "Hotel Siddharta Inn",
        address: "456 Avenue, Downtown",
        price: "$150 per night",
        facilities: "Gym, Free Parking, Bar",
        availability: "Few rooms left",
        imageUrl: "stay2.png"
    },
    {
        name: "The Bodhi Palace Resort",
        address: "Dobhi-Patna Highway,Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay3.png"
    },
    {
        name: "Hotel Aryavarta",
        address: "Near Petrol Pump, Gandhi Maidan, Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay4.png"
    },
    {
        name: "Sukhdev Clark Inn",
        address: "Manpur,Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay5.png"
    },
    {
        name: "The Royal Residency",
        address: "Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay6.png"
    },
    {
        name: "Hyat Palce",
        address: "Near Gaya International Airport,Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay7.png"
    },
    {
        name: "Hotel Royal Palace",
        address: "Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay8.png"
    },
    {
        name: "Raj Mahal Resort",
        address: "Gaya",
        price: "$200 per night",
        facilities: "Spa, Rooftop Pool, Restaurant",
        availability: "Available",
        imageUrl: "stay9.png"
    }




    










];

const hotelList = document.getElementById("hotel-list");

hotels.forEach(hotel => {
    const hotelCard = document.createElement("div");
    hotelCard.className = "hotel-card";
    hotelCard.innerHTML = `
        <img src="${hotel.imageUrl}" alt="${hotel.name}">
        <div class="hotel-info">
            <h2>${hotel.name}</h2>
            <p><strong>Address:</strong> ${hotel.address}</p>
            <p><strong>Price:</strong> <span class="price">${hotel.price}</span></p>
            <p><strong>Facilities:</strong> <span class="facilities">${hotel.facilities}</span></p>
            <p><strong>Availability:</strong> <span class="availability">${hotel.availability}</span></p>
            <a href="book.html" class="book-now">Book Now</a>
        </div>
    `;
    hotelList.appendChild(hotelCard);
});