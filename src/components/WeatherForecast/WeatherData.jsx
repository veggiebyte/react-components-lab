const WeatherData = ({ conditions, time }) => {
  return (
    <div>
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
}

export default WeatherData;