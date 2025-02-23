import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  width: 100%;
  height: 100%;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  img {
    flex: 0.5;
    width: 50%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 1rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: ${(props) => (props.top ? "2rem" : "1.3rem")};
    width: 100%;
  }

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
