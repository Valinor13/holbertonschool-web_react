import $ from "jquery";
import _ from "lodash";
import "../css/body.css";

const p1 = $(`<p>Holberton Dashboard</p>`);
const p2 = $(`<p>Dashboard data for the students</p>`);
const b1 = $(`<div id="button">
                <button>Click here to get started</button>
                <p id="count"></p>
              </div>`);

const html = [p1, p2, b1];

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
