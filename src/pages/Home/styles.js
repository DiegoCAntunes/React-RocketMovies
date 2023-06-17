import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px 133px auto;
    grid-template-areas: 
    "header"
    "text"
    "content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const TextHead = styled.div`
    justify-content: space-between;
    display: flex;
    grid-area: text;
    align-items: center;
    padding: 0 clamp(5px, 15px + 5vw, 123px);

    >div{
        max-width: 207px;
    }
`

export const Content = styled.div`
    grid-area: content;

    margin: 0 clamp(5px, 15px + 5vw, 123px);
    overflow-y: auto;

    &::-webkit-scrollbar-track{
        background-color: transparent;
    }

    &::-webkit-scrollbar{
        background-color: transparent;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #FF859B;
        border-radius: 8px;
    }
`
