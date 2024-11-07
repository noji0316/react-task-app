import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoard, IList, ITask } from '../../types';
import { setModalData } from './modalSlice';
import { board } from '../../App.css';

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

type TAddBoardAction = {
    board: IBoard;
}

type TDeleteListAction = {
    boardId: string;
    listId: string;
}

type TAddListAction = {
    boardId: string;
    list: IList;
}

type TAddTaskAcion = {
    boardId: string;
    listId: string;
    task: ITask;
}

type TDeleteTaskAction = {
    boardId: string;
    listId: string;
    taskId: string;
}

type TDeleteBoardAction = {
    boardId: string;
}

type TSortAction = {
    boardIndex: number;
    dropableIdStart: string;
    dropableIdEnd: string;
    dropableIndexStart: number;
    dropableIndexEnd: number;
    draggableId: string;
}

const initialState: TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: "list-0",
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-0",
                            taskName: "Task 1",
                            taskDescription: "Description",
                            taskOwner: "caleb"
                        },
                        {
                            taskId: "task-1",
                            taskName: "Task 2",
                            taskDescription: "Description",
                            taskOwner: "caleb"
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    tasks: [
                        {
                            taskId: "task-3",
                            taskName: "Task 3",
                            taskDescription: "Description",
                            taskOwner: "caleb"
                        }
                    ]
                }
            ]
        }
    ]
}

const boardSlice =  createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        },

        deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
            state.boardArray = state.boardArray.filter(
                board => board.boardId !== payload.boardId
            )
        }

        addList: (state, {payload}: PayloadAction<TAddListAction>) => {
            state.boardArray.map(board => 
                board.boardId === payload.boardId
                ? {...board, lists: board.lists.push(payload.list)}
                : board
            )

        },

        addTask: (state, {payload}: PayloadAction<TAddTaskAcion>) => {
                state.boardArray.map(board =>
                    board.boardId === payload.boardId
                    ? {
                        ...board,
                        lists: board.lists.map(list =>
                            list.listId === payload.listId
                            ? {
                                ...list, 
                                tasks: list.tasks.push(payload.task)
                            }
                            : list
                        )
                    }
                )
        },

        updateTask: (state, {payload}: PayloadAction<TAddTaskAcion>) => {
                state.boardArray = state.boardArray.map(board => 
                    board.boardId === payload.boardId
                    ?
                    {
                        ...board,
                        lists: board.lists.map(list =>
                            list.listId === payload.listId
                            ?
                             {
                                ...list,
                                tasks: list.tasks.map(task =>
                                    task.taskId ===  payload.task.taskId
                                    ? payload.task
                                    : task
                                )
                             }
                            :
                            list
                        )
                    }
                )
        },

        deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
            state.boardArray = state.boardArray.map(board => 
                board.boardId === payload.boardId 
                ? 
                {
                    ...board,
                        lists: board.lists.map(list => 
                            list.listId === payload.listId
                            ? {
                                ...list,
                                tasks: list.tasks.filter(
                                    task => task.taskId !== payload.taskId
                                )
                            }
                            : list
                        )
                }
                :
                board
            )

        }
        
        deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
            state.boardArray = state.boardArray.map(
                board =>
                board.boardId === payload.boardId
                ?
                {
                    ...board,
                    lists: board.lists.filter(
                        list => list.listId !== payload.listId
                    )
                }
                :
                board
            )
        },
        
        setModalActive: (state, {payload}: PayloadAction<boolean>) => {
            state.modalActive = payload
        },

        sort: (state, {payload}: PayloadAction<TSortAction>) => {

        }
    }
})


export const { sort, deleteBoard, addBoard, deleteList, deleteTask, updateTask, setModalActive, addList, addTask } = boardSlice.actions;
export const boardsReducer = boardSlice.reducer;