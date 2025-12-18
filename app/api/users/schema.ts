import z, { string } from "zod";

const schema = z.object({
  name: string().min(3),
});

export default schema;
