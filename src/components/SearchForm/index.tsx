import { formStyle } from './style';

export default function SearchForm() {
  return (
    <form className={formStyle}>
      <input type="text" placeholder="Enter a word"></input>
      <button type="submit" onClick={(e) => e.preventDefault()}>
        Search
      </button>
    </form>
  );
}
