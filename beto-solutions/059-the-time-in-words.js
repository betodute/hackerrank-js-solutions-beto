function timeInWords(h, m) {
  let numWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
  
  if (m === 0) {
      return `${numWords[h]} o' clock`;
  };
  
  if (m === 15 || m === 45) {
      return m === 15 ? `${numWords[15]} past ${numWords[h]}` :
      `${numWords[15]} to ${numWords[h + 1]}`;
  };
  
  if (m === 30) {
      return `half past ${numWords[h]}`
  };
  
  if (m > 30) {
      if (m < 40) {
          return `${numWords[20]} ${numWords[m-30]} minutes to ${numWords[h + 1]}`
      }
      return `${numWords[60 - m]} minutes to ${numWords[h + 1]}`
  };
  
  if (m < 30 && m > 20) {
      return `${numWords[20]} ${numWords[m - 20]} minutes past ${numWords[h]}`
  };
  
  if (m < 30) {
      return m === 1 ? `${numWords[m]} minute past ${numWords[h]}` : `${numWords[m]}      minutes past ${numWords[h]}`
  };
};
