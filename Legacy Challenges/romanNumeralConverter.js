const romanMapping = [
  {
    value: 1000,
    symbol: 'M'
  },
  {
    value: 900,
    symbol: 'CM'
  },
  {
    value: 500,
    symbol: 'D'
  },
  {
    value: 400,
    symbol: 'CD'
  },
  {
    value: 100,
    symbol: 'C'
  },
  {
    value: 90,
    symbol: 'XC'
  },
  {
    value: 50,
    symbol: 'L'
  },
  {
    value: 40,
    symbol: 'XL'
  },
  {
    value: 10,
    symbol: 'X'
  },
  {
    value: 9,
    symbol: 'IX'
  },
  {
    value: 5,
    symbol: 'V'
  },
  {
    value: 4,
    symbol: 'IV'
  },
  {
    value: 1,
    symbol: 'I'
  }
];

function convertToRoman(num) {
  let romanNum = '';

  romanMapping.forEach((roman) => {
    while (num >= roman.value) {
      //to find put the symbole falls in which range
      romanNum += roman.symbol

      //to identify the exact number
      num -= roman.value;
    }

    return romanNum;
  })
  console.log(romanNum);
}
convertToRoman(42);