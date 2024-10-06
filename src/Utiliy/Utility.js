import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = GetStoredJobApplication();
  const exist = storedJobApplications.find((jobId) => jobId === id);
  if (!exist) {
    toast("Applied This jobs");
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  } else {
    toast("Already applied This jobs");
  }
};

export { GetStoredJobApplication, saveJobApplication };
