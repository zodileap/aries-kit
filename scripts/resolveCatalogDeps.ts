import fs from "fs";
import path from "path";

const repoRoot = path.resolve(__dirname, "..");
const packageJsonPath = path.resolve(repoRoot, "package.json");
const distPackageJsonPath = path.resolve(repoRoot, "dist", "package.json");

const readJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const pkg = readJson(packageJsonPath);

const output = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  license: pkg.license,
  repository: pkg.repository,
  homepage: pkg.homepage,
  bugs: pkg.bugs,
  keywords: pkg.keywords,
  sideEffects: pkg.sideEffects,
  publishConfig: pkg.publishConfig,
  main: pkg.main,
  module: pkg.module,
  types: pkg.types,
  typings: pkg.typings,
  style: pkg.style,
  exports: pkg.exports,
  files: pkg.files,
  dependencies: pkg.dependencies,
  peerDependencies: pkg.peerDependencies,
};

fs.mkdirSync(path.dirname(distPackageJsonPath), { recursive: true });
fs.writeFileSync(distPackageJsonPath, JSON.stringify(output, null, 2) + "\n");
