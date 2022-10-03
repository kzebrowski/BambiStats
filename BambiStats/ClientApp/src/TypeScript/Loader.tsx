import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

interface Props {
    isShown: boolean
}

export const Loader: React.FC<Props> = (props: Props) => {
    let loaderStyle : React.CSSProperties = {
        height: "100px",
        width: "100px",
        position: "absolute",
        left: "50%",
        marginLeft: "-50px",
        top: "50%",
        marginTop: "-50px",
        zIndex: "100",
    };


    return (
        <React.Fragment>
            {props.isShown &&
            <>
            <div className="loading-fog" />
            <PulseLoader
                cssOverride={loaderStyle}
                size={20}
                color={'#C689C6'}
                loading={true}
            />
            </>}
        </React.Fragment>);
}