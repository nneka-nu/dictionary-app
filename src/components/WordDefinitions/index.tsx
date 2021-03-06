import { definitionsStyle } from './style';

export default function WordDefinitions() {
  return (
    <div className={definitionsStyle}>
      <header>
        <h1>Word</h1>
        <button type="button">Save Word</button>
      </header>
      <p>definition text</p>
    </div>
  );
}
