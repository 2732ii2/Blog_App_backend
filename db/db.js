

import mongoose from "mongoose";



export async function connection()
{
    try{
        // var connect=await mongoose.connect("mongodb://localhost:27017/blog_api", {
        //     useUnifiedTopology: true,
        //     useNewUrlParser: true,
        //     });

        var connect = await mongoose.connect(
          "mongodb+srv://Mkhan:mkhan@cluster0.uydprj9.mongodb.net/?retryWrites=true&w=majority",
          {
            useUnifiedTopology: true,
            useNewUrlParser: true,
          }
        );
        console.log("connected db... ");
    }
    catch(err)
    {
        console.log(err);
    }
}










// var pass="Ashad123";
// const URL= `mongodb+srv://Ashad123:${pass}@cluster0.k614zrs.mongodb.net/?retryWrites=true&w=majority`;

// export async function connection ()
// {
//     try
//     {
//         await mongoose.connect(URL, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         });
//         console.log("db as connected");
//     }
//     catch(err)
//     {
//         console.log("the error is comming", err);
//     }

// }



