import React from 'react';
import './ScrollDownArrow.scss';
import { FaChevronDown } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'


const ScrollDownArrow: React.FC = () => {
    const scrollDownOneScreen = () => {
        scroll.scrollMore(window.innerHeight);
    }

    const visibility = window.scrollY > 100 ? 'hidden' : 'visible';

    return (
            <FaChevronDown style={{ visibility }} className="scroll-down-arrow" onClick={scrollDownOneScreen} />
    );
};

export default ScrollDownArrow;
