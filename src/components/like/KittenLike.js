import React, { useRef } from "react";
import './index.css';

const KittenLike = () => {
    const kittenRef = useRef();

    const confettiAmount = 60;
    const confettiColors = [
        '#7d32f5',
        '#f6e434',
        '#63fdf1',
        '#e672da',
        '#295dfe',
        '#6e57ff'
    ];

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const createConfetti = (to) => {
        let elem = document.createElement('i'),
            set = Math.random() < 0.5 ? -1 : 1;
        elem.style.setProperty('--x', random(-260, 260) + 'px');
        elem.style.setProperty('--y', random(-160, 160) + 'px');
        elem.style.setProperty('--r', random(0, 360) + 'deg');
        elem.style.setProperty('--s', random(.6, 1));
        elem.style.setProperty('--b', confettiColors[random(0, 5)]);
        to.appendChild(elem);
    };

    const handleKittenClick = (e) => {
        e.preventDefault();


        let elem = kittenRef.current;
        let number = kittenRef.current.children[1].textContent;

        if(!elem.classList.contains('animation')) {
            elem.classList.add('animation');

            for(let i = 0; i < confettiAmount; i++) {
                createConfetti(elem);
            }

            setTimeout(() => {
                elem.classList.add('confetti');
                setTimeout(() => {
                    elem.classList.add('liked');
                    elem.children[1].textContent = parseInt(number) + 1;
                }, 400);
                setTimeout(() => {
                    elem.querySelectorAll('i').forEach(i => i.remove());
                }, 600);
            }, 260);
        } else {
            elem.classList.remove('animation', 'liked', 'confetti');
            elem.children[1].textContent = parseInt(number) - 1;
        }
    };

    return (
        <a ref={ kittenRef } onClick={ handleKittenClick } href="#" className="paw-button">
            <div className="text">
                <svg>
                    <use xlinkHref="#heart" />
                </svg>
                <span>Like</span>
            </div>
            <span>12</span>
            <div className="paws">
                <svg className="paw">
                    <use xlinkHref="#paw" />
                </svg>
                <div className="paw-effect">
                    <div></div>
                </div>
                <svg className="paw-clap">
                    <use xlinkHref="#paw-clap" />
                </svg>
            </div>
        </a>
    );
};

export default KittenLike;