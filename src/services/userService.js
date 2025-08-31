import api from "./api.js";


const token = localStorage.getItem('token');


const userService = {
  getAllUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUserById: async (id) => {
    try {
      const response = await api.get(`/users/${id}`, {
        headers: {
	  Authorization: `Bearer ${token}`
	}
      });
      return response.data;
    } catch (error) {
      throw error
    }
  },
}


export default userService;
