import create from "zustand";
import { devtools, persist } from "zustand/middleware";
// presist storing data in local storage

const courseStore = (set) =>
  // set is used to change state
  ({
    // defining the initial state
    courses: [],

    // defining actions, which manipulate the state changes
    addCourse: (course) => {
      set((state) => {
        courses: [course, ...state.courses];
      });
    },
  });
