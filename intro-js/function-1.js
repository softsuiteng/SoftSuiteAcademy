function calculateMarketerCommission(numberOfClientsBrought) {
  let commission = 2000 * numberOfClientsBrought;

  return commission;
}

const commissionCalculated = calculateMarketerCommission(1);

console.log(commissionCalculated);
