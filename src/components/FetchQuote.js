import { useEffect, useState } from 'react';
import Quote from './Quote';

const FetchQuote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [quote, setQuote] = useState();
  const FetchQuote = () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
      method: 'GET',
      contentType: 'application/json',
      headers: { 'X-Api-Key': 'MMVkAqOINuA9Fyq6y2pAzg==Dmpq6bwqITlVeT9l' },
      mode: 'cors',
      cache: 'default',
    })
      .then(setLoading(false))
      .then((res) => res.json())
      .then((json) => {
        if (json[0]) setQuote(json[0]);
        setError(false);
      })
      .catch(setError(true));
  };

  useEffect(() => { if (!quote) FetchQuote(); });

  return (
    <div className="col-6">
      {loading && 'Loading...'}
      {error && (
      <div className="text-danger text-center" style={{ fontSize: '1.5em', fontWeight: 'Bold' }}>
        Quote unavailable ⚠
      </div>
      )}
      {quote && <Quote quote={quote.quote} author={quote.author} />}
    </div>
  );
};

export default FetchQuote;
