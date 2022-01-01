import { Movie } from "../entity/Movie";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

/**
 * DOC, @fabry-js
 * 
 * La seguente pratica è fatta quando si hanno tanti arguments da passare al resolver.
 */
@InputType()
class MovieInput {
  @Field()
  title: string

  @Field(() => Int)
  minutes: number
}

@Resolver()
export class MovieResolver {
  /**
   * Esempio query in gql playground
   * 
   * mutation {
	createMovie(options: {title:"Sium", minutes: 231}) {
    id,
    title, 
    minutes
  }
}
   */
  
  @Mutation(() => Movie)
  async createMovie(
    @Arg("options", () => MovieInput) options: MovieInput,
    ) {
      const movie = await Movie.create(options).save()
      return movie;
  }

  @Mutation(() => Boolean)
  async updateMovie(@Arg("id") id: number,
  @Arg("input", () => MovieInput) input: MovieInput) {
    await Movie.update({ id }, input)
    return true;
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id") id: number){
    await Movie.delete(id);
    return true
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find()
  }
}


/**
 * DOC, @fabry-js
 * 
 * in line 6: Quando si dichiarano gli argomenti con @Arg (decorator)
 * si sta dichiarando l'argument da passare alla Mutation.
 * 
 * Una Mutation è una funzione che va ad apportare una modifica al DB
 * tramite GQL.
 * 
 * Nel dettaglio, il decorator Arg:
 * @Arg("title" ...), il nome dell'argument che viene passato
 * @Arg("title", () => String) il type dell'argument che viene passato
 * 
 * (@Arg("title", ()=> String) title: string) quel title: string dopo le parentesi
 * dichiarano il nome del parametro che andrà ad essere utilizzato 
 * nel codice. (Unito ovviamente alla dichiarazione del type dato che siamo in TypeScript LUL.)
 * 
 * Opzionalmente, possiamo omettere la prima parte del decorator e fare in modo che venga
 * preso automaticamente (type infer)  
 */