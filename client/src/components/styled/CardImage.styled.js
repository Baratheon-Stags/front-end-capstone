import styled from 'styled-components';

const CardImage = styled.div`
  background-image: url(${(props) => props.url || 'no image'} );
  border: 2px solid green;
  width: 100%;
  height: 65%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

// ${(props) => props.url} ||

export default CardImage;
