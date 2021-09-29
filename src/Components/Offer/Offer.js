import React, { useState } from 'react';
import { useSpring, animated,config } from 'react-spring'

const Offer = () => {
    const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })
 
  

    return (
        <div className="container-fluid text-danger offer">
            <animated.h1  style={props}> 25% Off For New Members</animated.h1>
        </div>
    );
};

export default Offer;