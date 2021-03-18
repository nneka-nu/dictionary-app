import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateSearchTerm } from '../../store/searchTerm';
import { addWordToHistory } from '../../store/history';
import { formStyle } from './style';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const globalSearchTerm = useAppSelector((state) => state.searchTerm);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(updateSearchTerm(searchTerm));
    dispatch(addWordToHistory(searchTerm));
  };

  useEffect(() => {
    setSearchTerm(globalSearchTerm);
  }, [globalSearchTerm]);

  return (
    <form className={formStyle}>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
