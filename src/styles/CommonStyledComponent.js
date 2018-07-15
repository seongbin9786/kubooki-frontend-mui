import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const SmallRootWithPadding = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 900px;
  padding: 20px;
`;

export const InputTextArea = styled.textarea`
  color: #555;
  border: none;
  resize: none;
  max-height: 100%;
  width: 100%;
  display: block;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: "Nanum Sqaure", sans-serif;
`;

export const GridRootWithMarginBottom = styled(Grid)`
  && {
    height: auto !important;
    margin-bottom: 80px;

    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
  }
`;

export const DarkOverlay = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: black;
  opacity: .3;
`;

export const FullImage = styled.img`
  display: block;
  width: 100%;
`;