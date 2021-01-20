use hotel_database;

db.dropDatabase();

db.guests.insertMany([
    {
        name: "Sandra McSandraface",
        emailAddress: "sandrascoolemail@hotmail.com",
        checkedIn: false
    },
    {
        name: "Lady Gaga",
        emailAddress: "lady_gaga@yahoo.co.uk",
        checkedIn: true
    },
    {
        name: "Guesty McGuestface",
        emailAddress: "mcguestface@hotmail.co.uk",
        checkedIn: false
    },
    {
        name: "Visity McVisitface",
        emailAddress: "mcvistface@hotmail.com",
        checkedIn: false
    }
]);

