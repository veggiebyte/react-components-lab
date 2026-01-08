import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx'
import './App.css'

const App = () => {

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <img src="/images/little_steps_logo.png" alt="Little Steps Logo" className="logo" />
          <h1>Local Weather</h1>
        </div>

        <p className="parent-message">
          It looks like it's going to rain this week. Make sure your child has an umbrella!
        </p>

        <section className="forecast-section">
          {weatherForecasts.map((forecast, index) => (
            <WeatherForecast
              key={index}
              day={forecast.day}
              img={forecast.img}
              imgAlt={forecast.imgAlt}
              conditions={forecast.conditions}
              time={forecast.time}
            />
          ))}
        </section>


      </div>
    </div>
  );
}

export default App