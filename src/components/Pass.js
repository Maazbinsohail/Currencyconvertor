import  { useCallback, useEffect, useRef, useState } from "react";


function Pass() {
  const [lenght, setLenght] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook

  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllow) str += "0123456789";
  if (charAllow) str += "!@#$%^&*()_+`~";
  for (let i = 1; i <= lenght; i++) {
    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)
  }
 setPassword(pass)

  }, [
    lenght,
    numberAllow,
    charAllow,
    setPassword,
  ]);
     
 const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
   window.navigator.clipboard.writeText(password);
 },[password])



useEffect(()=>{
  generatePassword();
},[lenght,numberAllow,charAllow, generatePassword]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
       <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4">
        <input type="text"  value = {password} className="outline-none w-full p-1 px-3" placeholder="Password" readOnly ref={passwordRef}  />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
       <input
       className="cursor-pointer"
       type="range" 
       min={8} max={30} value={lenght} onChange={(e)=> setLenght(e.target.value) }/>
       <label>length: {lenght}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" id="numberInput" checked={numberAllow} onChange={()=> setNumberAllow((prev) => !prev) } className="cursor-pointer" />
       <label htmlFor="nuberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
       <input type="checkbox" id="charInput" checked={charAllow} onChange={()=> setCharAllow((prev) => !prev) } className="cursor-pointer" />
       <label htmlFor="charInput">Characters</label>
      </div>
      </div>
      
      </div>
    </>
  );
}

export default Pass;
