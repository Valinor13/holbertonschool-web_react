import { schema, normalize } from "normalizr";

const name = new schema.Entity("names");
const credit = new schema.Entity("credits");
const course = new schema.Entity("notifications", {
  name,
  credit,
});

export default function coursesNormalizer(data) {
  return normalize(data, [course]);
}
