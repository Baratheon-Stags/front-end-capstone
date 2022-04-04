import React from 'react';

const AddReview = ({ productId, characteristics, discardHandler}) => {
  console.log(characteristics);
  return (
    <>
      <input type="text" placeholder="Example: Best purchase ever!" />
      <input type="text" placeholder="Why did you like the product or not?" />
      Minimum required characters left: [##]
      <input type="text" placeholder="Example: jackson11!" />
      For privacy reasons, do not use your full name or email address
      <input type="text" placeholder="Example: jackson11@email.com" />
      <input type="text" placeholder="Photo URLs" />
      <div id="recommend">
        Would you recommend this product?
        <input type="radio" name="yes" value="yes" />
        <input type="radio" name="no" value="no" />
      </div>
      {Object.keys(characteristics).map((characteristic) => (
        <div key={characteristic} id="characteristics">
          {characteristic}
          1
          <input type="radio" value="1" />
          2
          <input type="radio" value="2" />
          3
          <input type="radio" value="3" />
          4
          <input type="radio" value="4" />
          5
          <input type="radio" value="5" />
        </div>
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={() => discardHandler(false)}>Discard</button>
    </>
  );
};

export default AddReview;
