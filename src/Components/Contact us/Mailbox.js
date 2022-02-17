import React from 'react'
import emailjs from 'emailjs-com'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './mailbox.scss'

toast.configure()
const Mailbox = () => {

    //service_id = service_587pf3l
    var data = {
        service_id: 'service_587pf3l',
        template_id: 'template_23h191p',
        user_id: 'user_hELCpT0dQpQDH7DoOQRso'
    };



    function sentMail(e) 
    {
        e.preventDefault();

        emailjs.sendForm(data.service_id, data.template_id, e.target, data.user_id)
        .then((result) => {
            toast('Your email has been sent !', {position: toast.POSITION.BOTTOM_RIGHT})
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            toast('Your email has been not sent !', {position: toast.POSITION.BOTTOM_RIGHT})
            console.log(error.text);
        });


    }

    return (
        <>
        <div className='mailbox_container'>

            <form onSubmit={sentMail}>

                <div className='mailboxTopRow'>

                    <div className='mailbox_left'>
                        <label> Name </label> <br/>
                        <input type={'text'} placeholder ='' name='name' required/>

                        <br/> <br/> <br/>

                        <label> Email </label> <br/>
                        <input type={'email'} placeholder ='' name='email' required/>

                    </div>

                    <div className='mailbox_right'>

                        <label> Phone </label> <br/>
                        <input type={'tel'} placeholder =''  name='phone' pattern='[0-9]{10}' required/>

                        <br/> <br/> <br/>

                        <label> Subject </label> <br/>
                        <input type={'text'} placeholder ='' name='subject' required/>
                    

                    </div>

                </div>

                <div className='mailboxBottomRow'>

                    <label> Message </label> <br/>
                    <textarea rows={7} name = 'message' required />

                    <br/> <br/>
                    
                    <button type='submit' className='buttonSend'> SEND ... </button>

                </div>

            </form>

        </div>

        </>
        
    )
}

export default Mailbox;