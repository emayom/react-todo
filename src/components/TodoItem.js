import React from 'react';
import style, { css } from 'styled-components';

// DONE, DELETE ICONS
import { MdDone, MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    
    /* !hover => diplay:none */
    display: none;
    
    /* hover => diplay */
    &:hover {
      color: #ff6b6b;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    /* 
    TodoItemBlock 위에 hover되면 Remove 컴포넌트 display: initial (CSS 속성을 복원) */

    //Component Selector
    &:hover {
      ${Remove} {
        display: initial;
      }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    //props.done => CheckCircle css 변경
    ${props =>
      props.done &&
      css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
      `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;

    //props.done => Text css 변경
    ${props =>
      props.done &&
      css`
        color: #ced4da;
      `}
`;

function TodoItem({id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>
                {text}
            </Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;