const sp = (num) => {
 
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  export { sp };