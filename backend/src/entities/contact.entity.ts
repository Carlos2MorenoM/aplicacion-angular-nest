import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    email: string;

    @Column()
    dirección: string;
}