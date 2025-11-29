import { Users } from "src/users/users.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    department: string;

    @Column()
    position: string;

    @Column()
    salary: number;

    @OneToOne(() => Users, user => user.employment)
    user: Users;
}