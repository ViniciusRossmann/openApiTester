import React, { useState } from "react";
import Operation from './Operation';

const OperationBlock = ({path, routes}) => {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        setExpanded(!expanded);
    }

    return (
        <span>
            <div className="opblock-tag-section">
                <h3 className="opblock-tag" onClick={toggle}>
                    <a className="nostyle"><span>{path}</span></a>
                    <small>Operations: {routes.length}</small>
                    <div></div>
                    <button className="expand-operation">
                        <svg className="arrow" width="20" height="20" aria-hidden="true" focusable="false">
                            { expanded ? (
                                <use href="#large-arrow-up" xlinkHref="#large-arrow-up"></use>
                            ) : (
                                <use href="#large-arrow-down" xlinkHref="#large-arrow-down"></use>
                            ) }
                        </svg>
                    </button>
                </h3>
                {expanded &&
                    <div className="no-margin">
                        <div className="operation-tag-content">
                            {routes.map((route, id) => (
                                <Operation key={id} data={route}/>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </span>
    )
}

export default OperationBlock;