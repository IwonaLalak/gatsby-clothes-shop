import React from 'react';
import {Button, FormControl} from "react-bootstrap";

const JsonElement = ({id, value, label, rows}) => {

    const copyTextarea = (id) => {
        const el = document.getElementById(id);
        el.select();
        document.execCommand('copy');
    };

    return (
        <>
            <h5>
                <span style={{marginRight:5}}>{label}</span>
                <Button variant={'dark'} size={'sm'}
                        onClick={() => copyTextarea(id)}>copy</Button>
            </h5>
            <FormControl
                as={'textarea'}
                style={{width: "100%"}}
                className={'from-control'}
                id={id}
                rows={rows}
                value={JSON.stringify(value, null, 2)}
            />
        </>
    );
};

export default JsonElement;