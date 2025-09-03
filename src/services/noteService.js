import api from "./api.js";




const token = localStorage.getItem('token');


const noteService = {
  getAllNotes: async () => {
    try {
      const response = await api.get("/notes");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getNoteById: async (id) => {
    try {
      const response = await api.get(`/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
	}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createNote: async (noteData) => {
    try {
      console.log(noteData)
      const response = await api.post('/notes', noteData, {
        headers: {
          Authorization: `Bearer ${token}`
	}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateNoteById: async (noteData, noteId) => {
    try {
      const response = await api.put(`/notes/${noteId}`, noteData, {
        headers: {
          Authorization: `Bearer ${token}`
	}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteNoteById: async (id) => {
    try {
      const response = await api.delete(`/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
	}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}


export default noteService;
