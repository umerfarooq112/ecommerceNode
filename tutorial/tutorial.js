const mongose = require("mongoose");
const users = require("./User");

mongose.connect("mongodb://localhost:27017/webdevsimplified", () => {
  //   console.log("connected to db");
});

run();
async function run() {
  try {
    // const findUser = await users.findOne({ name: "hamdullah" });
    // const findUser = await users.findById("6362430ffd380ff8d65ef481");
    // const findUser = await users.deleteMany({ name: "hamdullah" });
    // console.log(findUser);
    // const CreateUser = await users.create({
    //   name: "Ali Gul ",
    //   age: 44,
    //   email: "ali@gmail.com",
    //   hobbies: ["hello", 1212],
    // });
    // CreateUser.createdAt = "2020-05-21";
    // CreateUser.save();
    // console.log(CreateUser);

    // const findbyQuery = await users
    //   .where("age")
    //   .eq("44")

    //   .populate("bestFriend")
    //   .limit(1);
    // const findUser = await users.findOne({ name: "hamdullah" });
    const findUser = await users.findByName("hamdullah");

    console.log(findUser.nameAndEmail);
    // findUser.sayHi();
  } catch (e) {
    // console.log(e.message);
  }

  //   const CreateUser = new users({ name: "ali", age: "1500.2" });
  //   await CreateUser.save();
}
