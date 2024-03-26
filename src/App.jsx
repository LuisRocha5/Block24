import puppyList from './data.js';
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Is Cute: {featuredPup.isCute ? 'Yes' : 'No'}</li>
            <li>Owner ID: {featuredPup.ownerID}</li>
            <li>Tricks: {featuredPup.tricks.join(', ')}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;