import { number, string, z } from "zod";

const schema = z.object({
  productName: string().min(1),
  price: number().nonnegative(),
  productType: string().min(1),
});

export default schema;
