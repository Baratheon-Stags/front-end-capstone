import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Backdrop } from '../styled/ReviewModal.styled';
import FlexContainer from '../styled/FlexContainer.styled';
import Input from '../styled/Input.styled';
import Chart from '../Characteristics';

const AddReview = ({ productId, characteristics, productName, onDiscard}) => {
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristicRatings, setCharacteristicRatings] = useState(characteristics);
  Object.keys(characteristicRatings).forEach(key => {characteristicRatings[key].value = 0});
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
    if (Object.values(characteristicRatings).length === Object.keys(characteristics).length) {
      validated.characteristics = 1;
    }
    setValidated({ ...validated });
  };

  const handleCharacteristicChange = (characteristic, value) => {
    characteristicRatings[characteristic].value = value;
  };

  const handleReviewSubmit = () => {
    validateInputs();
    if (Object.values(validated).includes(0)) {
      let formatCharacteristics = {};
      Object.keys(characteristicRatings).forEach(key => {formatCharacteristics[characteristics[key].id] =  characteristics[key].value});
      console.log(formatCharacteristics)
      console.log('nope');
    } else {
      let formatCharacteristics = {};
      Object.keys(characteristicRatings).forEach(key => {formatCharacteristics[characteristics[key].id] =  characteristics[key].value});
      let reviewBody = {
        product_id: productId,
        rating: 5,
        summary,
        body,
        recommend,
        name,
        email,
        photos: [],
        characteristics: characteristicRatings,
      }
      console.log(reviewBody);
      axios.post('/reviews', reviewBody);
    }
  };

  return (
    <>
      <Backdrop />
      <Modal>

        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
        <h1>Write Your Review</h1>
        <h2>{`About the ${productName}`}</h2>
        </FlexContainer>

        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
          <Input
            placeholder="Example: Best purchase ever!"
            value={summary}
            onChange={() => setSummary(event.target.value)}
          />
        </FlexContainer>

        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
          <Input
            placeholder="Why did you like the product or not?"
            value={body}
            onChange={() => setBody(event.target.value)}
            width="90%"
            height="200px"
          />
          {body.length < 50 ? `Minimum required characters left: [${50 - body.length}]` : `Minimum reached`}
        </FlexContainer>

        <FlexContainer
          direction="row"
          justify="center"
          gap="0"
        >

          <FlexContainer
            direction="column"
            align="center"
            gap="0"
          >
            <span>Name</span>
            <Input
              placeholder="Example: jackson11!"
              value={name}
              onChange={() => setName(event.target.value)}
            />
          </FlexContainer>

          <FlexContainer
            direction="column"
            align="center"
            gap="0"
          >
            <span>Email</span>
            <Input
              placeholder="Example: jackson11@email.com"
              value={email}
              onChange={() => setEmail(event.target.value)}
            />
          </FlexContainer>



        </FlexContainer>

        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
          For privacy reasons, do not use your full name or email address
        </FlexContainer>

        <FlexContainer
          direction="row"
          justify="center"
        >
          <input
            type="file"
            placeholder="Photo URLs"
            value={photos}
            onChange={() => setPhotos(event.target.value)}
          />
          <span>Would you recommend this product?</span>

          <FlexContainer
            direction="column"
            align="center"
            width="5%"
            gap="0"
          >
            <span>Yes</span>
            <input
              type="radio"
              name="recommend"
              value="true"
              onChange={() => setRecommend(Boolean(event.target.value))}
            />
          </FlexContainer>

          <FlexContainer
            direction="column"
            align="center"
            width="5%"
            gap="0"
          >
            <span>No</span>
            <input
              type="radio"
              name="recommend"
              value="false"
              onChange={() => setRecommend(Boolean(event.target.value))}
            />
          </FlexContainer>

        </FlexContainer>


        <FlexContainer
          direction="column"
          align="center"
          width="100%"
          gap="0"
        >
          {Object.keys(characteristics).map((characteristic) => (
            <div>
              <FlexContainer
                direction="row"
                justify="center"
                width="100%"
                gap="3em"
              >
                {`${characteristic}: `}
              </FlexContainer>

              <FlexContainer
                direction="row"
                justify="space-evenly"
                width="100%"
                gap="50"
                key={characteristic}
                onChange={() => handleCharacteristicChange(String(event.target.id), parseInt(event.target.value))}
              >
                {(Object.keys(Chart[characteristic.toLowerCase()])).map(key => (
                  <div>
                    <span>{key}</span>
                    <input
                      type="radio"
                      id={characteristic}
                      value={key}
                    />
                    {key == 1 || key == 5 ? (<span>{Chart[characteristic.toLowerCase()][key]}</span>) : null}
                  </div>
                ))}

              </FlexContainer>

            </div>
          ))}
        </FlexContainer>

        <button type="submit" onClick={() => handleReviewSubmit()}>Submit</button>
        <button type="button" onClick={() => onDiscard(false)}>Discard</button>
      </Modal>
    </>
  );
};

export default AddReview;
