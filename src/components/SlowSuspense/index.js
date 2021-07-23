import { useState, Suspense, useEffect } from "react";

const SlowSuspense = ({children, fallback = null}) =>{
    const [show, setShow] = useState(true)

    useEffect(()=>{
        setTimeout(()=> setShow(false), 3000)
    },[])

    return (
        <div className = 'loader'>
            {show && fallback}
            <Suspense fallback = {fallback}>
                {children}
            </Suspense>
        </div>
    )
}

export default SlowSuspense; 