import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getTodo } from './api';
import { TodoForm } from './TodoForm';
import { updateTodo } from './api';
import { useHistory } from 'react-router';

export const EditTodo = () => {
    const match = useRouteMatch();
    const [todo, setTodo] = useState();
    const history = useHistory();
    
    useEffect(() => {
        const fetchTodo = async () =>{
            const todo = await getTodo(match.params.id)
            setTodo(todo)
        }   
        fetchTodo()
    }, [])

    const onSubmit = async (data) =>{
        await updateTodo(data, match.params.id)
        history.push("/")
    }

    return todo ? (
        <div className="container">
            <div className="mt-3">
                <h3> Edit Todo Item</h3>
                <TodoForm todo={todo} onSubmit={onSubmit}/>
            </div>
        </div>
    ): ( 
        <div>Loading</div>
    )
};