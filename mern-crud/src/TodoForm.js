import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export const TodoForm = ({ todo, onSubmit }) => {
    const { register, handleSubmit} = useForm({ 
        defaultValues: 
            { 
                text: todo ? todo.text: "" ,
                description: todo ? todo.description: "" 
            }
    });
    const history = useHistory();

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
        history.push("/") 
    });
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="text"
                        id="text"
                        autoComplete="off"
                        {...register("text", {
                            required: "Required",
                        })}
                    />
                <label htmlFor="text">Description</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="description"
                        id="description"
                        autoComplete="off"
                        {...register("description", {
                            required: "Required",
                        })}
                    />
            </div><br/>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save Todo
                </button>
            </div>
        </form>
    );
}