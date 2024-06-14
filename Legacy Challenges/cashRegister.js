/*const currency = [
  {
    unit: 'Penny',
    amount: '$0.01'
  },
  {
    unit: 'Nickel',
    amount: '$0.05'
  },
  {
    unit: 'Dime',
    amount: '$0.1'
  },
  {
    unit: 'Quarter',
    amount: '$0.25'
  },
  {
    unit: 'Dollar',
    amount: '$1.00'
  },
  {
    unit: 'FIve Dollars',
    amount: '$5.00'
  },
  {
    unit: 'Ten Dollars',
    amount: '$10.00'
  },
  {
    unit: 'Twenty Dollars',
    amount: '$20.00'
  },
  {
    unit: 'One-Hundred Dollars',
    amount: '$100.00'
  }
];*/

function checkCashRegister(price, cash, cid) {
  const CURRENCY_UNIT = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.10],
      ["QUARTER", 0.25],
      ["ONE", 1.00],
      ["FIVE", 5.00],
      ["TEN", 10.00],
      ["TWENTY", 20.00],
      ["ONE HUNDRED", 100.00]
  ];

  let changeDue = cash - price;
  let totalCid = 0;

  cid.forEach((value) => {
    totalCid += value[1];
    return totalCid;
  })

  // Check if we have insufficient funds in the drawer
  if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if we need to close the drawer
  if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
  }

  // Handle giving the correct change
  let changeArray = [];
  let remainingChange = changeDue;

  // Loop through the currency units from highest to lowest
  for (let i = CURRENCY_UNIT.length - 1; i >= 0; i--) {
      let currencyName = CURRENCY_UNIT[i][0];
      let currencyValue = CURRENCY_UNIT[i][1];
      let currencyAvailable = cid[i][1];
      let currencyCount = 0;

      // While we can give this currency as change and we have enough in the drawer
      while (remainingChange >= currencyValue && currencyAvailable >= currencyValue) {
          remainingChange = (remainingChange - currencyValue).toFixed(2);
          currencyAvailable -= currencyValue;
          currencyCount += currencyValue;
      }

      // If we used this currency, add it to the change array
      if (currencyCount > 0) {
          changeArray.push([currencyName, currencyCount]);
      }
  }

  // If we still owe change, we don't have the correct denominations
  if (remainingChange > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//cid = cash-in-drawer