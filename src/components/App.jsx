import React from "react";
import emojipedia from "../emojipedia";
import Info from "./Info";

const createNewMeaning = (newMeaning) =>  {
  return (<Info 
  key = {newMeaning.id}
  meaning = {newMeaning.meaning.substring(0, 100)}
  />)

  
}

const App = () => {
  return (
    <div>
      <h1>This is only a test</h1>
      <p>Only a test</p>
      {emojipedia.map(createNewMeaning)}
    
 
    </div>
  );
};

<div>
  <App />
  <Info />
</div>;

export default App;
