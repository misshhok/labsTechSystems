import React from 'react';

const Desc = ({description, ...props}) => {
  return (
    <div {...props}>
      {description}
    </div>
  );
};

export default Desc;