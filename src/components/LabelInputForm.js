import React from 'react';

function LabelInputForm({labelName, nameValue, type, value, inputFunction, labelNameUnderneath, ...rest}) {
    return (
        <>
            <label htmlFor={nameValue}>
                {labelName}
                <input
                    className="input-field"
                    type={type}
                    id={nameValue}
                    name={nameValue}
                    value={value}
                    onChange={(e) => inputFunction(e.target.value)}
                    {...rest}
                />
                {labelNameUnderneath}
            </label>
        </>
    );
}

export default LabelInputForm;