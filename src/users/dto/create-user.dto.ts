import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({ description: "Name of a user", example: 'John Doe' })
    name: string;
}
