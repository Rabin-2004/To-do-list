import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    description: string;
    completed: boolean;
}

const initialState: Todo[] = [];

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
            const newTodo: Todo = {
                id: state.length + 1, // Auto-generate ID based on the length of the list
                description: action.payload.description,
                completed: action.payload.completed,
            };
            state.push(newTodo);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1); // Remove the todo at the found index
            }
        },
        toggleTodo: (state,action: PayloadAction<number>) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state[index].completed = !state[index].completed;
            }

            if (state[index].completed){
                const completedTodo = state.splice(index, 1)[0];
                state.push(completedTodo);
            }
        }
        
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
