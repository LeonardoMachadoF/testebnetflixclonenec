import styled from "styled-components";

export const MovieRowImages = styled.div<{ width: number }>`
    display: flex;
    width: ${(props) => props.width * 150}px;
    flex-wrap: nowrap;
`;

export const RowImage = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
        transform: scale(1);
    }
`;

export const Link = styled.a``;
