/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ADD_BOARD_INFO } from '../actions/actionTypes';

type PictureMethod = 0 | 1;
/* 
    0: 그림
    1: 사진
*/

type Mood = 0 | 1 | 2 | 3 | 4;
/*
    0: 행복
    1: 좋음
    2: 보통
    3: 우울
    4: 화남
*/

type Lock = 'UNLOCK' | 'LOCK';

export interface board {
  boardInfo: {
    title: string;
    picture: string;
    pictureMethod: PictureMethod;
    mood: Mood;
    lock: Lock;
    content: string;
    date: string;
  }[];
}

const initialState: board = {
  boardInfo: [],
};

const boardReducer = (
  state = initialState,
  action: {
    type: string;
    payload: object;
    accessToken: string;
  }
) => {
  switch (action.type) {
    case ADD_BOARD_INFO:
      return {
        ...state,
        boardInfo: { ...action.payload },
      };
    default:
      return state;
  }
};

export default boardReducer;
