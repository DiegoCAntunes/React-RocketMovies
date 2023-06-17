import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    color: ${({theme}) => theme.COLORS.LETTER_400};
    background-color: ${({theme}) => theme.COLORS.RED};

    border-radius: 8px;
    height: 48px;
    border: 0;
    padding: 0 32px;
    font-weight: 400;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 6px;

    &:disabled{
        opacity: 0.5;
    }
`