import { createSlice } from '@reduxjs/toolkit';

interface AcademicState {
  schedule: any[];
  grades: any[];
  assignments: any[];
  attendance: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: AcademicState = {
  schedule: [],
  grades: [],
  assignments: [],
  attendance: null,
  isLoading: false,
  error: null,
};

const academicSlice = createSlice({
  name: 'academic',
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    setGrades: (state, action) => {
      state.grades = action.payload;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    setAttendance: (state, action) => {
      state.attendance = action.payload;
    },
  },
});

export const { setSchedule, setGrades, setAssignments, setAttendance } = academicSlice.actions;
export default academicSlice.reducer;
