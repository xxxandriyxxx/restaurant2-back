## Restaurants back-end
You can open this project by link: http://ec2-52-15-125-215.us-east-2.compute.amazonaws.com:8080

This is a Spring project "Restaurants". It also includes built angular project.
It can run as an API or as a holistic project. By default, on http://localhost:8080.

Using this app you can browse the list of registered restaurants, sign up as client, place orders, change the status of your orders.

You can also sign up as an owner of restaurants. Then you can register your restaurants and manage them, get customer orders, change the status of customer orders. You can also place an order as a client.

User registration requires confirmation of email address to enabling his account. It can be canceled in Security class ( https://github.com/xxxandriyxxx/restaurant2-back/blob/master/src/main/java/owu/restaurant2back/configs/Security.java ).

URL of the running front-end project is set in WebConfig class ( https://github.com/xxxandriyxxx/restaurant2-back/blob/master/src/main/java/owu/restaurant2back/configs/WebConfig.java ). It used in confirmation email.

The path to the local folder with logos of restaurants is set in WebConfig class ( https://github.com/xxxandriyxxx/restaurant2-back/blob/master/src/main/java/owu/restaurant2back/configs/WebConfig.java ).

The properties of DB and a mail server are set in the application properties file: https://github.com/xxxandriyxxx/restaurant2-back/blob/master/src/main/resources/application.properties

To get an Angular project, follow the link: https://github.com/xxxandriyxxx/restaurant2-front

To get an Ionic project, follow the link: https://github.com/xxxandriyxxx/restaurants_ionic
