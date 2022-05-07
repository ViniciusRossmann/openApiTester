import React, { useState } from "react";
import RequestModal from "./RequestModal";

const Operation = ({ data }) => {
    const [open, setOpen] = useState(false);

    return (
        <span>
            <div className={`opblock opblock-${data.method.toLowerCase()}`}>
                <div className={`opblock-summary opblock-summary-${data.method.toLowerCase()}`}><button
                    aria-label="get ​/api​/int-app​/faturamentos​/vendas"
                    aria-expanded="false"
                    className="opblock-summary-control"
                    onClick={() => setOpen(true)}>
                    <span
                        className="opblock-summary-method">{data.method.toUpperCase()}</span><span
                            className="opblock-summary-path"
                            data-path="/api/int-app/faturamentos/vendas">
                        <a className="nostyle">
                            <span>{data.path}</span>
                        </a>
                    </span>
                    <div className="opblock-summary-description">{data.desc.summary}</div>
                </button></div><noscript></noscript>
            </div>
            <RequestModal data={data} open={open} onClose={() => setOpen(false)} />
        </span>
    )
}

export default Operation;