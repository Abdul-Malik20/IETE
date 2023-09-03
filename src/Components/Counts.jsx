import React from 'react';
import CountUp from 'react-countup';

const CounterSection = () => {
    return (
        <>
            
                
                    <i><div className="row counters" style={{backgroundColor :'#D4E2D4',fontSize:'40px'}}>
                        <div className="col-lg-3 col-6 text-center" style={{color:'#D71313'}}>
                            <CountUp end={12060} duration={5} />
                            <strong><p>Students</p></strong>
                        </div>
                        <div className="col-lg-3 col-6 text-center" style={{color:'#D71313'}}>
                            <CountUp end={13592} duration={9} />
                            <strong><p>Staff</p></strong>
                        </div>
                        <div className="col-lg-3 col-6 text-center" style={{color:'#D71313'}}>
                            <CountUp end={42} duration={10} />
                            <strong><p>Events</p></strong>
                        </div>
                        <div className="col-lg-3 col-6 text-center" style={{color:'#D71313'}}>
                            <CountUp end={15} duration={17} />
                           <strong> <p>Colleges</p></strong>
                        </div>
                    </div></i>
                        <br/><hr/>
                
            
            
        </>
    );
};

export default CounterSection;
