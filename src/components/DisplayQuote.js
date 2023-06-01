import { useEffect, useState } from 'react';

const DisplayQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const request = new Request('https://api.api-ninjas.com/v1/quotes?category=success');
        const response = await fetch(request, {
          method: 'GET',
          headers: { 'X-Api-Key': '81x3QDIAIXzfIStnphPuUA==pYOZ6Nz27aANhEBW' },
          contentType: 'application/json',
        });
        const data = await response.json();
        setQuote(data[0].quote);
      } catch (err) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);
  if (isLoading) {
    return (
      <p className="quote-paragraph">is loading...</p>
    );
  }
  if (hasError) {
    return (
      <p className="quote-paragraph">Something went wrong, try again</p>
    );
  }
  return (
    <p className="quote-paragraph">{quote}</p>
  );
};
export default DisplayQuote;
