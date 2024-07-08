export default()=>({
    jwt:{
        secret : process.env.JWT_SECRET
    },
    databases:{
        host : process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        pass : process.env.DATABASE_PASSWORD,
        db : process.env.DATABASE_NAME,

    }
});