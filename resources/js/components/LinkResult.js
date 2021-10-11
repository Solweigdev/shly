import React    from "react";
import ReactDom from "react-dom";

export default function LinkResult () {
    return (
        <>
            <div className="mb-3 w-100">
                <label htmlFor="link" className="form-label h2">Your short URL :</label>
                <div className="input-group mb-3">
                    <input id="link" type="text" className="form-control" disabled/>
                    <button className="btn btn-primary text-white" type="button">Copy</button>
                </div>
            </div>
        </>
    )
}

if (document.getElementById('linkResult')) {
    const el = document.getElementById('linkResult')
    const props = Object.assign({}, el.dataset)
    ReactDom.render(<LinkResult {...props} />, el)
}
