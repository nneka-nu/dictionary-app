import { useMemo } from 'react';
import Tabs, { TabInfo } from '../Tabs';
import { useAppDispatch, useAppSelector } from '../../store';
import { addWordToHistory } from '../../store/history';
import { removeWordFromVocab } from '../../store/vocab';
import { updateSearchTerm } from '../../store/searchTerm';
import { WordsListTab, setActiveTab } from '../../store/activeTab';
import { listStyle } from './style';

export default function WordsList() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.activeTab);
  const history = useAppSelector((state) => state.history);
  const vocab = useAppSelector((state) => state.vocab);
  const tabData = useMemo(() => {
    let data: TabInfo[] = [];
    for (const tab in WordsListTab) {
      if (tab === WordsListTab.history) {
        data.push({ label: WordsListTab.history, count: history.length });
      } else {
        data.push({ label: WordsListTab.vocab, count: vocab.length });
      }
    }
    return data;
  }, [history.length, vocab.length]);

  const handleTabClick = (tabIndex: number) => {
    const tabNames = Object.keys(WordsListTab);
    let tab = WordsListTab.history;
    if (tabIndex === tabNames.indexOf(WordsListTab.vocab)) {
      tab = WordsListTab.vocab;
    }
    dispatch(setActiveTab(tab));
  };

  const handleWordClick = (word: string) => {
    dispatch(updateSearchTerm(word));
    if (activeTab === WordsListTab.history) {
      // Move word to the top of the History list
      dispatch(addWordToHistory(word));
    }
  };

  const ListItem = () => {
    const words = activeTab === WordsListTab.history ? history : vocab;

    return (
      <>
        {words.map((word, index) => (
          <li key={index}>
            <button
              type="button"
              title="Search"
              onClick={() => handleWordClick(word)}
            >
              {word}
            </button>
            {activeTab === WordsListTab.vocab && (
              <button
                type="button"
                className="delete"
                title="Delete"
                onClick={() => dispatch(removeWordFromVocab(word))}
              >
                X
              </button>
            )}
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <Tabs
        activeTabIndex={Object.keys(WordsListTab).indexOf(activeTab)}
        data={tabData}
        onTabClick={handleTabClick}
      />
      <ul className={listStyle}>
        <ListItem />
      </ul>
    </div>
  );
}
