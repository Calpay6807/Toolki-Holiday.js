// commentsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Local Storage'dan yorumları almak için bir yardımcı fonksiyon
function getCommentsFromLocalStorage() {
  const commentsJSON = localStorage.getItem("comments");
  return commentsJSON ? JSON.parse(commentsJSON) : null;
}

// Yorumları Local Storage'a kaydetmek için bir yardımcı fonksiyon
function saveCommentsToLocalStorage(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
}

const commentsSlice = createSlice({
  name: "comments",
  initialState: getCommentsFromLocalStorage() || [],
  reducers: {
    addComment: (state, action) => {
      const { name, surname, email, comment } = action.payload;

      // Eğer istediğiniz doğrulamaları eklemek isterseniz burada ekleyebilirsiniz.
      if (name.length < 5 || /\d/.test(name)) {
        alert("Geçersiz isim.");
        return; // Eğer isim uygun değilse yorumu eklemeyi durdurun
      }

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        alert("Geçersiz e-posta adresi.");
        return; // Eğer e-posta geçerli değilse yorumu eklemeyi durdurun
      }

      // Yorumu diziye ekleyin
      state.push({
        name,
        surname,
        email,
        comment,
      });

      // Yorumu yerel depoya kaydedin
      saveCommentsToLocalStorage(state);
    },
    // Başka eylemler burada tanımlanabilir

    deleteComment: (state, action) => {
      const commentIndex = state.findIndex(
        (comment) => comment.id === action.payload
      );
      if (commentIndex !== -1) {
        // Yorumu Redux mağazasından silin
        state.splice(commentIndex, 1);

        // Yorumu yerel depodan da silin
        saveCommentsToLocalStorage(state);
      }
    },
  },
});

export const { addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;
