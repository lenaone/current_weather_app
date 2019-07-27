# Current Weather Website

#### Summary

This is a simple React Website. This Site shows the current weather icon, summary, temperature and timezone.
The user's current location is used as default when they first visit the website.

---

#### Technologies Used

- React
- APIs
- Sinatra
- Bootsrap
- FontAwesome

---

#### Approach

1. Created Git Repository.
2. Created a brand new React project.
3. Created Components, Route and Weather, About page.
4. Got data from opencagedata APIs, darksky APIs and Local APIs.
5. Created a Sinatra application that makes requests to darksky and returns it to the React app.
6. If bugs happened, fixed the bugs.

---

### Running

##### You have to run the react and the sinatra apps at the same time.

- UI(with React)

1. clone it with `git clone https://github.com/lenaone/current_weather_app.git`

2. Change to the app directory to `cd current_weather_app`

3. `npm install`

4. `npm start`

- Server Side(with Sinatra)

1. clone it with `git clone https://github.com/lenaone/weather_app_server_side.git`

2. Change to the app directory to `cd weather_app_server_side`

3. install the gems with `bundle install`

4. `ruby main.rb`
