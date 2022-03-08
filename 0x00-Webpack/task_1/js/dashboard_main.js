import $ from "jquery";

const p1 = $(`<p>Holberton Dashboard</p>`);
const p2 = $(`<p>Dashboard data for the students</p>`);
const b1 = $(`<button onclick="updateCounter()">Click here to get started</button>`);
const p3 = $(`<p id='count'></p>`);
const p4 = $(`<p>Copyright - Holberton School</p>`);

const html = [p1, p2, b1, p3, p4];

html.forEach((element) => $('body').append(element));

function updateCounter() {
  let count = $('#count').text();
  count = parseInt(count) + 1;
  $('#count').text(`${count} clicks on the button`);
}
