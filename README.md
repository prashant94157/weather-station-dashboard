
# Weather Station Dashboard

It is a weather app which shows the weather conditions of a city.


## Run Locally

Clone the project

```bash
  git clone https://github.com/prashant94157/weather-station-dashboard.git
```

Go to the project directory

```bash
  cd weather-station-dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## About Problem Solving

- We have limited users to searching one city in one minute. 
- We can use different API keys to increase our Qouta limit, though it is a bad practice. 
- We can even store a city's weather details in Redis for 3 hours so that we can directly get details from the redis itself. 
- I have handled API errors and shown an alert to the user. 
- If the city is unavailable, then I have just shown an alert for that.
## Authors

- [@prashant94157](https://www.github.com/prashant94157)

