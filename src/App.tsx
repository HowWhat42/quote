import { useEffect, useState } from 'react';
import quoteBg from './assets/bg-image-random-quote.svg'
import linkIcon from './assets/link.svg'
import regroupIcon from './assets/Regroup.svg'

export interface Quote {
  _id:          string;
  content:      string;
  author:       string;
  tags:         string[];
  authorSlug:   string;
  length:       number;
  dateAdded:    string;
  dateModified: string;
}


function App() {
  const [quote, setQuote] = useState<Quote>()

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const copyToClipboard = () => {
    if(!quote) return

    navigator.clipboard.writeText(quote.content)
  }

  return (
    <div className='bg-dark h-screen w-full flex flex-col justify-center items-center gap-4'>
      {quote ? <div className="bg-grey relative flex flex-col items-center rounded-xl max-w-lg xl:max-w-xl px-8 py-10 overflow-hidden">
        <img className='absolute bottom-0 right-0' src={quoteBg} alt="quote background" />
        <h2 className="text-white mb-2">{quote.author}</h2>
        <div className='flex gap-2 mb-8'>
          {quote.tags.map((tag, index) => (
            <h3 className='text-[10px] text-accent px-2 py-1 rounded-full border border-accent' key={index}>{tag}</h3>
          ))}
        </div>
        <h1 className="text-primary text-2xl text-center">"{quote.content}"</h1>
      </div> : <h1 className='text-white text-2xl'>Loading...</h1>}
      <div className='border-2 border-grey flex items-center rounded-xl'>
        <button onClick={fetchQuote} className='py-2 px-3 hover:bg-primary rounded-l-xl border-r-2 border-grey'>
          <img src={regroupIcon} alt="regroup icon" />
        </button>
        <button onClick={copyToClipboard} className='py-2 px-3 hover:bg-primary rounded-r-xl'>
          <img src={linkIcon} alt="link icon" />
        </button>
      </div>
    </div>
  )
}

export default App
