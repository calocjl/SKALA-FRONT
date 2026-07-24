import { getWeather } from './weatherAPI.js';

const citySelect = document.getElementById('city-select');
const weatherBox = document.getElementById('weather-box');

citySelect.addEventListener('change', async function () {
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    const cityName = selectedOption.textContent;
    const lat = selectedOption.dataset.lat;
    const lon = selectedOption.dataset.lon;

    if (!lat || !lon) {
        weatherBox.innerHTML = "도시를 선택하면 날씨가 표시됩니다.";
        return;
    }

    weatherBox.innerHTML = `
        <p><strong>${cityName}</strong> (위도: ${lat}, 경도: ${lon})</p>
        <p>로딩 중... ⏳</p>
    `;

    try {
        const current = await getWeather(lat, lon);
        weatherBox.innerHTML = `
            <p><strong>${cityName}</strong></p>
            <p>🌡️ 현재 온도: ${current.temperature_2m}°C</p>
            <p>💧 습도: ${current.relative_humidity_2m}%</p>
        `;
    } catch (error) {
        weatherBox.innerHTML = "날씨 정보를 불러오지 못했습니다.";
    }
});