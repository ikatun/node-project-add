import fs from 'fs';
import glob from 'glob';
import path from 'path';

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export function copyTemplateFiles(cwd: string, templateDir: string, pattern: string) {
  const templatesRoot = path.join(__dirname, '../templates', templateDir);
  const sourceFiles = glob.sync(path.join(templatesRoot, pattern), { dot: true, absolute: true, nodir: true });
  for (const sourceFile of sourceFiles) {
    const destinationFile = path.join(cwd, path.relative(templatesRoot, sourceFile));
    ensureDirectoryExistence(destinationFile);
    fs.copyFileSync(sourceFile, destinationFile);
  }
}
