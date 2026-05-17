import { fetchComponent } from '../utils/registry.js';
import { installDependencies } from '../utils/deps.js';
import { hasPackage, writeComponent, getComponentDir } from '../utils/fs.js';

export async function add(name: string): Promise<void> {
    if (hasPackage('solid-js')) {
        console.error('⚠️  SolidJS detected – only React is supported currently.');
        return;
    }

    if (!hasPackage('react')) {
        console.error('❌ No React installation found. Please set up a React project first.');
        return;
    }

    const data = await fetchComponent(name);
    if (!data) return;

    try {
        installDependencies(data.dependencies);
    } catch (err) {
        console.error(`❌ Failed to install dependencies: ${err instanceof Error ? err.message : err}`);
        return;
    }

    try {
        writeComponent(name, data);
    } catch (err) {
        console.error(`❌ Failed to write component: ${err instanceof Error ? err.message : err}`);
        return;
    }

    console.log(`✅ ${name} → ${getComponentDir()}/${name}.tsx`);
}
