import { assertEquals } from "../dev_depts.ts";
import { hello } from "./hello.ts";

Deno.test({
  name: "Should return Hello, Natsir!",
  fn() {
    const name = "naTsiR";

    assertEquals<string>(hello(name), "Hello, Natsir!");
  },
});

Deno.test({
  name: "Should return Hello, Izzuddin Natsir!",
  fn() {
    const name = " izzuddin  naTsiR ";

    assertEquals<string>(hello(name), "Hello, Izzuddin Natsir!");
  },
});
