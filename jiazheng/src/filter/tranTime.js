function tranTime(time) {
    var date = new Date(Number(time));
    var year = date.getFullYear();
    var month = (date.getMonth() + 1 + "").padStart(2, "0");
    var day = (date.getDate() + "").padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  export default tranTime