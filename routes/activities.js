const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let theActivities = [];
    let theTrip = {}; //TODO get from database to load navbar information
    //destination month start_day end_day year flights hotel_stays activities
    
    //example data
    theTrip.image_src = "";
    theTrip.destination = "Rome";
    theTrip.month = "June";
    theTrip.start_day = "2";
    theTrip.end_day = "10";
    theTrip.year = "2021";
    theTrip.flights = "3";
    theTrip.hotel_stays = "2";
    theTrip.activities = "6";

    let exampleActivity1 = {};
    exampleActivity1.image_src = "/public/images/flight_icon.png";
    exampleActivity1.flight = true;
    exampleActivity1.departure_airport = "EWR";
    exampleActivity1.arrival_airport = "LHR";
    exampleActivity1.depart_date_time = "6/12/21 8:00PM EDT";
    exampleActivity1.arrives_date_time = "6/13/21 10:00AM GMT";
    exampleActivity1.flight_number = "UA100";
    exampleActivity1.confirmation_number = "ABC123";
    theActivities.push(exampleActivity1);

    let exampleActivity2 = {};
    exampleActivity2.image_src = "/public/images/hotel_icon.png";
    exampleActivity2.hotel_stay = true;
    exampleActivity2.hotel_name = "Hilton";
    exampleActivity2.start_date = "6/12/21";
    exampleActivity2.address = "25 Hyde Street, Rome, Italy";
    exampleActivity2.confirmation_number = "ABC123";
    theActivities.push(exampleActivity2);
    //TODO
    //get data from database
    //add to list
    //image_src
    //flight: departure_location, arrival_location, depart_date_time, arrives_date_time, flight_number, confirmation_number
    //MAKE SURE TO DO hotel_stay /TWICE/ for arrival/departure;
    //hotel_stay: hotel_name, start_date, end_date, address, confirmation_number
    //tour_event: name, start_date_time, address, confirmation_number
    //bus_boat: company, depart_date_time, arrives_date_time, number, confirmation_number
    
    res.render('activities', { title: "Activities", activities: theActivities, trip: theTrip });
});

router.get('/add/:type', async (req, res) => {
    //type = flight/hotel_stay/tour_event/bus_boat
    let type = req.params.type;
    let paramObject = { title: "Add Activity" };
    if(type == "flight") paramObject.flight = true;
    if(type == "hotel_stay") paramObject.hotel_stay = true;
    if(type == "tour_event") paramObject.tour_event = true;
    if(type == "bus_boat") paramObject.bus_boat = true;

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

    paramObject.today = `${todayYear}-${todayMonth}-${todayDay}`;
    paramObject.tomorrow = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

    res.render('add_activity', paramObject);
});

router.get('/edit/:id', async (req, res) => {
    let id = req.params.id;

    let activity = {}; //TODO get activity from database based on id
    let paramObject = { title: "Edit Activity" };
    paramObject.id = id;

    //example data
    let exampleActivity1 = {};
    // // // exampleActivity1.bus_boat = true;
    // // exampleActivity1.tour_event = true;
    // exampleActivity1.hotel_stay = true;
    exampleActivity1.flight = true;
    exampleActivity1.airline = "Delta"
    exampleActivity1.departure_date = "2021-06-12";
    exampleActivity1.departure_airport = "EWR";
    exampleActivity1.departure_time = "20:00";
    exampleActivity1.departure_time_zone = "EST";
    exampleActivity1.arrival_date = "2021-06-13";
    exampleActivity1.arrival_airport = "LHR";
    exampleActivity1.arrival_time = "09:00";
    exampleActivity1.arrival_time_zone = "GMT";
    exampleActivity1.flight_number = "UA100";
    exampleActivity1.confirmation_number = "ABC123";
    paramObject.flight = exampleActivity1;
    // paramObject.hotel_stay = exampleActivity1;
    // // paramObject.tour_event = exampleActivity1;
    // // // paramObject.bus_boat = exampleActivity1;

    if(activity.flight) {
        //TODO flight: departure_date, departure_airport, departure_time, departure_time_zone, arrival_date, arrival_airport, arrival_time, arrival_time_zone, flight_number, confirmation_number
    }
    if(activity.hotel_stay) {
        //TODO hotel_stay: hotel_name, start_date, end_date, address, confirmation_number
    }
    if(activity.tour_event) {
        //TODO tour_event: name, start_date_time, address, confirmation_number
    }
    if(activity.bus_boat) {
        //TODO bus_boat: company, depart_date_time, arrives_date_time, number, confirmation_number
    }

    res.render('edit_activities', paramObject);
});

router.post('/', async (req, res) => {
    //TODO
    //add new activity
});

router.post('/edit/:id', async (req, res) => {
    //TODO
    //edit activity
});

module.exports = router;