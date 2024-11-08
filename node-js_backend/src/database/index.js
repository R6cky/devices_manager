import { userRegisterService } from "../services/user.service.js";
import { createBluebirdService } from "../services/bluebird.service.js";
import { createTasService } from "../services/tas.service.js";
import { createPrinterService } from "../services/printer.service.js";
import { createComputerService } from "../services/computer.service.js";
import { createTonerService } from "../services/toner.services.js";

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

const tas = [
  {
    hostname: "tas001",
    wifi_name: "WiFi_Financeiro_01",
  },
  {
    hostname: "tas002",
    wifi_name: "WiFi_Vendas_02",
  },
  {
    hostname: "tas003",
    wifi_name: "WiFi_Marketing_03",
  },
  {
    hostname: "tas004",
    wifi_name: "WiFi_Adm_04",
  },
  {
    hostname: "tas005",
    wifi_name: "WiFi_Design_05",
  },
  {
    hostname: "tas006",
    wifi_name: "WiFi_Tecnologia_06",
  },
  {
    hostname: "tas007",
    wifi_name: "WiFi_RH_07",
  },
  {
    hostname: "tas008",
    wifi_name: "WiFi_Gerencial_08",
  },
  {
    hostname: "tas009",
    wifi_name: "WiFi_Operacional_09",
  },
  {
    hostname: "tas010",
    wifi_name: "WiFi_Suporte_10",
  },
];

const printers = [
  {
    hostname: "printer01",
    ip: "192.168.2.101",
    brand_and_model: "HP LaserJet Pro MFP M428fdw",
    queue_name: "impressao_financeiro",
    sector: "Financeiro",
    toner_name: "HP 58A",
  },
  {
    hostname: "printer02",
    ip: "192.168.2.102",
    brand_and_model: "Brother HL-L8360CDW",
    queue_name: "impressao_vendas",
    sector: "Vendas",
    toner_name: "Brother TN-433",
  },
  {
    hostname: "printer03",
    ip: "192.168.2.103",
    brand_and_model: "Canon imageCLASS MF269dw",
    queue_name: "impressao_marketing",
    sector: "Marketing",
    toner_name: "Canon 051",
  },
  {
    hostname: "printer04",
    ip: "192.168.2.104",
    brand_and_model: "Xerox Phaser 6510",
    queue_name: "impressao_adm",
    sector: "Administrativo",
    toner_name: "Xerox 106R02773",
  },
  {
    hostname: "printer05",
    ip: "192.168.2.105",
    brand_and_model: "Samsung Xpress M2020W",
    queue_name: "impressao_geral",
    sector: "Geral",
    toner_name: "Samsung MLT-D116L",
  },
  {
    hostname: "printer06",
    ip: "192.168.2.106",
    brand_and_model: "Ricoh SP 4510DN",
    queue_name: "impressao_grafico",
    sector: "Design Gráfico",
    toner_name: "Ricoh SP 4510DN",
  },
  {
    hostname: "printer07",
    ip: "192.168.2.107",
    brand_and_model: "Kyocera ECOSYS P5021cdw",
    queue_name: "impressao_teste",
    sector: "TI",
    toner_name: "Kyocera TK-5240",
  },
  {
    hostname: "printer08",
    ip: "192.168.2.108",
    brand_and_model: "Lexmark CS317DN",
    queue_name: "impressao_rh",
    sector: "Recursos Humanos",
    toner_name: "Lexmark C540A1KG",
  },
  {
    hostname: "printer09",
    ip: "192.168.2.109",
    brand_and_model: "Epson EcoTank L3150",
    queue_name: "impressao_biblioteca",
    sector: "Biblioteca",
    toner_name: "Epson 103",
  },
  {
    hostname: "printer10",
    ip: "192.168.2.110",
    brand_and_model: "HP OfficeJet Pro 9015",
    queue_name: "impressao_desenvolvimento",
    sector: "Desenvolvimento",
    toner_name: "HP 912XL",
  },
];

const toners = [
  {
    model: "TN-1200",
    quantity: 15,
  },
  {
    model: "HP 202X",
    quantity: 20,
  },
  {
    model: "Lexmark 802",
    quantity: 10,
  },
  {
    model: "Brother TN-350",
    quantity: 25,
  },
  {
    model: "Canon CRG-046",
    quantity: 18,
  },
  {
    model: "Xerox Phaser 3260",
    quantity: 12,
  },
  {
    model: "Samsung MLT-D111S",
    quantity: 30,
  },
  {
    model: "Ricoh SP 5210DN",
    quantity: 8,
  },
  {
    model: "Kyocera TK-5240",
    quantity: 22,
  },
  {
    model: "Dell 593-11062",
    quantity: 17,
  },
];

const computers = [
  {
    hostname: "comp001",
    ip: "192.168.1.101",
    sector: "Financeiro",
    operational_system: "Windows",
    type: "Desktop",
  },
  {
    hostname: "comp002",
    ip: "192.168.1.102",
    sector: "Vendas",
    operational_system: "Linux",
    type: "Laptop",
  },
  {
    hostname: "comp003",
    ip: "192.168.1.103",
    sector: "Marketing",
    operational_system: "Windows",
    type: "Desktop",
  },
  {
    hostname: "comp004",
    ip: "192.168.1.104",
    sector: "TI",
    operational_system: "Linux",
    type: "Laptop",
  },
  {
    hostname: "comp005",
    ip: "192.168.1.105",
    sector: "Administrativo",
    operational_system: "Windows",
    type: "Desktop",
  },
  {
    hostname: "comp006",
    ip: "192.168.1.106",
    sector: "Recursos Humanos",
    operational_system: "Linux",
    type: "Desktop",
  },
  {
    hostname: "comp007",
    ip: "192.168.1.107",
    sector: "Design Gráfico",
    operational_system: "Windows",
    type: "Laptop",
  },
  {
    hostname: "comp008",
    ip: "192.168.1.108",
    sector: "Logística",
    operational_system: "Linux",
    type: "Desktop",
  },
  {
    hostname: "comp009",
    ip: "192.168.1.109",
    sector: "Desenvolvimento",
    operational_system: "Windows",
    type: "Laptop",
  },
  {
    hostname: "comp010",
    ip: "192.168.1.110",
    sector: "Suporte",
    operational_system: "Linux",
    type: "Laptop",
  },
];

const createMocData = (list, fn) => {
  for (let i = 0; i < list.length; i++) {
    fn(list[i]);
  }
};

createMocData(users, userRegisterService);
createMocData(bluebirds, createBluebirdService);
createMocData(printers, createPrinterService);
createMocData(tas, createTasService);
createMocData(toners, createTonerService);
createMocData(computers, createComputerService);
