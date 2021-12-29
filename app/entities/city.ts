import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Weather from "./weather";

@Entity()
export default class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  state!: string;

  @Column({ length: "2" })
  countryCode!: string;

  @OneToMany(() => Weather, weather => weather.city)
  history!: Weather[];
}