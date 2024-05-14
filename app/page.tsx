import Home from "@/components/Home";
import students from "../data/students.json";

const page = () => {
  return <Home students={students} />
};

export default page;