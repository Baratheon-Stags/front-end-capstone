import styled from 'styled-components';

const CardImage = styled.div`
  background-image: url(${(props) => props.url || 'https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80'});
  border: 2px solid green;
  width: 100%;
  height: 65%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

export default CardImage;
