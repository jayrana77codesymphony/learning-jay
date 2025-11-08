import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from 'src/city/city.entity'; 
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

  @Column()
  mobileNumber: number;

  @ManyToOne(() => City, city => city.users,{eager:true})
  @JoinColumn({ name: 'cityId' })
  city: City;

  @Column()
  cityId:number;
}
