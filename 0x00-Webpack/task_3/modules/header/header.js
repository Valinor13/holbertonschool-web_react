import $ from "jquery";
import "./header.css";

const logo = $(`<div id="logo"></div>`);
const h1 = $(`<h1>Holberton Dashboard</h1>`);

const hdr = [logo, h1];

$('body').append(`<header></header>`);
hdr.forEach((element) => $('header').append(element));

console.log('Init header');
