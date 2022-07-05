import React from 'react';

export function Image(props) {
      return (
        <div>
      <img src={props.src} alt={props.alt} width={'35%'} height={'250vh'}/>
        </div>
      );
    }
    export default Image;