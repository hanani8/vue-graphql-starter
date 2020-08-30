//utility module lodash
const graphql = require('graphql')
const _ = require("lodash")
const Book = require('./models/books')
const Author = require('./models/authors')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')



//Obj type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        pages: { type: GraphQLInt },
        author: {
            type: AuthorType,
            resolve(parentValue, args) {
                // return _.find(authors, {id: parentValue.authorId})
                return Author.findById(parentValue.authorID)
            }
        }

    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue, args) {
                //  return _.filter(books, {authorId: parentValue.id})
                return Book.find({ authorID: parentValue.id })
            }
        }

    })
})

// Root Query to jump into the graph 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parentValue, args) {
                //code to specify which data to get from  database
                return Book.findById(args.id)

            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue, args) {
                return Book.find({})

            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parentValue, args) {
                return Author.findById(args.id)
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parentValue, args) {
                //  return all authors
                return Author.find({})
            }
        }
    }

})

//Mutation Query
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                gender: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age,
                    gender: args.gender
                });
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                pages: { type: new GraphQLNonNull(GraphQLInt) },
                authorID: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    pages: args.pages,
                    authorID: args.authorID
                });
                return book.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})