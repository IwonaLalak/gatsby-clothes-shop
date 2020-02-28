import React from 'react';

const JsonElement = ({id,value,label,rows}) => {

    const copyTextarea = (id) => {
        const el = document.getElementById(id);
        el.select();
        document.execCommand('copy');
    };

    return (
        <>
            <h5>{label}
                <button
                onClick={() => copyTextarea(id)}>copy</button>
            </h5>
            <textarea style={{width: "100%"}}
                      id={id}
                      rows={rows}
                      value={JSON.stringify(value,null,2)}
            />
        </>
    );
};

export default JsonElement;