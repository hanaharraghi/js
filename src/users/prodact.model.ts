import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Prodact {

    @ObjectIdColumn()
    id: ObjectId
    @Column()
    name: string
    @Column()
    qt: number
    
}