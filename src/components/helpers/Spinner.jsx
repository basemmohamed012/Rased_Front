import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'


const override = {
    margin: '6px'
}

export const Spinner = ({loading}) => {
    return (
        <div className="flex items-center justify-center min-h-screen animate-fadeIn">
            <PuffLoader 
            color="#16423C"
            loading={loading}
            // cssOverride={override}
            size={100}
            />
        </div>
    )
}