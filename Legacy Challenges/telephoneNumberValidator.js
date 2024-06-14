function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)(\(\d{3}\)|\d{3})([\s\-]?)(\(\d{4}\)|\d{4})$/;
  return regex.test(str);
}

console.log(telephoneCheck('1 555 555 5555'));

/*
//test
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/