import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Caption = styled.h1`
  color: black;
`;

class Slideritem extends React.Component {
  render() {
    const { id, name, effect } = this.props;
    return (
      <Container className="item" color={name} id={id}>
        <Caption className={effect}>{name.toUpperCase()}</Caption>
      </Container>
    );
  }
}

export default Slideritem;
