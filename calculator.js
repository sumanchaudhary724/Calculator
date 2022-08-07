let textTodisplay ="";
const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => {

  btn.addEventListener("click", ()=> {
    if (btn.innerText === "=") {
    return onTotal();
    
    }
    
    if (btn.innerText === "AC") {
      textTodisplay = ""
      return display(textTodisplay);
    }

    if (btn.innerText === "C") {
      textTodisplay = textTodisplay.slice(0, -1); 
      return display(textTodisplay);
    }

    // if (btn.innerText === "√") {
    //   const result = Math.sqrt(textTodisplay)
      
    //   return result;
    // }
    if (btn.innerText === "OFF") {
      document.getElementById('result').style.backgroundColor = "black";
      btn.innerText ="ON"
      return display(textTodisplay);
    }

    if (btn.innerText === "ON") {
      document.getElementById('result').style.backgroundColor = "";
      btn.innerText ="OFF"
      return display(textTodisplay);
    }

    
    //grab value from button
  textTodisplay += btn.innerText;
  
  display(textTodisplay);
  
  });
  
});
const display = (todisplay) =>{
  document.getElementById("result").value = todisplay || 0;

  
};
const onTotal = () => {
    //do totalling 
    const subtotal = eval(textTodisplay);
    const total = subtotal + randomVal1();
    display(total);
    textTodisplay="";
  }

  const randomVal1 = () => {
    const randomVal1 = Math.floor(Math.random()*10)
    console.log(randomVal1)

    return randomVal1 <= 5 ? randomVal1 : 0
  }