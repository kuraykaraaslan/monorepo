import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center select-none">
            <img
                src="/assets/img/gevrek.png"
                alt="Logo"
                className="h-12 w-12 mr-2"
                style={{ width: '3rem', height: '3rem' , userSelect: 'none'}}
            />
            <span className="font-bold select-none ml-1" style={{ fontSize: '2.5rem', userSelect: 'none' }}>
                Gevrek
            </span>
        </div>
    );
};

export default Logo;