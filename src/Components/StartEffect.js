import React from 'react'
import './startEffect.css'

function StartEffect (){


    window.addEventListener('DOMContentLoaded', ()=> 
    {
        let intro = document.querySelector('#intro');
        let comNameIntro = document.querySelector('.loho-header');
        var logoSpan = document.querySelectorAll('.logo');

        setTimeout(() => 
        {
            console.log(logoSpan)
            logoSpan.forEach((span,index)=>{
                setTimeout(() => 
                {
                    span.classList.add('active');
                },(index+1)*300)
            })

            setTimeout(() =>
            {
                logoSpan.forEach((span,index)=>{
                    setTimeout(() => 
                    {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    },(index+1) * 200)
                })
            }, 3000)

            setTimeout(() =>
            {
                intro.style.top = "-100vh";
                intro.style.opacity = "-0.01";
            },4000)

        })
        
    })

    return (
        <div>
            <div id="intro">
                <h1 className="logo-header">
                    <span className="logo">My Max &nbsp;</span><span className="logo">Holdings &nbsp;</span><span className="logo">Private &nbsp;</span><span className="logo">Limited .</span>
					<br/><br/>
					<center><span className="logo text"> Leading POS software Company in Sri Lanka. </span></center> 
				</h1>
            </div>
        </div>
    )
}

export default StartEffect
