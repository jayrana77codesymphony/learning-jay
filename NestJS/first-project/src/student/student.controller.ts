import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { HttpExceptionFilter } from 'src/exceptions-filters/http-exception/http-exception.filter';
import { AuthGuardGuard } from 'src/guards/auth-guard/auth-guard.guard';

@Controller('student')
@UseFilters(HttpExceptionFilter)
export class StudentController {
    constructor(private studentService:StudentService) {}
    @Get()
    @UseGuards(AuthGuardGuard)
    getAllStudents(){
        return this.studentService.getAllStudent()
    }
    @Get(':id')
    getOneStudent(@Param('id',ParseIntPipe) id:number){
        const student = this.studentService.getOneStudent(id)
        if(student) return student 
        else throw new HttpException('No Student Found',HttpStatus.NOT_FOUND)
    }
    @Post()
    addStudent(@Body() studentDto:StudentDto){
        return this.studentService.addOneStudent(studentDto)
    }
    @Delete(':id')
    deleteStudent(@Param('id',ParseIntPipe) id:number){
        const deletedStudent = this.studentService.deleteStudent(id)
        return deletedStudent
    }
}
