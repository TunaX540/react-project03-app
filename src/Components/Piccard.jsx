import React from 'react'

export default function Piccard(props) {
    return (
        <>
            <div style={{ border: "2px solid purple", padding: "10px", display: "inline-block" }}>
                <img src={props.showimg} style={{ width: props.wi }} alt="" />
            </div>
        </>
    )
}
