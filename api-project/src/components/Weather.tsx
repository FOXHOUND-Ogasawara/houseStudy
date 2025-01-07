// src/components/Weather.tsx
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface WeatherData {
  weather: { icon: string }[];
  main: { temp: number };
}

const areas = [
  { name: "千代田区", id: 1850147 },
  { name: "中央区", id: 1850158 },
  { name: "港区", id: 1850181 },
];

const Weather: React.FC = () => {
  const [selectArea, setSelectArea] = useState<number>(1850147);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = "d50ee320c1b52cb666f389e7c33f179d";
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    fetch(URL + `?id=${selectArea}&units=metric&lang=ja&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => "お天気情報の取得に失敗しました " + error);
  }, [selectArea]);

  const handleChange = (event) => {
    setSelectArea(event.target.value as number);
  };

  return (
    <Box textAlign="center" mt={5}>
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0]}@2x.png`}
            alt="お天気アイコン"
          />
          <Typography variant="h4">{weatherData.main.temp}℃</Typography>
        </>
      )}
      <FormControl variant="outlined" sx={{ mt: 3, minWidth: 200 }}>
        <InputLabel id="area-select-label">地域を選択</InputLabel>
        <Select
          labelId="area-select-label"
          value={selectArea}
          onChange={handleChange}
          label="地域を選択"
        >
          {areas.map((area) => (
            <MenuItem key={area.id} value={area.id}>
              {area.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default Weather;
