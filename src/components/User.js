import styled from "styled-components";

export default function User({ image }) {
  return (
    <Container>
      <UserImage src={image} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 18px;
`;

const UserImage = styled.img`
  height: 51px;
  width: 51px;
  object-fit: cover;
  border: 1px solid #5A5A5A;
  border-radius: 50%;
`;
