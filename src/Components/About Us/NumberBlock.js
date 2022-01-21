import React, {useState} from 'react'
import './NumberBlock.scss'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';


const NumberBlock = ({ className, ...rest }) => {

    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <>

            <div className='NumberBlock_Container'>

                <h1> Our Current State </h1>

                <div className='Numberbox_Container'>

                    <div className='year_contaner'>
                        <h1 > 2021 </h1>
                        <h3> Year Established </h3>
                        <div></div>
                    </div>

                    <div className='customers_contaner'>
                         <h1> <CountUp end={5} redraw={true}>
                            {({ countUpRef }) => {
                            return (
                            <VisibilitySensor
                                active={!viewPortEntered}
                                onChange={isVisible => {
                                if (isVisible) {
                                    setViewPortEntered(true);
                                }
                                }}
                                delayedCall
                            >
                                <h4 className={className} ref={countUpRef} />
                            </VisibilitySensor>
                            );
                        }}
                        </CountUp>
                        </h1>
                        <h3> Products </h3>
                    </div>

                    <div className='customers_contaner'>
                         <h1> <CountUp end={36} redraw={true}>
                            {({ countUpRef }) => {
                            return (
                            <VisibilitySensor
                                active={!viewPortEntered}
                                onChange={isVisible => {
                                if (isVisible) {
                                    setViewPortEntered(true);
                                }
                                }}
                                delayedCall
                            >
                                <h4 className={className} ref={countUpRef} />
                            </VisibilitySensor>
                            );
                        }}
                        </CountUp>
                        </h1>
                        <h3> Customers </h3>
                    </div>

                    <div className='customers_contaner'>
                         <h1> <CountUp end={39} redraw={true}>
                            {({ countUpRef }) => {
                            return (
                            <VisibilitySensor
                                active={!viewPortEntered}
                                onChange={isVisible => {
                                if (isVisible) {
                                    setViewPortEntered(true);
                                }
                                }}
                                delayedCall
                            >
                                <h4 className={className} ref={countUpRef} />
                            </VisibilitySensor>
                            );
                        }}
                        </CountUp>
                        </h1>
                        <h3> Customers </h3>
                    </div>

                </div>


            </div>

        </>
    )
}

export default NumberBlock;