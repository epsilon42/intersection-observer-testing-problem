import React, {useState, useRef, useEffect} from 'react';
import './App.css';

const cardsData = [
  'card a',
  'card b',
  'card c',
  'card d',
  'card e',
  'card f',
  'card g',
  'card h',
  'card i',
  'card j',
  'card k',
  'card l'
];

const Card = ({title}) => <div className="Card">{title}</div>;

const App = () => {
  const [cardsToDisplay, setCardsToDisplay] = useState(3);

  const endOfListRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.25
    };

    const observer = new IntersectionObserver(entries => {
      // console.log(entries);
      // console.log(observer);
      if (entries[0].isIntersecting) {
        setCardsToDisplay(prev => prev + 1);
      }
    }, options);

    if (endOfListRef && endOfListRef.current) {
      observer.observe(endOfListRef.current);
    }
  }, [endOfListRef]);

  return (
    <div className="App">
      {cardsData.slice(0, cardsToDisplay).map(card => (
        <Card title={card} key={card} />
      ))}
      <div className="EndOfList" ref={endOfListRef} />
    </div>
  );
};

export default App;
