/* 93f9f003975b2c333f13ca1572456e9b*/
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
/*https://api.openweathermap.org/data/2.5/weather?lat=50.43&lon=30.52&appid=93f9f003975b2c333f13ca1572456e9b */

let name = prompt('Enter country name');

 fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=93f9f003975b2c333f13ca1572456e9b')
     .then(function (resp){return resp.json()})
     .then(function (data) {
         console.log(data);
         document.querySelector('.city-name').textContent = data.name;
         document.querySelector('.cel').innerHTML = Math.round(data.main.temp - 273) + '&deg';
         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
     })
    

// let name = prompt('Enter country name');
// 	9b17e78fdf594180af411c8bf77df887*/ 
//  fetch('https://api.football-data.org/v4/competitions/CL/matches')
//      .then(function (resp){return resp.json()})
//      .then(function (data) {
//          console.log(data);
//      })

// const myHeaders = new Headers();
// myHeaders.append("X-Auth-Token", "9b17e78fdf594180af411c8bf77df887");

// fetch("https://api.football-data.org/v4/competitions/CL/matches", {
//   method: 'GET',
//   headers: myHeaders
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(json => console.log(json.address.geo.lng))

// fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(json => console.log(json.address.geo.lat))

