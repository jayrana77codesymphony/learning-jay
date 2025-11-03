import { Injectable } from '@nestjs/common';
import { StudentInterface } from './interface/student.interface';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private studentData:StudentInterface[]=[
        {id:1,firstName:'jay',lastName:'v',middleName:'rana',age:20}
    ];
    getAllStudent():StudentInterface[] {
        return this.studentData;
    }
    getOneStudent(id:number):StudentInterface | undefined {
        return this.studentData.find(student=>student.id===id);
    }
    addOneStudent(studentDto:StudentDto):StudentInterface{
        const newStudent:StudentInterface = {
            id:this.studentData.length+1,
            ...studentDto
        }
        this.studentData.push(newStudent)
        return newStudent
    }
    deleteStudent(id:number):StudentInterface{
        const studentIdIndex:number = this.studentData.findIndex(student=>student.id===id)
        const deletedStudent = this.studentData.splice(studentIdIndex,1)
        return deletedStudent[0]
    }
}
