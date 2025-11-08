import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users } from 'src/users/users.entity';
@Entity()
export class City {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cityName: string;

  @Column()
  state: string;

  @OneToMany(() => Users, user => user.city)
  users: Users[];

}