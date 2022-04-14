import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps{
    bgColor:string;
    borderColor:string;
};

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color:${(props) => props.bgColor};
    border-radius:100%;
    border:1px solid ${(props) => props.borderColor};
`;

interface CircleProps{
    bgColor:string;
    borderColor?:string;
    text?:string;
};

const Circle = ({bgColor,borderColor,text="default text"}:CircleProps) => {
    // value가 number이거나 string 이거나.. 이렇게쓰일 일은 드물다.
    // const [value,setValue] = useState<number|string>(1);
    // 초기값을 판별해서 value가 number인지 string인지 boolean 등 인지 판별함
    const [value,setValue] = useState(1);
    setValue(2);
    console.log(value);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
    );
}

export default Circle;