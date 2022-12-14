import { useEffect, useState } from 'react';
import classes from '../whatsapp/wp-icon.module.scss';
import { FaWhatsapp } from 'react-icons/fa' ;

export const WpIcon = () => {
    const [isVisable, setIsVisable] = useState(true);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisable(true);
        } else {
            setIsVisable(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <a href='https://wa.me/message/E32XSP3MXIBFH1'
                type='button'
                className={`${classes.wp_icon} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
                aria-label='Right Align'
            >
            <FaWhatsapp aria-hidden='true' />
            </a>
        </div>
    );
};