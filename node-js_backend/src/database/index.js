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

const bluebirds = [
  {
    serial_number: "hns1234zxzert/q",
    hostname: "bsbcnf1234",
    sector: "rampa",
    contact_number: "44976564432",
  },
  {
    serial_number: "jkp5678abcd/lmn",
    hostname: "sampmnb876",
    sector: "almoxarifado",
    contact_number: "11987654321",
  },
  {
    serial_number: "ztr2345lkmop/xyz",
    hostname: "poaexmnr234",
    sector: "produção",
    contact_number: "5187654321",
  },
  {
    serial_number: "tuv9876pqrts/hjt",
    hostname: "recpbbr345",
    sector: "expedição",
    contact_number: "2198765432",
  },
  {
    serial_number: "plm5678ghjsf/wer",
    hostname: "spmflkz234",
    sector: "estoque",
    contact_number: "4798765432",
  },
  {
    serial_number: "osd3456ijkqw/yur",
    hostname: "curprtmn678",
    sector: "fábrica",
    contact_number: "1197654321",
  },
  {
    serial_number: "nkw1234ghzfd/abc",
    hostname: "belppkr456",
    sector: "vendas",
    contact_number: "3198765432",
  },
  {
    serial_number: "hmt7890ajsdj/lmn",
    hostname: "forfvhg098",
    sector: "logística",
    contact_number: "2798765432",
  },
  {
    serial_number: "lxt8765khjsd/uvr",
    hostname: "sgramnb123",
    sector: "administrativo",
    contact_number: "4898765432",
  },
  {
    serial_number: "bdf2349qwefj/hrt",
    hostname: "gsmmnbv456",
    sector: "manutenção",
    contact_number: "6198765432",
  },
  {
    serial_number: "vxr1122asxdg/tyu",
    hostname: "recbplm123",
    sector: "financeiro",
    contact_number: "3197654321",
  },
];
const computerds = [
  {
    hostname: "",
    sector: "",
  },
];
const printers = [{}];
const toners = [{}];
const tas = [{}];

const createMocData = async (list) => {
  await list.map((elem) => {
    createUserByEmail(elem);
  });
};
await createMocData(users);
