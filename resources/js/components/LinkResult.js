import React    from "react";
import ReactDom from "react-dom";
import {ShareSocial} from 'react-share-social'

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export default function LinkResult () {
    return (
        <>
            <div className="mb-3 w-100">
                <label htmlFor="link" className="form-label h2">Your short URL :</label>
                <div className="input-group mb-3">
                    <input id="link" type="text" className="form-control" disabled/>
                    <button className="btn btn-primary text-white" type="button">Copy</button>
                </div>
                dsq
                <ShareSocial
                    style={style}
                    url ="url_to_share.com"
                    socialTypes={['facebook','twitter','reddit','linkedin']}
                />
            </div>
        </>
    )
}

if (document.getElementById('linkResult')) {
    const el = document.getElementById('linkResult')
    const props = Object.assign({}, el.dataset)
    ReactDom.render(<LinkResult {...props} />, el)
}
