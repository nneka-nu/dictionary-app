import { useEffect, useRef, useState } from 'react';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateSearchTerm } from '../../store/searchTerm';
import { addWordToHistory } from '../../store/history';
import { formStyle } from './style';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const globalSearchTerm = useAppSelector((state) => state.searchTerm);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;
    dispatch(updateSearchTerm(searchTerm));
    dispatch(addWordToHistory(searchTerm));
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    setSearchTerm(globalSearchTerm);
  }, [globalSearchTerm]);

  return (
    <form className={formStyle}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="clear-icon">
        <HighlightOffRoundedIcon onClick={clearSearchTerm} />
      </div>
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}
