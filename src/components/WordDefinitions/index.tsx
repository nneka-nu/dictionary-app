import { useAppDispatch, useAppSelector } from '../../store';
import { addWordToVocab } from '../../store/vocab';
import { capitalCaseText } from '../../helpers';
import { definitionsStyle } from './style';

export default function WordDefinitions() {
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const dispatch = useAppDispatch();

  return (
    <div className={definitionsStyle}>
      <header>
        <h1>{searchTerm && capitalCaseText(searchTerm)}</h1>
        <button
          type="button"
          onClick={() => dispatch(addWordToVocab(searchTerm))}
        >
          Save Word
        </button>
      </header>
      <p>definition text</p>
    </div>
  );
}
