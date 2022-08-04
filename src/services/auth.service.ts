const logout = () => {
  localStorage.clear();
};

const login = async (data: any): Promise<any> => {

  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        resolve(true); // Login successfull
      }
    } catch (error) {
      localStorage.clear();
      reject(error);
    }
  })
};

const authService = {
  logout,
  login
};

export default authService;