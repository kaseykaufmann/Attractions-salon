# Attractions Salon

## Description of Features

-  Slideshow presenting photos of salon
- Provides user with location and directions to salon
- Lists services with description and pricing information
- Book Now service where users fill out form with contact information and time for appointment, this information gets sent to client, and will connect to the user who booked the appointment
- Payments page where user has the option to pay for services before the scheduled appointment
- Provides user with a list of reviews from past customers as well as ability to leave their own review
- Admin panel can be used by the client to update any information on the website

## APIs Used

| API Key Location| API Key Location |
| :-------------- | :----------------|
| Google Maps API | client/src/views/Home/Home.js, <br /> Line ~408 |
| PassportJS      | Cookie Secret (to secure sessions) : <br />Set the environment variable “COOKIE_SECRET” to any random sequence of letters and numbers. |
| ReCAPTCHA       | Site Key(for testimonials): <br />/client/src/views/Testimonials/Form.tsx, line ~70 <br />Secret Key(for testimonials): server/config/config.js, <br />Line ~14 <br />(sitekey for signup) <br />\client\src\views\Login\SignUpForm.tsx,<br /> Line ~232  |
| Twilio          | server/config/config.js        |
| Square          | client/src/views/Payments/config.js,<br /> Line 3 and 4<br /><br /> server/config/config.js,<br /> Line 12  |

## Environmental Variables 
Environmental variables located in server/config/config.js

|                |                 |
| -------------- | ----------------|
| COOKIE_SECRET | Secret for cookie session storage (overrides config.js) |
| DB_URI | Database URI (overrides config.js) |
| RECAPTCHA_SECRET | Recaptcha secret key (overrides config.js) |

```
//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
module.exports = {
    db: {
        uri: '', 
    },
    cookie: {
        secret: '', 
    },
    square: {
        accessToken: '',
    },
    recaptcha: {
        v3: {
            siteKey: "",
            secretKey: "",
        },
        v2: {
            siteKey: "",
            secretKey: "",
        },
    },
    twilio: {
        acctSID: 'AC8647556163446007893b6bd5d0270bc8',
        authToken: '869466ff08e5badaaaa8c415058a9077',
    }
};
```
