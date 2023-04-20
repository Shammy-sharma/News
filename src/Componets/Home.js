import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
 const [Text, settext] = useState("write a anything")
 const textup = (event)=>{
settext(event.target.value)
 }
 const textuper = () =>{
  let newtext = Text.toUpperCase();
  settext(newtext);
 }
 const clear = () =>{
  let newtext = ""
  settext(newtext)
 }
 const copy = ()=>{
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value)
 }
 return(
 <>
<textarea className="form-control" id="mybox" rows="8" value={Text} onChange={textup}></textarea>
<button onClick={textuper}>convert to uppercase </button>
<button onClick={copy}>Copy </button>
<button onClick={clear}>Clear Text </button>

    </>
  
  )
}

