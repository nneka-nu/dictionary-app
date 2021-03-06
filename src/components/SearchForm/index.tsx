import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { formStyle } from './style';

async function getDefinitions() {
  const response = await axios.get(
    `https://api.wordnik.com/v4/word.json/shamble/definitions?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`
  );
  return response.data;
}

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const { status, data } = useQuery('definitions', getDefinitions, {
    enabled: false,
  });

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  if (data) {
    console.log({ data });
    // TODO if zero data, show no defns found error.
    // grab defn from source that includes ahd or wordnet. if zero found, show all data.
  }

  if (status === 'error') {
    console.log('status: error');
  }

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
