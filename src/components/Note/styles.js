import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.NOTE_RED};

    border: none;
    border-radius: 16px;

    padding: 32px;
    margin-bottom: 24px;

    >h1{
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    >div{
        display: flex;
        align-items: flex-start;
        margin: 8px 0 15px;
    }

    >p{
        font-weight: 400;
        font-size: 16px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        -webkit-box-align: start;

        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    >footer{
        width: 100%;
        display: flex;
        margin-top: 15px;
    }

`