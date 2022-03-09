import $ from "jquery";
import "../css/header.css";

const logo = $(`<div id="logo"></div>`);
const h1 = $(`<h1>Holberton Dashboard</h1>`);

const hdr = [logo, h1];

hdr.forEach((element) => $('header').append(element));

console.log('Init header');
