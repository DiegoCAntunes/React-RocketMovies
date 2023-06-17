import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style:solid;
    border-bottom-color:  ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 64px;

    padding-left: clamp(5px, 15px + 5vw, 123px);
    padding-right: clamp(5px, 15px + 5vw, 123px);
`

export const Title = styled(Link)`
    color: ${({theme}) => theme.COLORS.RED};
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 16px;
        line-height: 24px;

        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }

        >span{
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            text-decoration: none;

            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
    }
`


