const roundNum = (num: number | null | undefined, scale: number = 2) => {
  if (num === null || num === undefined || Number.isNaN(Number(num))) {
    return 0;
  }

  const numStr = `${num}`;
  if (!numStr.includes('e')) {
    return +(`${Math.round(parseFloat(`${num}e+${scale}`))}e-${scale}`);
  }

  const arr = numStr.split('e');
  let sig = '';
  if (+arr[1] + scale > 0) {
    sig = '+';
  }
  return +(`${Math.round(parseFloat(`${+arr[0]}e${sig}${+arr[1] + scale}`))}e-${scale}`);
};

export default roundNum;
