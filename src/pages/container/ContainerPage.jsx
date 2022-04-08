import React from 'react';

const ContainerPage = ({children}) => {
    return (
        <div className="containerPage">
            {children ? children : null}
        </div>
    );
};

export default ContainerPage;
