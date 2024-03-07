const Restaurant = require('../models/restaurant.model');
const restaurants = require('./restaurants.json');

(async () => {
  const mongoose = require('mongoose');

  const MONGO_URI =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Final_Project_Server';

  mongoose
    .connect(MONGO_URI)
    .then((x) => {
      const dbName = x.connections[0].name;
      console.log(`Connected to Mongo! Database name: "${dbName}"`);
    })
    .catch((err) => {
      console.error('Error connecting to mongo: ', err);
    });

  try {
    await Restaurant.deleteMany();
    console.log('DB cleaned');

    const modelAdaptedRestaurants = restaurants.map(
      ({
        name,
        neighborhood,
        address,
        latlng: { lat, lng },
        image,
        cuisine_type,
        operating_hours,
        reviews,
      }) => {
        return {
          name,
          neighborhood,
          address,
          location: {
            type: 'Point',
            coordinates: [lat, lng],
          },
          image,
          cuisine_type,
          operating_hours,
          reviews,
        };
      }
    );

    const restaurantsDb = await Restaurant.insertMany(modelAdaptedRestaurants);
    console.log(`Successful DB Seed with restaurants ${restaurantsDb}!`);
  } catch (error) {
    console.log('error', error);
  } finally {
    mongoose.connection.close();
  }
})();
