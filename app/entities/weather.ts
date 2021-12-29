import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import City from "./city";

@Entity()
export default class Weather {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  currentWeather!: number;

  @Column()
  min!: number;

  @Column()
  max!: number;

  @Column()
  condition!: string;

  @ManyToOne(() => City, city => city.history)
  city!: City;

  @Column()
  timestamp!: Date;
}