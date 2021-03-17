import SearchForm from '../SearchForm';
import WordDefinitions from '../WordDefinitions';
import WordsList from '../WordsList';
import wordnikLogo from '../../images/wordnik_badge_a2.png';
import { appStyle, headerStyle, footerStyle, contentStyle } from './style';

export default function App() {
  return (
    <main className={appStyle}>
      <header className={headerStyle}>
        <h1>Dictionary App</h1>
      </header>
      <section className={contentStyle}>
        <div className="words-list">
          <WordsList />
        </div>
        <div className="search">
          <SearchForm />
          <WordDefinitions />
        </div>
      </section>
      <footer className={footerStyle}>
        <a href="https://www.wordnik.com/">
          <img src={wordnikLogo} alt="Wordnik Attribution Logo" />
        </a>
      </footer>
    </main>
  );
}
