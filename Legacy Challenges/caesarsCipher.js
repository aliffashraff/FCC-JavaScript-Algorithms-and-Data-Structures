const alphabets = [
  {
    number: 1,
    character: 'A'
  },
  {
    number: 2,
    character: 'B'
  },
  {
    number: 3,
    character: 'C'
  },
  {
    number: 4,
    character: 'D'
  },
  {
    number: 5,
    character: 'E'
  },
  {
    number: 6,
    character: 'F'
  },
  {
    number: 7,
    character: 'G'
  },
  {
    number: 8,
    character: 'H'
  },
  {
    number: 9,
    character: 'I'
  },
  {
    number: 10,
    character: 'J'
  },
  {
    number: 11,
    character: 'K'
  },
  {
    number: 12,
    character: 'L'
  },
  {
    number: 13,
    character: 'M'
  },
  {
    number: 14,
    character: 'N'
  },
  {
    number: 15,
    character: 'O'
  },
  {
    number: 16,
    character: 'P'
  },
  {
    number: 17,
    character: 'Q'
  },
  {
    number: 18,
    character: 'R'
  },
  {
    number: 19,
    character: 'S'
  },
  {
    number: 20,
    character: 'T'
  },
  {
    number: 21,
    character: 'U'
  },
  {
    number: 22,
    character: 'V'
  },
  {
    number: 23,
    character: 'W'
  },
  {
    number: 24,
    character: 'X'
  },
  {
    number: 25,
    character: 'Y'
  },
  {
    number: 26,
    character: 'Z'
  }
];

function rot13(str) {
  let result = [];
  let strAddThirteen = [];

  let strArrs = str.split("");

  strArrs.map((strArr) => {
    alphabets.forEach((alphabet) => {
      if (strArr === alphabet.character) {
        strArr = alphabet.number + 13;
        if (strArr > 26) {
          strArr -= 26;
        }
      }
      return strArr;
    });
    strAddThirteen.push(strArr);
  });

  //console.log(strAddThirteen);
  
  strAddThirteen.map((arr) => {
    alphabets.forEach((alphabet) => {
      if (arr === alphabet.number) {
        arr = alphabet.character;
      }
      return arr;
    });
    result.push(arr);
  });

  //return result.join("");
  console.log(result.join(""));
}
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

//or

/*
function rot13(str) {
  return str.split("").map(char => {
    // Check if the character is an uppercase letter
    if (char >= 'A' && char <= 'Z') {
      // Find the character code of the letter and shift it by 13
      let charCode = char.charCodeAt(0);
      charCode = ((charCode - 65 + 13) % 26) + 65; // 65 is the char code for 'A'
      return String.fromCharCode(charCode);
    } else {
      // If it's not a letter, return it unchanged
      return char;
    }
  }).join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
*/