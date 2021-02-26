import { useState } from 'react';
import Tabs from '../Tabs';
import { listStyle } from './style';

// TODO capital case words before storing in history or vocab list
export default function WordsList() {
  const [words, setWords] = useState<string[]>(() => {
    // lazy init from localstorage to saved history
    return ['truthiness', 'shambles'];
  });

  const handleTabClick = () => {
    setWords(['cables', 'liquid']);
  };

  return (
    <div>
      <Tabs
        data={[
          { text: 'history', count: 0 },
          { text: 'vocab', count: 0 },
        ]}
        onTabClick={handleTabClick}
      />
      <ul className={listStyle}>
        {words.map((word, index) => (
          <li key={index}>
            <button type="button">{word}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
