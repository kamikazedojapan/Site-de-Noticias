import styled from "styled-components";

export const ButtonSpace = styled.button`
    background-color: #fe2c55;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.6rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover {
        background-color: #c40b30;
    }
`;