import axios from "axios";
let courseBaseURL =
  "https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api";
let userBaseURL = "https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api";
class AdminService {
  static async addUserToCourse(userData) {
    const response = await axios.post(`${userBaseURL}/user/course`, userData);
    console.log(response);
    console.log("envioo");
    return response.data;
  }
}

export default AdminService;
