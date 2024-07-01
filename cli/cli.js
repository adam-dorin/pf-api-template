const { Command } = require("commander");
const fs = require("fs");
const fsp = require("node:fs/promises");
const path = require("node:path");

const program = new Command();

program.name("api-utils").description("CLI api ops").version("1.0.0");

program
  .command("postbuild")
  .description("move assets and env to dist folder")
  .action(() => {
    console.log("executing postbuild script");
    fs.copyFileSync("./.env", "./dist/.env");
  });

program
  .command("clean")
  .description("clear dist folder")
  .action(async () => {
    try {
      const directory = "./dist";
      for (const file of await fsp.readdir(directory)) {
        await fsp.unlink(path.join(directory, file));
      }
    } catch (error) {
      if (error.code === "ENOENT") {
        return console.log("dist folder already clean");
      }
    }
  });

program
  .command("generate-secret")
  .description("generate a secret key")
  .action(() => {
    console.log("generating secret key");
    const secret = require("crypto").randomBytes(64).toString("hex");
    console.log(secret);
  });
  
program.parse(process.argv);
