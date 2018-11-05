export default totalSeconds => {
  let output = "";

  const minutes = Math.floor(totalSeconds / 60);

  if (minutes > 0) {
    output += `${minutes} minute`;

    if (minutes !== 1) {
      output += "s";
    }
  }

  const seconds = totalSeconds % 60;

  if (seconds > 0) {
    if (minutes > 0) {
      output += " and ";
    }
    output += `${seconds} second`;

    if (seconds !== 1) {
      output += "s";
    }
  }

  return output;
};
