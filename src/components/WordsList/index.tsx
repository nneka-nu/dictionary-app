import { useState } from 'react';
import { useAppSelector } from '../../store';
import Tabs from '../Tabs';
import { listStyle } from './style';

enum TabHeadings {
  history = 'history',
  vocab = 'vocab',
}

export default function WordsList() {
  const [activeTab, setActiveTab] = useState<TabHeadings>(TabHeadings.history);
  const history = useAppSelector((state) => state.history);
  const vocab = useAppSelector((state) => state.vocab);
  const tabData = [
    { text: TabHeadings.history, count: history.length },
    { text: TabHeadings.vocab, count: vocab.length },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab.toLowerCase() as TabHeadings);
  };

  const ListItem = () => {
    const words = activeTab === TabHeadings.history ? history : vocab;

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
      <Tabs data={tabData} onTabClick={handleTabClick} />
      <ul className={listStyle}>
        <ListItem />
      </ul>
    </div>
  );
}
