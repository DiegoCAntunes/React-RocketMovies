import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    overflow-y: hidden;
`

export const Form = styled.form`
    padding: 40px clamp(5px, 15px + 5vw, 123px);
    width: 100%;
    height: 80vh;
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

    >a{
        display: block;
        color: ${({theme})=> theme.COLORS.RED};
        margin-bottom: 24px;
    }

    >h1{
        margin-bottom: 30px;
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
    }

    >textarea{
        width: 100%;
        height: 274px;

        background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        color: ${({theme})=> theme.COLORS.WHITE};

        border: none;
        resize: none;

        margin-bottom: 30px;
        border-radius: 10px;
        padding: 16px;


        &::placeholder{
            color: ${({theme})=> theme.COLORS.GRAY_300};
        }
    }

    >div{
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 30px;

    }

    >h2{
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({theme})=> theme.COLORS.GRAY_100};
        margin-bottom: 24px;
    }

    >.dark{
        background-color: ${({theme})=> theme.COLORS.BLACK};
        padding: 16px;
        border-radius: 8px;
        height: 88px;
        justify-content: flex-start;
        gap: 24px;

        >div{
            margin-bottom: 0;
        }
    }    
`