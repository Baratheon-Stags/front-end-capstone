import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Backdrop } from './styled/ReviewModal.styled';
import FlexContainer from './styled/FlexContainer.styled';
import Input from './styled/Input.styled';

const AddReview = ({ productId, characteristics, productName, onDiscard}) => {
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [newCharacteristics, setCharacteristics] = useState({});
  const [validated, setValidated] = useState({
    rating: 0,
    summary: 0,
    body: 0,
    recommend: 0,
    name: 0,
    email: 0,
    characteristics: 0,
  });

  const validateInputs = () => {
    if (rating !== 0) {
      validated.name = 1;
    }
    if (summary.length > 0) {
      validated.summary = 1;
    }
    if (body.length > 50) {
      validated.body = 1;
    }
    if (recommend === true || recommend === false) {
      validated.recommend = 1;
    }
    if (name.length > 0) {
      validated.name = 1;
    }
    if (email.length > 0) {
      validated.email = 1;
    }
    if (Object.values(newCharacteristics).length === Object.keys(characteristics).length) {
      validated.characteristics = 1;
    }
    setValidated({ ...validated});
  }

  const handleCharacteristicChange = (key, value) => {
    newCharacteristics[key] = value;
    setCharacteristics({ ...newCharacteristics });
  }

  const handleReviewSubmit = () => {
    validateInputs();
    if (Object.values(validated).includes(0)) {
      console.log('nope');
    } else {
      let reviewBody =  {
        product_id: productId,
        rating: 5,
        summary: summary,
        body: body,
        recommend: recommend,
        name: name,
        email: email,
        photos: [],
        characteristics: newCharacteristics,
      }
      console.log(reviewBody);
      axios.post('/reviews', reviewBody)
    }
  }

  return (
    <>
    <Backdrop />
    <Modal>
      <h1>Write Your Review</h1>
      <h2>About the {productName}</h2>
      <Input
        placeholder="Example: Best purchase ever!"
        value={summary}
        onChange={() => setSummary(event.target.value)}
      />
      <Input
        placeholder="Why did you like the product or not?"
        value={body}
        onChange={() => setBody(event.target.value)}
        width={'90%'}
        height={'500px'}
      />
      {body.length < 50 ? `Minimum required characters left: [${50 - body.length}]` : `Minimum reached`}
      <Input
        placeholder="Example: jackson11!"
        value={name}
        onChange={() => setName(event.target.value)}
      />
      For privacy reasons, do not use your full name or email address
      <Input
        placeholder="Example: jackson11@email.com"
        value={email} onChange={() => setEmail(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Photo URLs"
        value={photos}
        onChange={() => setPhotos(event.target.value)}
      />

      <FlexContainer
          direction="row"
          align="center"
          justify="center"
        >

        <FlexContainer
          direction="column"
          align="left"
          justify="space-between"
        >
          <span>Would you recommend this product?</span>
        </FlexContainer>
        <FlexContainer
          direction="column"
          align="left"
          justify="space-between"
        >
          <span>Yes</span>
          <div id="recommend-yes">
          <input
            type="radio"
            name="recommend"
            value="true"
            onChange={() => setRecommend(Boolean(event.target.value))}
          />
          </div>
        </FlexContainer>

        <FlexContainer
          direction="column"
          align="left"
          justify="space-between"
        >
        <span>No</span>
        <div id="recommend-no">
          <input type="radio" name="recommend" value="false" onChange={() => setRecommend(Boolean(event.target.value))}/>
        </div>
        </FlexContainer>

      </FlexContainer>
      {Object.keys(characteristics).map((characteristic) => (
        <div
          key={characteristic}
          id="characteristics"
          onChange={() => handleCharacteristicChange(String(event.target.id), parseInt(event.target.value))}
          >
          {`${characteristic} `}
          1
          <input type="radio" id={characteristics[characteristic].id} value="1" name={characteristic} />
          2
          <input type="radio" id={characteristics[characteristic].id} value="2" name={characteristic} />
          3
          <input type="radio" id={characteristics[characteristic].id} value="3" name={characteristic} />
          4
          <input type="radio" id={characteristics[characteristic].id} value="4" name={characteristic} />
          5
          <input type="radio" id={characteristics[characteristic].id} value="5" name={characteristic} />
        </div>
      ))}
      <button type="submit" onClick={() => handleReviewSubmit()}>Submit</button>
      <button type="button" onClick={() => onDiscard(false)}>Discard</button>
      </Modal>
    </>

  );
};

export default AddReview;
