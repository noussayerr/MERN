import React from 'react';
    
const MyNewComponent = (prop) => {
    return(
        <div>
            { prop.children }
            <h1>
                { prop.her }
            </h1>
            {prop.fin}
        </div>
    );
}
    
export default MyNewComponent;