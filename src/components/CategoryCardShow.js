import React from 'react';

const CategoryCardShow = (props) => {
  return (
    <>
    <div>
      <h2>{ props.name}</h2>
    </div>
    <div>
      <h3>By: { props.author}</h3>
    </div> 
     <div>
     <h3>{ props.note}</h3>
   </div>
   </>
  );
}

export default CategoryCardShow;