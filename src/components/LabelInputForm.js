import React from 'react';

function LabelInputForm({labelName, name, type, value, inputFunction}) {
    return (
        <>
            <label htmlFor={name}>
                {labelName}
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => inputFunction(e.target.value)}
                />
            </label>
        </>
    );
}

export default LabelInputForm;