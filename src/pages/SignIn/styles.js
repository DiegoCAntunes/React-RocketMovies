import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.svg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -25px;

    >h1{
        color: ${({theme}) => theme.COLORS.RED};
        font-size: 48px;
        font-weight: 700;
        line-height: 63px;
    }

    >p{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.GRAY_SUBTITLE};
        margin-bottom: 35px;
    }

    >strong{
        display: block;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;

        margin-bottom: 35px;
    }

    >Button{
        margin-top: 24px;
    }

    >a{
        display: block;
        text-align: center;
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.RED};
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`