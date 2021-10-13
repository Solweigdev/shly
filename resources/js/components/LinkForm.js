import React, {useEffect, useState} from "react";
import ReactDom                     from "react-dom";
import {useForm}                    from "react-hook-form";
import {yupResolver}                from '@hookform/resolvers/yup';
import * as yup                     from "yup";
import {toast, Toaster}             from "react-hot-toast";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";


const schema = yup.object().shape({url: yup.string().required()})

export default function LinkForm () {
    const [error, setError] = useState('')
    const [dataLink, setDataLink] = useState('')
    const [dataCopy, setDataCopy] = useState('')
    const {register, handleSubmit, watch, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    useEffect(() => {
    }, [setDataLink]);

    const onSubmit = async data => {
        try {
            const response = await axios.post('/api/generate-url', data)
            setDataLink(response.data.link)
        } catch (e) {
            console.error('e', e)
        }
    }

    const handleOpenLink = () => {
        window.open(dataLink.short, '_blank').focus();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(dataLink.short)
        toast.success("Url copied")
    }

    const renderResultForm = () => {
       if (dataLink !== '') {
           return (
               <>
                   <hr className="hr"/>
                   <div className="result-link">
                       <div className="result-link_content" onClick={handleCopy}>
                           <p className="result-link_content_title">{dataLink.short}</p>
                       </div>
                       <div className="ui left pointing label result-link_label">
                           Click to copy short link
                       </div>
                       <div className="result-link_media">
                           <div className="result-link_media_content">
                               <button className="ui button result-link_media_btn-link" type="submit" onClick={handleOpenLink}>Visite Url</button>
                               <button className="ui button" type="submit" onClick={handleCopy}>Copy Url</button>
                           </div>
                           <div class="result-link_media_btn">
                               <FacebookShareButton url={dataLink.short}>
                                   <FacebookIcon size={"3rem"}/>
                               </FacebookShareButton>
                               <FacebookMessengerShareButton appId={"276294581039920"}  url={dataLink.short}>
                                   <FacebookMessengerIcon size={"3rem"} />
                               </FacebookMessengerShareButton>
                               <TwitterShareButton url={dataLink.short}>
                                   <TwitterIcon size={"3rem"} />
                               </TwitterShareButton>
                               <LinkedinShareButton url={dataLink.short}>
                                   <LinkedinIcon size={"3rem"} />
                               </LinkedinShareButton>
                               <RedditShareButton url={dataLink.short}>
                                   <RedditIcon size={"3rem"} />
                               </RedditShareButton>
                           </div>
                       </div>

                   </div>

               </>
           )
       }
    }

    return (
        <>
            <div><Toaster position="bottom-center" /></div>
            <form id="link-form" className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Paste your long URL here</label>
                    <div className="ui action input">
                        <input type="text" placeholder="https://" {...register('url')} autoFocus/>
                        <button className="ui button" type="submit">Shorten</button>
                    </div>
                    {errors.url?.type === 'required' &&
                    <div className="ui error message">
                        You must enter a link in the field
                    </div>
                    }
                </div>
                {renderResultForm()}
            </form>
        </>
    )
}

if (document.getElementById('linkForm')) {
    const el = document.getElementById('linkForm')
    const props = Object.assign({}, el.dataset)
    ReactDom.render(<LinkForm {...props} />, el)
}
