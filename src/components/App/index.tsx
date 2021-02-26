import SearchForm from '../SearchForm';
import WordDefinitions from '../WordDefinitions';
import WordsList from '../WordsList';
import { appStyle } from './style';

export default function App() {
  return (
    <main className={appStyle}>
      <section className="words-list">
        <WordsList />
      </section>
      <section className="search">
        <SearchForm />
        <WordDefinitions />
      </section>
    </main>
  );
}
