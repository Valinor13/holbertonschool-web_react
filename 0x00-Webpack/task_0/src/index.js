import $ from "jquery";

const paragraphs = [p1, p2, p3];
const p1 = $(`<p>Holberton Dashboard</p>`);
const p2 = $(`<p>Dashboard data for the students</p>`);
const p3 = $(`<p>Copyright - Holberton School</p>`);

paragraphs.forEach((p) => ('body').append(p));
