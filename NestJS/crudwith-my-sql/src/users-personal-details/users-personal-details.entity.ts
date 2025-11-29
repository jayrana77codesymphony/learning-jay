import { Users } from "src/users/users.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersPersonalDetails {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    middleName: string;

    @Column()
    gender: string;

    @Column()
    address: string;

    @OneToOne(() => Users, (user) => user.personalDetails)
    users: Users;
}