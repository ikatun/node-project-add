import glob from 'glob';
import path from 'path';
import fs from 'fs';

export function copyTemplateFiles(cwd: string, templateDir: string, pattern: string) {
  const templatesRoot = path.join(__dirname, '../../templates', templateDir);
  const sourceFiles = glob.sync(path.join(templatesRoot, pattern), { dot: true, absolute: true });
  for (const sourceFile of sourceFiles) {
    const destinationFile = path.join(cwd, path.relative(templatesRoot, sourceFile));
    fs.copyFileSync(sourceFile, destinationFile);
  }
}
