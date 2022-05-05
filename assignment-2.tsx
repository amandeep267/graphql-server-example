

const{ApolloServer,gql}=require('apollo-server')


 const data = require("./data.js");

// console.log(data);
const typeDefs=`
type Employee
{
    id:Int!
    firstName:String!
    lastName:String!
    email:String!
    password:String!

}
type Query{

hello(name:String):String!
getEmployees:[Employee]!
getEmployee(id:Int):Employee!

}
type Mutation{
    deleteEmployee(id:Int!):[Employee]!
    addEmployee(input:addEmployeeInput!):[Employee]!
    updateEmployee(id:Int!,input:updateEmployee!):[Employee]!
}
input addEmployeeInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}
input updateEmployee{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}

`
const resolvers={
    Query:
    {
       hello : (_, {name},{data}) => `Hello ${name}|world`,

       getEmployees: async (parent,args,{data}) => {
      // const response = await require("./data.js");
        return data;}
        , 
        getEmployee:(parent,args,{data})=>{

           //  const response = await require("./data.js");
              return data.find((employee)=>args.id===employee.id)  ;
        }
       
    },
    Mutation:{
    deleteEmployee:(parent,args,{data}) => {
data=data.filter((employee)=>employee.id!==args.id)
return data;

    } ,
    addEmployee:(_parent,args,{data}) => {
const newEmployee={
     id : parseInt((Date.now()/Math.floor(Math.random() * 100000)).toString()),
    ...args.input
}
data.push(newEmployee);
return data;

    },
    
    updateEmployee:(parent,{id,input},{data})=>{
        const index=data.findIndex((employee)=>employee.id===id);

        data[index]={
           ...data[index],
            ...input

        }
        return data;


    }
    }

};


const server = new ApolloServer({ typeDefs, resolvers,context:{
    data
} });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);;
});

