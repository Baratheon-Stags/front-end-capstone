import styled from 'styled-components';

const Divider = styled.div`
  margin: auto;
  border-bottom: 1px solid #808080;
  width: ${(props) => props.width || '50%'};

`;

export default Divider;
