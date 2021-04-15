const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let theTrips = [];
    let exampleTrip1 = {};
    exampleTrip1.image_src = "/public/images/trip_icon.png";
    exampleTrip1.destination = "Rome";
    exampleTrip1.month = "June";
    exampleTrip1.start_day = "2";
    exampleTrip1.end_day = "10";
    exampleTrip1.year = "2021";
    exampleTrip1.flights = "3";
    exampleTrip1.hotel_stays = "2";
    exampleTrip1.activities = "6";
    theTrips.push(exampleTrip1);
    theTrips.push(exampleTrip1);
    //TODO
    //get data from database
    //add to list
    //image_src, destination, month, start_day, end_day, year, flights, hotel_stays, activities
    
    res.render('trips', { title: "Trips", trips: theTrips });
});

router.get('/add', async (req, res) => {
    let todayDate = new Date();
    let todayYear = "" + todayDate.getFullYear();
    let todayMonth = todayDate.getMonth() + 1;
    if(todayMonth < 10) todayMonth = "0" + todayMonth;
    let todayDay = todayDate.getDate();
    if(todayDay < 10) todayDay = "0" + todayDay;

    let tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    let tomorrowYear = "" + tomorrowDate.getFullYear();
    let tomorrowMonth = tomorrowDate.getMonth() + 1;
    if(tomorrowMonth < 10) tomorrowMonth = "0" + tomorrowMonth;
    let tomorrowDay = tomorrowDate.getDate();
    if(tomorrowDay < 10) tomorrowDay = "0" + tomorrowDay;
    
    res.render('add_trip', { title: "Add Trip", today: `${todayYear}-${todayMonth}-${todayDay}`, tomorrow: `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}` });
});

router.get('/edit/:id', async (req, res) => {
    let id = req.params.id;

    let theTrip = {}; //TODO get trip from database
    let paramObject = { title: "Edit Trip", trip: theTrip };
    paramObject.id = id;

    //trip: destination, start_date, end_date
    //example data
    theTrip.destination = "Rome";
    theTrip.start_date = "2021-06-12";
    theTrip.end_date = "2021-06-22";
    paramObject.trip = theTrip;

    res.render('edit_trip', paramObject);
});

router.post('/', async (req, res) => {
    //TODO
    //add_trip's post
});

router.post('/edit/:id', async (req, res) => {
    let id = req.params.id;
    //TODO save changes to database
});

module.exports = router;

/**
 * images:
 * // plane outline (trips) - 
 * // profile buttons (trips)
 * // back arrow (add new trip, activities, add activity, edit activity, edit trip, profile, feedback)
 * // plus symbol (trips, activities)
 * // flight symbol (activities)
 * // hotel symbol (activities)
 * // compass symbol (activities)
 * TODO bus/boat symbol (activities)
 */