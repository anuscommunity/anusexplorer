import React from 'react';

import copyIcon from '../assets/copy.svg'; // Adjust with actual path or URL
import dextoolsIcon from '../assets/dextools.svg'; // Adjust with actual path or URL
import telegramIcon from '../assets/telegram-logo-svgrepo-com.svg'; // Adjust with actual path or URL
import webLogo from "../assets/web-logo.webp";
import twitterIcon from '../assets/x.svg'; // Adjust with actual path or URL

function Footer() {
    const contractAddress = "9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert('Contract address copied to clipboard!');
    };

    return (
        <>
            <div className="footer bg-black pt-16 pb-16 lg:pt-24 lg:pb-24 flex flex-col items-center">
                <img src={webLogo} alt="Website Logo" className="mb-8 lg:w-[9vw] lg:h-[7vw] w-[30vw]" />
                <div className="social-links flex gap-4 mb-4">
                    <a href="https://x.com/anuscoinsol" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="h-8 w-8" />
                    </a>
                    <a href="https://t.me/UranusCommunity" target="_blank" rel="noopener noreferrer">
                        <img src={telegramIcon} alt="Telegram" className="h-8 w-8" />
                    </a>
                    <button onClick={copyToClipboard} title="Copy contract address">
                        <img src={copyIcon} alt="Copy" className="h-8 w-8" />
                    </button>
                    <a href="https://www.dextools.io/app/en/solana/pair-explorer/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?t=1711759732219" target="_blank" rel="noopener noreferrer">
                        <img src={dextoolsIcon} alt="Dextools" className="h-8 w-8" />
                    </a>
                </div>
                <p className="text-white text-center">
                    Please note anusrocket.com is the new site. Please contact Info@anusrocket.com for any queries.
                </p>
            </div>
        </>
    );
}

export default Footer;
