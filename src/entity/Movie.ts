import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Field(() => Int)
  @Column("int", { default: 60, nullable: true })
  minutes: number
}

/**
 * DOC @fabry-js, 
 * 
 * ... extends BaseEntity, viene dichiarato in modo che la classe, ove venga usata,
 * si possano usare i metodi standard di SQLite, ovvero insert(), remove() ecc...
 * 
 * Nota, in Field
 */