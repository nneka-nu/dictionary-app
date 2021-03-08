import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../store';
import Tabs from '../Tabs';
import { listStyle } from './style';

export default function WordsList() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const history = useAppSelector((state) => state.history);
  const vocab = useAppSelector((state) => state.vocab);
  const tabData = useMemo(() => {
    return [
      { label: 'history', count: history.length },
      { label: 'vocab', count: vocab.length },
    ];
  }, [history.length, vocab.length]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  useEffect(() => {
    if (vocab.length > 0) setActiveTabIndex(1);
  }, [vocab]);

  const ListItem = () => {
    const words = activeTabIndex === 0 ? history : vocab;

    return (
      <>
        {words.map((word, index) => (
          <li key={index}>
            <button type="button">{word}</button>
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <Tabs
        activeTabIndex={activeTabIndex}
        data={tabData}
        onTabClick={handleTabClick}
      />
      <ul className={listStyle}>
        <ListItem />
      </ul>
    </div>
  );
}
