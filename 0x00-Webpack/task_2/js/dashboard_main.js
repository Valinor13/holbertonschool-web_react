import $ from "jquery";
import _ from "lodash";
import "../css/main.css"

const p1 = $(`<p>Holberton Dashboard</p>`);
const p2 = $(`<p>Dashboard data for the students</p>`);
const b1 = $(`<button>Click here to get started</button>`);
const p3 = $(`<p id="count"></p>`);
const p4 = $(`<p>Copyright - Holberton School</p>`);

const html = [p1, p2, b1, p3, p4];

html.forEach((element) => $('body').append(element));

function updateCounter() {
  const countSplit = $('#count').text().split(' ');
  let count;
  if (!countSplit[0]) {
    count = '0';
  } else {
    count = countSplit[0];
  }
  count = parseInt(count) + 1;
  $('#count').text(`${count} clicks on the button`);
};

$('button').click(_.debounce(updateCounter, 1000, { 'leading': true, 'trailing': false }));
