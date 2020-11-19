/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(fromOtherScheema,{input},ctx){
      return ctx.models.Pet.findMany(input);
    },
    pet(fromOtherScheema,{input},ctx){
      return ctx.models.Pet.findOne(input);
    },
    me(fromOtherScheema,{input},ctx){
      return ctx.models.User.findOne(input);
    }
  },
  Mutation: {
    createPet(fromOtherScheema,{input},ctx){
      const userID = ctx.models.User.findOne().id
      return ctx.models.Pet.create({...input, userID});
    }
  },
  Pet: {
    img(pet,args,ctx) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    },
    user(pet,_,ctx){
      return ctx.models.User.findOne();
    },
  },
  User: {
    pets(user,_,ctx){
      return ctx.models.Pet.findMany({userID:user.id});
    },
  }
}
