import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.propcanvas ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const Signature = styled.canvas`
  border: 1px solid black;
  width: 500px;
  height: 300px;
`;
