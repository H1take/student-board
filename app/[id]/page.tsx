import students from "../../data/students.json";
import StudentProfile from "@/components/StudentProfile";
import studentProfile from "@/components/StudentProfile";
const page = ({ params }: { params: { id: string } }) => {
    const student = students.find((student) => student.id === +params.id);

    return <StudentProfile student={student} />
};

export default page;