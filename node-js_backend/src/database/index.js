import { createUserByEmail } from "../controllers/users/createUserByEmailAndPasssword.js";

const users = [
  {
    email: "rocky@mail.com",
    password: "123456",
  },
  {
    email: "alexandre@mail.com",
    password: "123456",
  },
  {
    email: "lucas@mail.com",
    password: "123456",
  },
  {
    email: "adair@mail.com",
    password: "123456",
  },
];

const bluebirds = [{}];
const computerds = [{}];
const printers = [{}];
const toners = [{}];
const tas = [{}];

const createMocData = async (list) => {
  await list.map((elem) => {
    createUserByEmail(elem);
  });
};
await createMocData(users);
