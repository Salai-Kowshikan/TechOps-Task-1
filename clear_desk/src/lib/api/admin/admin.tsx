import axios from "axios";

export const getComplaintStats = async () => {
  const res = await axios.get("/api/admin/stats");
  return res.data;
};

export const getComplaints = async () => {
  const res = await axios.get("/api/admin/complaints");
  return res.data;
};
