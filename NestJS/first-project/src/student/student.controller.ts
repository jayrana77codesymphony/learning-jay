import { Body, Controller, Delete, Get, Optional, Param, Post, Query, Redirect } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';

@Controller('student')
export class StudentController {
    constructor(private studentService:StudentService) {}
    @Get()
    getAllStudents(){
        return this.studentService.getAllStudent()
    }
    @Get(':id')
    getOneStudent(@Param('id') id:string){
        return this.studentService.getOneStudent(Number(id))
    }
    @Post()
    addStudent(@Body() studentDto:StudentDto){
        return this.studentService.addOneStudent(studentDto)
    }
    @Delete(':id')
    deleteStudent(@Param('id') id:string){
        return this.studentService.deleteStudent(Number(id))
    }
}
