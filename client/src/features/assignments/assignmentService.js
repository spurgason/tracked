import axios from "axios";

const API_URL = "api/assignments";

// Create Goal

const createAssignment = async (assignmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, assignmentData, config);

  return response.data;
};

const getAssignments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteAssignment = async (assignmentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + assignmentId, config);

  return response.data;
};

const assignmentService = {
  createAssignment,
  getAssignments,
  deleteAssignment,
};

export default assignmentService;
