import { useState } from 'react';

function App() {
  const [clickedAnimal, setClickedAnimal] = useState(null);

  const handleClick = (animal) => {
    setClickedAnimal(animal);
  };

  const getAnimalFact = (animal) => {
    switch (animal) {
      case 'dolphin':
        return 'dolphins have been shown to give distinc names to each other!';
      case 'lobster':
        return 'Lobsters chew with their stomachs!';
      case 'starfish':
        return 'Starfish can have up to 40 arms!';
      default:
        return '';
    }
  };

  return (
    <div>
      <h1>Check an animal for a fun fact</h1>
      <div className="fun-fact">
        {clickedAnimal === 'dolphin' && <p className="fact">{getAnimalFact('dolphin')}</p>}
        {clickedAnimal === 'lobster' && <p className="fact">{getAnimalFact('lobster')}</p>}
        {clickedAnimal === 'starfish' && <p className="fact">{getAnimalFact('starfish')}</p>}
        <img src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-whale-dolphin-fish-swim-underwater-sea-for-decorative-png-image_9483601.png" width={200} alt="" onClick={() => handleClick('dolphin')} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Lobster_png_by_absurdwordpreferred_d2xqhvd.png" width={200} alt="" onClick={() => handleClick('lobster')} />
        <img src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-starfish-cartoon-sea-animal-png-image_13521932.png" width={180} alt="" onClick={() => handleClick('starfish')} />
      </div>
    </div>
  );
}

export default App;
