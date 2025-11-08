import { Employment } from 'src/employment/employment.entity';
import { UsersPersonalDetails } from 'src/users-personal-details/users-personal-details.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({type:'varchar',length:10})
  mobileNumber: string;

  @OneToOne(() => UsersPersonalDetails, (details) => details.users, { cascade: true, eager: true })
  @JoinColumn()
  personalDetails: UsersPersonalDetails;

  @OneToOne(() => Employment, (employment) => employment.user, { cascade: true, eager: true })
  @JoinColumn()
  employment: Employment;
}