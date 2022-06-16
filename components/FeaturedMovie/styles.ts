import styled from "styled-components";

export const Container = styled.div<{ backgroundImage: string }>`
    width: 100%;
    height: 80vh;
    background-image: ${(props) => props.backgroundImage};
    background-position: center;
    background-size: cover;
    justify-content: center;

    @media (max-width: 768px) {
        height: 70vh;
    }
`;

export const VerticalFeatured = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, rgb(17, 17, 17) 10%, transparent 90%);
`;

export const HorizontalFeatured = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, rgb(17, 17, 17) 30%, transparent 70%);
`;

export const MovieInfoArea = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;

    @media (max-width: 768px) {
        padding-bottom: 50px;
        padding-right: 15px;
    }
`;

export const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 35px;
        margin-bottom: 15px;
    }
`;

export const Data = styled.div``;

export const DataRow = styled.div<{ color?: string }>`
    display: inline-block;
    margin-right: 15px;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => (props.color ? `${props.color}` : "#fff")};
`;

export const Overview = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: rgb(153, 153, 153);
    max-width: 40%;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 16px;
        margin-top: 20px;
    }
`;

export const Buttons = styled.div`
    margin-top: 15px;
`;

export const Button = styled.button`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:first-child {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }
    &:nth-child(2) {
        background-color: rgb(51, 51, 51);
        color: rgb(255, 255, 255);
    }

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 12px 20px;
        margin-top: 20px;
    }
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: rgb(153, 153, 153);
`;
