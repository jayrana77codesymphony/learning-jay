import { Controller, Post, Body } from '@nestjs/common';
import { UppercasePipe } from 'src/pipes/uppercase/uppercase.pipe';

@Controller('custom-pipe-testing')
export class CustomPipeTestingController {
    @Post()
    changeNameToUppercase(@Body('name', new UppercasePipe()) name: string) {
        return { message: `Name is :- ${name}` }
    }
}
