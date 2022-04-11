import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Backdrop } from '../styled/ReviewModal.styled';
import FlexContainer from '../styled/FlexContainer.styled';
import TextContainer from '../styled/TextContainer.styled';
import Divider from '../styled/Divider.styled';
import Input from '../styled/Input.styled';
import Chart from '../Characteristics';
import GenerateStarSelection from '../GenerateStarSelection';

const AddReview = ({ productId, characteristics, productName, onDiscard }) => {
  // Rating hovered and selected
  const [ratingHovered, setRatingHovered] = useState(0);
  const [ratingSelected, setRatingSelected] = useState(0);

  // Input values
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristicRatings, setCharacteristicRatings] = useState(characteristics);

  // Check if there was a failed submission (to show error message)
  const [failedSubmission, setFailedSubmission] = useState(false);

  // Input validation tracker
  const [validated, setValidated] = useState({
    rating: 0,
    summary: 0,
    body: 0,
    recommend: 0,
    name: 0,
    email: 0,
    characteristics: 0,
  });

  // Input validation check
  const validateInputs = () => {
    if (ratingSelected !== 0) {
      validated.rating = 1;
    } else {
      validated.rating = 0;
    }
    if (summary.length > 0) {
      validated.summary = 1;
    } else {
      validated.summary = 0;
    }
    if (body.length > 50) {
      validated.body = 1;
    } else {
      validated.body = 0;
    }
    if (recommend === true || recommend === false) {
      validated.recommend = 1;
    } else {
      validated.recommend = 0;
    }
    if (name.length > 0) {
      validated.name = 1;
    } else {
      validated.name = 0;
    }
    if (email.length > 0) {
      validated.email = 1;
    } else {
      validated.email = 0;
    }
    if (Object.keys(characteristicRatings).filter(key => characteristicRatings[key].score > 0).length === Object.keys(characteristics).length) {
      validated.characteristics = 1;
    } else {
      validated.characteristics = 0;
    }
    setValidated({ ...validated })
  };

  // Handle characteristic selection
  const handleCharacteristicChange = (characteristic, value) => {
    characteristicRatings[characteristic].score = value;
    characteristicRatings[characteristic].meaning = Chart[characteristic.toLowerCase()][value];
    setCharacteristicRatings({ ...characteristicRatings })
  };

  // Handle review submission
  const handleReviewSubmit = () => {
    validateInputs();
    if (Object.values(validated).includes(0)) {
      setFailedSubmission(true);
    } else {
      let formatCharacteristics = {};
      Object.keys(characteristicRatings).forEach(key => {formatCharacteristics[characteristics[key].id] =  characteristicRatings[key].score});
      let reviewBody = {
        product_id: productId,
        rating: ratingSelected,
        summary,
        body,
        recommend,
        name,
        email,
        photos: [],
        characteristics: formatCharacteristics,
      };
      console.log(reviewBody);
      axios.post('/reviews', reviewBody);
    }
  };

  return (
    <>
      <Backdrop onClick={() => onDiscard(false)} />
      <Modal width="1000px">
        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
        <b>Write Your Review</b >
        {`About the ${productName}`}
        </FlexContainer>
        <TextContainer
          width="100%"
          left="125px"
        >
          <b>Summary</b>
        </TextContainer>
        <FlexContainer
          direction="row"
          justify="center"
          gap="50px"
        >
          <Input
            placeholder="Example: Best purchase ever!"
            value={summary}
            onChange={() => setSummary(event.target.value)}
          />
          <FlexContainer
            align="center"
            direction="row"
            justify="center"
            gap="10px"
            width="20%"
          >
            <TextContainer width="300px">
            <b>{`Select a rating*: `}</ b>
            </TextContainer>
            <GenerateStarSelection
              rating={ratingHovered}
              onHover={setRatingHovered}
              onClick={setRatingSelected}
              ratingSelected={ratingSelected}
            />
          </FlexContainer>
        </FlexContainer>
        <TextContainer
          width="100%"
          left="125px"
        >
          <b>Body*</b>
        </TextContainer>
        <FlexContainer
          direction="column"
          align="center"
          gap="0"
        >
          <textarea
            placeholder="Why did you like the product or not?"
            value={body}
            onChange={() => setBody(event.target.value)}
            cols="100"
            rows="10"
          />
        </FlexContainer>
        <TextContainer
          width="100%"
          left="125px"
        >
          {body.length < 50 ? `Minimum required characters left: [${50 - body.length}]` : 'Minimum reached'}
        </TextContainer>
        <FlexContainer
          direction="columnz"
          justify="center"
          gap="0"
        >
          <FlexContainer
            direction="column"
            align="center"
            gap="0"
            margin="5px 0 0"
          >
            <TextContainer
              width="100%"
              left="125px"
            >
              <b>Name*</b>
            </TextContainer>
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
            <TextContainer
              width="100%"
              left="125px"
            >
              <b>Email*</b>
            </TextContainer>
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
          margin="0 0 15px"
        >
          For privacy reasons, do not use your full name or email address
        </FlexContainer>
        <FlexContainer
          direction="column"
          align="center"
          gap="0"
          margin="0 0 15px"
        >
          <input
            type="file"
            placeholder="Photo URLs"
            value={photos}
            multiple
            onChange={() => setPhotos(event.target.value)}
          />
        </FlexContainer>


        <FlexContainer
          direction="row"
          justify="center"
          gap="0"
          margin="0 0 15px"
        >
          <b>Would you recommend this product?*</b>
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
          gap="15px"
        >
          {Object.keys(characteristicRatings).map((characteristic) => (
            <div>
              <Divider />
              <FlexContainer
                direction="row"
                justify="center"
                width="100%"
                gap="6px"
                margin="0"
              >
                <b>{`${characteristic}*: `}</b>
                {characteristicRatings[characteristic].score === undefined ? 'none selected' : (characteristicRatings[characteristic].meaning)}
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
                    <FlexContainer
                      direction="column"
                      align="center"
                      justify="space-evenly"
                      width="150px"
                      gap="50"
                    >
                      <input
                        type="radio"
                        id={characteristic}
                        value={key}
                        name={characteristic}
                      />
                      {key == 1 || key == 5 ? (<span>{Chart[characteristic.toLowerCase()][key]}</span>) : null}
                    </FlexContainer>
                  </div>
                ))}
              </FlexContainer>

            </div>
          ))}
        </FlexContainer>
        <FlexContainer
          direction="row"
          justify="center"
          gap="15px"
        >
          <button type="submit" onClick={() => handleReviewSubmit()}>Submit</button>
          <button type="button" onClick={() => onDiscard(false)}>Discard</button>
        </FlexContainer>

        {failedSubmission && Object.keys(validated).filter(key => {return validated[key] === 0}).length > 0? <TextContainer color="red" width="100%">{`Missing fields: ${Object.keys(validated).filter(key => {return validated[key] === 0}).toString().replaceAll(',', ', ')}`}</TextContainer> : null}

      </Modal>
    </>
  );
};

export default AddReview;
