import styled from "styled-components";

export const Container = styled.div<{ backgroundImage: string }>`
    width: 100%;
    height: 80vh;
    background-image: ${(props) => props.backgroundImage};
    background-position: center;
    background-size: cover;
    justify-content: center;
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
`;

export const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: #fff;
`;

export const Data = styled.div``;

export const DataRow = styled.div<{ color?: string }>`
    display: inline-block;
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => (props.color ? `${props.color}` : "#fff")};
`;

export const Overview = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: rgb(153, 153, 153);
    max-width: 40%;
`;
