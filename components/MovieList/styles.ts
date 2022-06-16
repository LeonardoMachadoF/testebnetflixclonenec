import styled from "styled-components";

export const Lista = styled.div`
    margin-left: 30px;
`;

export const Title = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const List = styled.div`
    overflow: hidden;
    &:hover {
        .movierowright,
        .movierowleft {
            opacity: 1;
        }
    }

    @media (max-width: 760px) {
        .movierowright,
        .movierowleft {
            opacity: 1;
        }
    }
`;

export const LeftArrow = styled.div`
    z-index: 99;
    color: #fff;
    position: absolute;
    width: 40px;
    height: 225px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
`;

export const RightArrow = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    color: #fff;
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
`;
