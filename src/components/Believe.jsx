import React, { forwardRef } from 'react';

const Believe = forwardRef((props, ref) => {
  return (
    <>
      <div id="how-to-buy" ref={ref} className="bg-gradient-to-br from-purple-800 to-blue-600 min-h-screen p-5 lg:p-10 text-white">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10 underline">
      Journey to Uranus: Acquire $ANUS
    </h1>

    <div className="space-y-10">
    <div className="journey-step bg-indigo-900 bg-opacity-80 shadow-xl p-5 lg:p-8 rounded-lg">
      <p>
      Here's a concise and beginner-friendly guide for purchasing the Uranus token (ANUS) on the Solana network. This guide will help you navigate the process smoothly, starting from setting up a wallet to making your first ANUS transaction.
      </p>
    </div>
      <div className="journey-step bg-indigo-900 bg-opacity-80 shadow-xl p-5 lg:p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-3">1. Prepare For Entry</h2>
        <p>
        Buy Solana (SOL) on any exchange. 
        </p>
        <p className="mt-4">
        Install <a href="https://solflare.com/" className="underline text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">Solflare Wallet</a>. Follow the instructions to set up your wallet and securely store your seed phrase.
        </p>
        <p className="mt-4">
        Withdraw SOL from your exchange to your Solflare wallet (Copy/paste your Solflare address).
        </p>
      </div>

      <div className="journey-step bg-indigo-900 bg-opacity-80 shadow-xl p-5 lg:p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-3">2. Get into Uranus ($ANUS)</h2>
        <p>
        Go to <a
        href="https://jup.ag/swap/SOL-ANUS_9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc"
        className="underline text-blue-300 hover:text-blue-200"
        style={{ wordWrap: 'break-word' }} 
        target="_blank"
        rel="noopener noreferrer"
      >
        Jupiter Exchange
      </a>
      to buy $ANUS. You'll be warned it's not on the strict list.
        </p>
        <p className="mt-4">
        Confirm you&apos;re not putting it in the wrong $ANUS. The token address should be <a href="https://solscan.io/token/9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc" className="underline text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc</a>.
        </p>
        
        <p className="mt-4">
        Hit "Connect Wallet" and select your Solflare wallet. 
        </p>
        
        <p className="mt-4">
        Click "Swap" to trade your $SOL for $ANUS.
        </p>
      </div>

      <div className="journey-step bg-indigo-900 bg-opacity-80 shadow-xl p-5 lg:p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-3">3. Keep pumping Uranus</h2>
        <p>
        Spread Uranus by sharing this link <a href="https://anusexplorer.com/" className="underline text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">https://anusexplorer.com/</a>
        </p>
        <p className="mt-4">
        Watch the charts as Uranus gets pumped on <a href="https://dexscreener.com/solana/cu4pxu7vh7cfgjmsfzfehpp9aj6fa7ciqdsbvs5hekzk" className="underline text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">DEX Screener</a>
        </p>
      </div>
    </div>

    <p className="mt-10 italic text-center">
      The revolution is underway, you’re still early. Uranus: it’s more than a load of hot air. It’s the downfall of the false rulers of humanity 🙂
    </p>
  </div>
</div>


      <div className="believe-video-section pb-20">
        <h1 className="text-[6vw] lg:text-5xl xl:text-6xl 2xl:text-7xl lg:px-[15vw] px-4 text-center text-white font-bold">
          The Story of The Shiba Inu Army Pumping Uranus
        </h1>
        <div className="flex justify-center mt-10">
          <iframe
            data-aos="zoom-in"
            src="https://www.youtube.com/embed/-KJZCYW_pN8?si=Au1JpegZCtG3UJGg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="lg:w-[50vw] lg:h-[28vw] w-[90vw] h-[50vw] xl:h-[30vw]"
          ></iframe>
        </div>
      </div>

      <div className="believe-section pb-20">
        <h1 className="text-[6vw] lg:text-5xl xl:text-6xl 2xl:text-7xl lg:px-[250px] px-4 leading-tight text-center text-white font-bold">
          The Memeifesto: Embrace the Wild Side of Crypto
        </h1>
        <p className="mt-8 mb-14 text-[3.5vw] lg:text-lg xl:text-xl 2xl:text-2xl lg:px-[33vw] px-4 text-white text-center">
          Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.
        </p>
        
        <a href="https://coinmarketcap.com/currencies/uranus-sol/" className="block mx-auto text-center py-3 px-8 bg-blue-500 text-lg lg:text-xl xl:text-2xl font-semibold text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Get Started
        </a>
      </div>
    </>
  );
});

export default Believe;
