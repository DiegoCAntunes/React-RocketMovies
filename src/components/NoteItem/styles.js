import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.GRAY_300};

    border: ${({theme, isNew})=> isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({theme})=> theme.COLORS.RED};
    }
    .button-add{
        color: ${({theme})=> theme.COLORS.ORANGE};
    }

    > input {
        padding: 12px;
        color: ${({theme})=> theme.COLORS.WHITE};
        background: transparent;
        width:100%;
        border: none;

        &::placeholder{
            color: ${({theme})=> theme.COLORS.GRAY_300};
        }
    }
`