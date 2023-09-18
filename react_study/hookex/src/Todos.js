import { memo } from "react";

// useCallbackApp에서 전달받은 todos와 addTodo 함수를 재사용
const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
        </>
    ); 
};

// Todos의 렌더링 결과를 메모이징 함
export default memo(Todos);