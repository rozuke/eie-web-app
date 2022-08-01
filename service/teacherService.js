import axios from "axios";
let courseBaseURL =
  "https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api";
let activityBaseURL =
  "https://kfaiqnrzja.execute-api.sa-east-1.amazonaws.com/api";
class TeacherService {
  static async getCourses(teacherId) {
    const courses = await axios.get(
      `${courseBaseURL}/teacher/${teacherId}/courses`
    );

    return courses.data;
  }

  static async postNewForum(courseId, forumData) {
    const response = await axios.post(
      `${activityBaseURL}/course/${courseId}/activity/newForum`,
      forumData
    );
    return response.data;
  }
  static async putNewForum(courseId, forumId, forumData) {
    const response = await axios.put(
      `${activityBaseURL}/course/${courseId}/activity/forum/${forumId}`,
      forumData
    );
    return response.data;
  }

  static async deleteForum(courseId, forumId) {
    const response = await axios.delete(
      `${activityBaseURL}/course/${courseId}/activity/forum/${forumId}`
    );
    return response.data;
  }

  static async getStudentsResultsByCourse(courseId) {
    const response = await axios.get(
      `${courseBaseURL}/course/${courseId}/students-result`
    );
    return response.data;
  }

  static async getAllActivitiesByCourse(courseId) {
    const response = await axios.get(
      `${activityBaseURL}/course/${courseId}/activities`
    );
    return response.data;
  }

  static async getAllCommentsByForum(courseId, forumId) {
    const response = await axios.get(
      `${activityBaseURL}/course/${courseId}/foro/${forumId}/comments`
    );
    return response.data;
  }
}

export default TeacherService;
