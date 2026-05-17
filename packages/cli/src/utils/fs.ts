import * as fs from 'node:fs';
import * as path from 'node:path';
import type { CompApiRes } from '../types.js';

export function hasPackage(name: string): boolean {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8')
    ) as { dependencies?: Record<string, string>; devDependencies?: Record<string, string> };

    return !!(pkg.dependencies?.[name] || pkg.devDependencies?.[name]);
}

export function getComponentDir(): string {
    const hasSrc = fs.existsSync(path.join(process.cwd(), 'src'));
    if (hasPackage('next') && hasSrc) return 'src/components/ui';
    return 'components/ui';
}

export function writeComponent(name: string, data: CompApiRes): void {
    const dest = path.join(process.cwd(), getComponentDir(), `${name}.tsx`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, data.source, 'utf-8');
}
