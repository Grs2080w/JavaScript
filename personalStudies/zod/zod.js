const z = require("zod");

const schema = z.object({
  name: z.string(),
  email: z.string().email().includes("outlook.com"),
  password: z.string().min(6),
});

let obj = {
  name: "Sergio",
  email: "Sergio@outlook.com",
  password: "123456",
};

let res = schema.safeParse(obj);

console.log(res);

let array = z.array(z.number());
let safe = array.safeParse([1, 2, 3, 4, 5, 6]);
console.log(safe);
