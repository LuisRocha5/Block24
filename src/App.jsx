import puppyList from './data.js';
import {useState} from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      <p>{ featPupId && <p>{ featPupId }</p> } </p>
      
      {puppies.map((puppy) => {
        return (
          <p onClick={() => {setFeatPupId(puppy.id)}}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;