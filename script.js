
const translations = {
  he: {
    flights: "טיסות",
    hotels: "מלונות",
    cars: "רכבים",
    packages: "דילים",
    search: "חפש",
    labels: { from: "מוצא", to: "יעד", departure: "תאריך יציאה", return: "תאריך חזרה", passengers: "נוסעים" }
  },
  en: {
    flights: "Flights",
    hotels: "Hotels",
    cars: "Cars",
    packages: "Packages",
    search: "Search",
    labels: { from: "From", to: "To", departure: "Departure Date", return: "Return Date", passengers: "Passengers" }
  },
  ru: {
    flights: "Авиабилеты",
    hotels: "Отели",
    cars: "Авто",
    packages: "Пакеты",
    search: "Поиск",
    labels: { from: "Откуда", to: "Куда", departure: "Дата отправления", return: "Дата возвращения", passengers: "Пассажиры" }
  }
};
function changeLanguage(lang) {
  document.querySelectorAll('nav a')[0].innerText = "✈️ " + translations[lang].flights;
  document.querySelectorAll('nav a')[1].innerText = "🏨 " + translations[lang].hotels;
  document.querySelectorAll('nav a')[2].innerText = "🚗 " + translations[lang].cars;
  document.querySelectorAll('nav a')[3].innerText = "💼 " + translations[lang].packages;
  document.getElementById('search-btn').innerText = translations[lang].search;
  document.getElementById('from').placeholder = translations[lang].labels.from;
  document.getElementById('to').placeholder = translations[lang].labels.to;
  document.getElementById('departure').placeholder = translations[lang].labels.departure;
  document.getElementById('return').placeholder = translations[lang].labels.return;
  document.getElementById('passengers').placeholder = translations[lang].labels.passengers;
}
document.getElementById('language-select').addEventListener('change', (e) => changeLanguage(e.target.value));
