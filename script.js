
    let winningConditions =[
                  ["btn1","btn2","btn3"],
                  ["btn4","btn5","btn6"],
                  ["btn7","btn8","btn9"],
                  ["btn1","btn4","btn7"],
                  ["btn2","btn5","btn8"],
                  ["btn3","btn6","btn9"],
                  ["btn1","btn5","btn9"],
                  ["btn3","btn5","btn7"]      
             ]     

       let btnNodes=document.querySelectorAll(".btn");
       let restart=document.querySelector(".restart");
       let Xnode=document.querySelector(".playerx");
       let Onode=document.querySelector(".playero");
       
       let count=0,steps=0;
       btnNodes.forEach((btnNode)=>{
           btnNode.addEventListener("click",()=>{
            if (btnNode.innerText === "") {
              if(count%2===0){
                btnNode.innerText="X";
                count++;
                steps++;
                Onode.classList.add("oclass");
                Xnode.classList.remove("xclass");
              }
              else{
                btnNode.innerText="O";
                count++;
                steps++;
                Xnode.classList.add("xclass");
                Onode.classList.remove("oclass");
              } 
            }

            let result=document.querySelector(".result");
            let winnerName=document.querySelector(".winnerName");
            for(let i=0;i<8;i++){
              let b1=document.querySelector(`.${winningConditions[i][0]}`);
              let b2=document.querySelector(`.${winningConditions[i][1]}`);
              let b3=document.querySelector(`.${winningConditions[i][2]}`);
              if(b1.textContent==="X"&&b2.textContent==="X"&&b3.textContent==="X"){
                winnerName.innerText="X"
                 result.style.visibility="visible";
              }
              if(b1.textContent==="O"&&b2.textContent==="O"&&b3.textContent==="O"){
                winnerName.innerText="O"
                result.style.visibility="visible";
              }
            }
            console.log(steps);
            if(steps===9){
              let draw=document.querySelector(".result-draw");
              draw.style.visibility="visible";
             } 
        })
     });
       

      restart.addEventListener("click",()=>{
        btnNodes.forEach((btnNode)=>{
               btnNode.innerText="";
         });
      })

      let newgame=document.querySelector(".newgame");
      let result=document.querySelector(".result");
      newgame.addEventListener("click",()=>{
              result.style.visibility="hidden";
              btnNodes.forEach((btnNode)=>{
               btnNode.innerText="";
               count=0;
               steps=0;
               Xnode.classList.add("xclass");
               Onode.classList.remove("oclass");
         });
      })


      let newgame1=document.querySelector(".newgame1");
      let resultDraw=document.querySelector(".result-draw");
      newgame1.addEventListener("click",()=>{
             resultDraw.style.visibility="hidden";
              btnNodes.forEach((btnNode)=>{
               btnNode.innerText="";
               count=0;
               steps=0;
               Xnode.classList.add("xclass");
               Onode.classList.remove("oclass");
         });
      })

