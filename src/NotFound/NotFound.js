import React from 'react';

const NotFound = () => {
   const style ={
       color: "tomato", textAlign:'center',
       display: 'flex', justifyContent: "center",
       alignItems: "center"
   }
    return (
      <div style={style}>
        <div>
          <h1>404</h1>
          <h1>Page not found</h1>
        </div>
      </div>
    );
};

export default NotFound;