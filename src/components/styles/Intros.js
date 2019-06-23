import styled from "styled-components";

export const CarPreview = styled.img`
  float: left;
  border-left: 3px solid white;
  height: 154px;
  width: 232px;
  box-sizing: content-box;

  &:first-of-type {
    border-left: none;
  }

  @media (max-width: 480px) {
    height: 100px;
    width: 150px;
  }

  @media (max-width: 740px) {
    &:nth-of-type(2) {
      display: none;
    }
  }

  @media (max-width: 960px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

export const Row = styled.div`
  margin: 3px 0;
`;

export const RowMessage = styled.div`
  height: 154px;
  font-weight: 200;
  font-size: 1.1em;
  color: white;
  overflow: hidden;
  padding: 75px 10px;
  display: flex;
  align-items: center;
  border-left: 3px solid white;
  background-color: ${props => `${props.background}`};

  @media (max-width: 480px) {
    height: 100px;
    padding: 50px 10px;
  }
`;
