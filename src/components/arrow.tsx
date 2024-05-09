'use client'
import style from '../styles/home.module.css';

export default function Arrow() {
    const scrollToBottom = () => {
        const backgroundImage = document.querySelector(`.${style.home}`);

    // Ensure that the background image element exists
    if (backgroundImage) {
      // Get the height of the background image
      const bgImageHeight = backgroundImage.clientHeight;
      // Scroll the page to the bottom of the background image
      window.scrollTo({
        top: bgImageHeight + 30,
        behavior: 'smooth' // Smooth scrolling behavior
    });
    } else{
        console.log('Not working')
    }
    };

    return (
        <div className={style.arrow}>
            <svg width="50" height="200" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={scrollToBottom}>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#000000"></path>
            </svg>
        </div>
    )
}