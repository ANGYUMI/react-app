import React from 'react';


export const Template = (props) => {
    return (
        <div>
        <div>해야할 작업</div>
        <div>할일 목록</div>
        {props.children}
        </div>
    )
}