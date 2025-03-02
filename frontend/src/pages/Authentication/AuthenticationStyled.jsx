import styled from 'styled-components'

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    
    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`

export const Section = styled.section`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 550px;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signin" ? "blue" : "white")};
    color: ${(props) => (props.type === "signup" ? "blue" : "white")};

    h2 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`