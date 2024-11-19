

setInterval(()=>{
      const element= document.querySelector(".clock_display");

      const time= new Date();
      const option={
            timezone:"asia/kolkata",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit"
      }
      
      element.textContent=time.toLocaleTimeString('en-US',option);
},1000);