/*  const key = {
     api: 'bc886d17e5032caf3b7733c3d84528aa',
    base: 'http://api.openweathermap.org/data/2.5/weather/'
} */

    //Search button
    document.getElementById('search-btn').addEventListener('click',function(evt){
      const inputValue = document.getElementById('search-box').value;
          getApi(inputValue);
          document.querySelector('.weather-status').style.display = 'block';
          document.getElementById('search-box').value = '';
  });

  // Search Enter key
  const searchBox = document.getElementById('search-box');
  searchBox.addEventListener('keypress',function(evt){
      if(evt.keyCode === 13){
          const inputValue = document.getElementById('search-box').value;
          getApi(inputValue);
          evt.preventDefault();
          document.querySelector('.weather-status').style.display = 'block';
          document.getElementById('search-box').value = '';
      }
  })
// Api key
function getApi(value){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=bc886d17e5032caf3b7733c3d84528aa&units=metric`)
  .then(response => response.json())
  .then(data => {
      displayResults(data);
  })
}

// Show Display results
function displayResults(data){
  console.log(data);

  const city = document.getElementById('city');
  city.innerText = `${data.name}`;

  const temp = document.getElementById('temp');
  temp.innerHTML = `${Math.round(data.main.temp)}<span>&deg;c</span>`;

  const lead = document.querySelector('.lead');
  lead.innerText =data.weather[0].main;

  const icon = document.getElementById('icon');
  const showIcon = data.weather[0].icon;
  var displayIcon = "https://openweathermap.org/img/wn/" + showIcon+'@2x' + ".png";
  icon.setAttribute('src',displayIcon)
}