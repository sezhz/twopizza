import belissima from "../img/belissima.png";
import bravissimo from "../img/bravissimo.png";
import chetyiresyira from "../img/chetyire-syira.png";
import chicken from "../img/chiken.png";
import deliczio from "../img/deliczio.png";
import gavajskaya from "../img/gavajskaya.png";
import gitemarmelatto from "../img/gite-marmelatto.png";
import kasiotore from "../img/kasiotore.png";
import laki from "../img/laki.png";
import perfetto from "../img/perfetto.png";
import salyami from "../img/salyami.png";
import sicziliya from "../img/sicziliya.png";

const pizzaData = [
  {
    imgSrc: belissima,
    title: "Белiсiмо",
    description: "соус, сир, орегано, шинка, печерицi, оливки, цибуля",
    sizes: [
        {diameter: '24см', oldPrice: '150', price: '127'},
        {diameter: '30см', oldPrice: '240', price: '204'},
        {diameter: '45см', oldPrice: '440', price: '374'},
    ],
  },
  {
    imgSrc: bravissimo,
    title: "Бравiссiмо",
    description: "соус, сир, орегано, ковбаса, печерицi",
    sizes: [
        {diameter: '24см', oldPrice: '145', price: '123'},
        {diameter: '30см', oldPrice: '235', price: '200'},
        {diameter: '45см', oldPrice: '425', price: '361'},
    ],
  },
  {
    imgSrc: chetyiresyira,
    title: "Чотири сиру",
    description: "моцарелла, фета, дор блю, пармезан, вершковий соус",
    sizes: [
        {diameter: '30см', price: '460'},
        {diameter: '45см', price: '550'},
    ],
  },
  {
    imgSrc: chicken,
    title: "Чiкен",
    description: "соус, сир, орегано, курка, ананаси",
    sizes: [
        {diameter: '24см', oldPrice: '145', price: '123'},
        {diameter: '30см', oldPrice: '250', price: '212'},
        {diameter: '45см', oldPrice: '440', price: '374'},
    ],
  },
  {
    imgSrc: deliczio,
    title: "Делiцiя",
    description:
      "соус, сир, орегано, фарш яловичий, ковбаса, перець, кукурудза, табаско",
      sizes: [
        {diameter: '35см', oldPrice: '390', price: '331'},
        {diameter: '45см', oldPrice: '500', price: '425'},
    ],
  },
  {
    imgSrc: gavajskaya,
    title: "Гавайська",
    description: "соус, сир, орегано, шинка, ананаси",
    sizes: [
        {diameter: '24см', oldPrice: '150', price: '127'},
        {diameter: '30см', oldPrice: '240', price: '204'},
        {diameter: '45см', oldPrice: '440', price: '374'},
    ],
  },
  {
    imgSrc: gitemarmelatto,
    title: "Гiта-Мармелатто",
    description: "соус, сир, орегано, ковбаса, балик, перець, табаско",
    sizes: [
        {diameter: '24см', oldPrice: '145', price: '123'},
        {diameter: '30см', oldPrice: '225', price: '191'},
        {diameter: '45см', oldPrice: '420', price: '357'},
    ],
  },
  {
    imgSrc: kasiotore,
    title: "Касiоторе",
    description: "соус, сир, орегано, мисливські ковбаски, мариновані огірки",
    sizes: [
        {diameter: '35см', oldPrice: '350', price: '297'},
        {diameter: '45см', oldPrice: '450', price: '382'},
    ],
  },
  {
    imgSrc: laki,
    title: "Лакi",
    description: "соус, сир, орегано, курка, перець, кукурудза",
    sizes: [
        {diameter: '24см', oldPrice: '145', price: '123'},
        {diameter: '30см', oldPrice: '240', price: '204'},
        {diameter: '45см', oldPrice: '420', price: '357'},
    ],
  },
  {
    imgSrc: perfetto,
    title: "Перфетто",
    description:
      "соус, сир, орегано, мисливські ковбаски, шинка, курка, помідори",
      sizes: [
        {diameter: '24см', oldPrice: '150', price: '127'},
        {diameter: '30см', oldPrice: '245', price: '208'},
        {diameter: '45см', oldPrice: '460', price: '391'},
    ],
  },
  {
    imgSrc: salyami,
    title: "Салямi",
    description: "соус, сир, орегано, ковбаса, цибуля",
    sizes: [
        {diameter: '24см', oldPrice: '140', price: '119'},
        {diameter: '30см', oldPrice: '225', price: '191'},
        {diameter: '45см', oldPrice: '415', price: '353'},
    ],
  },
  {
    imgSrc: sicziliya,
    title: "Сiцiлiя",
    description: "соус, сир, орегано, курка, печериці, помідори",
    sizes: [
        {diameter: '24см', oldPrice: '145', price: '123'},
        {diameter: '30см', oldPrice: '235', price: '200'},
        {diameter: '45см', oldPrice: '420', price: '357'},
    ],
  },
];

export default pizzaData;
