const form = document.querySelector('form');
const models = document.getElementById('models');

async function findCar(e) {
  e.preventDefault();

  const make = form.manufacturer.value.trim();
  const year = form.year.value.trim();

  if (!make || !year) {
    alert('Please enter a manufacturer and a year');
    return;
  }

  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`;

  try {
    models.innerHTML = '<tr><td colspan="2>Searching...</td></tr>';

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (jsonResponse.Results.length === 0) {
      alert('No cars found');
      return;
    }

    let newHtml = '';

    for (let i = 0; i < jsonResponse.Results.length; i++) {
      const car = jsonResponse.Results[i];

      newHtml += `
        <tr>
          <td>${car.Make_Name}</td>
          <td>${car.Model_Name}</td>
        </tr>
      `;
    }

    models.innerHTML = newHtml;
  } catch (error) {
    console.error(error.message);
  }

  console.log(url);
}



form.addEventListener('submit', findCar);
