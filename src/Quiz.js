import {useState} from "react";

import data from "./data.json";

function controller(risposta) {
    if (risposta == "Meloni") alert ("hai vinto"); 
    }

statoQuiz
    
function Opzione({daVisualizzare,statoQuiz,option}){
    return (
    <>
    <Input
    type="radio"
    value={daVisualizzare}
    onChange={option}
    disabled={statoQuiz===1}
    /> <label>{daVisualizzare}</label><br/>
    </>)
}

function Domanda({domanda,risposte,statoQuiz,option}){
    return (
        <>
    <p>{domanda}</p>
    {risposte.map((risposta)=>{        
        return(
            <Opzione
            daVisualizzare={risposta}
            statoQuiz={statoQuiz}
            option={option}
            />)})
    }
    </>
)}
      
export default function quiz() {
const [answer,setAnswer] = useState("");

const onOptionChange = (e) => {
    setAnswer(e.target.value);
};

return (
<>
<p> Chi e il primo ministro  </p>
 <input
  type="radio" 
  value ="meloni"
  checked={answer === "Meloni"}
  onChange={onOptionChange}
  />
 <label> Meloni</label>
 <br />
 <input type="radio" name="d1"  value ="salvini"/>
 <label> Salvini</label>
 <br />
 <input type="radio" name="d1" value ="mattarella"/>
 <label> Mattarella</label>
 <br />
 <input type="button" onclick="controllo()" value="premi per controllare la risposta" />


{data.domande.map((domanda) =>{
    return(
    <Domanda
    domanda={domanda.domanda}
    risposta={domanda.corretta}
    statoQuiz={fine}
    option={onOptionChange}
    />)
})}

 </>);
}