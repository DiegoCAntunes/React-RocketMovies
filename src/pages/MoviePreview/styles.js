import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    overflow-y: hidden;

    >main{
        display: block;
        height: 80vh;
        overflow-y: auto;
        padding: 40px clamp(5px, 15px + 5vw, 123px);

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

        div:first-of-type{
            display: flex;
            align-items: baseline;
            gap: 20px;
            margin-bottom: 24px;

            h1{
                font-weight: 500;
                font-size: 36px;
                line-height: 47px;
            }

            svg{
                width: auto;
                height: 20px;
            }
        }

        >div:nth-child(3){
            display: flex;
            margin-bottom: 40px;
            gap: 8px;
            align-items: center;

            >img{
                border-radius: 50%;
                height: 16px;
                width: 16px;
            }

            >svg{
                color: ${({theme})=> theme.COLORS.RED};
            }
        }

        >.Tags{
            span{
                background-color: ${({theme})=> theme.COLORS.RED_TAG};
            }
            margin-bottom: 40px;
        }

        >p{
            text-align: justify;
            margin-bottom: 16px;
        }

        >button{
            color: ${({theme})=> theme.COLORS.RED};
            background-color: ${({theme})=> theme.COLORS.BLACK};
        }
    }

`