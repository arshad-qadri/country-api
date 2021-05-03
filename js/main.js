const api = "https://restcountries.eu/rest/v2/all";
const container = document.querySelector(".container");
const getAPIData = async () => {
  const res = await (await fetch(api)).json();
  const data = res[104];
  console.log(data);
  container.innerHTML = ` <div class="center-div">
  <div class="country">
    <img src="${data.flag}" alt="" />
    <h5 class="name"> ${data.name} </h5>
    <p class="capital"> Capital : ${data.capital}</p>
    <div class="details">
      <div class="nativeName">
        <span> ${data.nativeName} </span>
        <p>Native Name</p>
      </div>
      <div class="population">
        <span> ${data.population} </span>
        <p>Population</p>
      </div>
      <div class="demonym">
        <span> ${data.demonym} </span>
        <p>Demonym</p>
      </div>
    </div>
  </div>
</div>`;
};
getAPIData();
