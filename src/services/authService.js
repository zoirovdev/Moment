import api from "./api.js";



const authService = {
  signIn: async (credentials) => {
    try {
      const response = await api.post('/auth/sign-in', credentials);
      const { token, user } = response.data;
      console.log(response.data.user)
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user._id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signUp: async (userData) => {
    try {
      const response = await api.post('/auth/sign-up', userData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user._id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getMe: async () => {
    try {
      const token = localStorage.getItem("token")
      const userId = localStorage.getItem("userId");
      const response = await api.get(`/users/${userId}`, {
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


export default authService
