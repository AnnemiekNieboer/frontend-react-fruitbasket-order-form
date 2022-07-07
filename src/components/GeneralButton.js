import React from 'react';

function GeneralButton({buttonType, nameValue, ...rest}) {
    return (
        <button
            type={buttonType}
            className="general-button"
            {...rest}>
            {nameValue}
        </button>
    );
}

export default GeneralButton;