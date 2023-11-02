import React from 'react';

function Title({ text, textColor }) {
    return (
        <div className={`sticky top-0 z-10 flex items-center pb-[3rem] pt-8`}>
            <h1 className={`text-2xl font-roboto font-bold ${textColor}`}>
                {text}
            </h1>
        </div>
    );
}

export default Title;
