var versionsToDocument = ["5.0", "6.0", "latest"];

var { spawnSync } = require("child_process");
var { writeFileSync } = require("fs");

function installPackage(version) {
  const versionToUse = /^[0-9.^~]+$/.test(version) ? "~" + version : version;
  const package = `decentraland-ecs@${versionToUse}`;
  console.log(`> npm rm decentraland-ecs`);
  spawnSync("npm", ["rm", "decentraland-ecs"]);
  console.log(`> npm install ${package} --no-save`);
  spawnSync("npm", ["install", package, "--no-save"]);
}

function copyDocs(version) {
  const target = `docs-${version}`;
  try {
    console.log(`> rm -rf ${target}`);
    spawnSync("rm", ["-rf", target]);
  } catch (_) {}
  console.log(`> cp -a node_modules/decentraland-ecs/docs/ ${target}`);
  spawnSync("cp", ["-a", `node_modules/decentraland-ecs/docs/`, target]);
}

function documentPackage(version) {
  console.log(`> ${version}`);
  installPackage(version);
  copyDocs(version);
}

var readme = `
# ECS API Reference
Here is a list of versions of \`decentraland-ecs\`.
${versionsToDocument
  .map((version, ix) => `${ix + 1}. [${version} Reference](docs-${version}/decentraland-ecs.md)`)
  .join("\n")}
`;

versionsToDocument.forEach(documentPackage);

console.log("> Writing README.md");
writeFileSync("README.md", readme);
