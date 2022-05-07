import React, { useState, useEffect } from 'react'

const Topbar = ({ onExplore }) => {
    const [url, setUrl] = useState('');

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topbar-wrapper">
                    <form className="download-url-wrapper">
                        <input className="download-url-input" type="text" name="url" value={url} onChange={(evt) => setUrl(evt.target.value)}></input>
                        <button className="download-url-button button" type="button" onClick={()=>onExplore(url)}>Explore</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Topbar;