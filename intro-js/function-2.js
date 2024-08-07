function calculateMarketerCommission() {

  const numberOfClientsBrought = document.getElementById("clients").value;

  let commission = 2000 * numberOfClientsBrought;

  console.log(commission);

  document.getElementById("commission").innerText = commission;
}
