# Contributing to jsx-daisyui

Thank you for your interest in contributing to jsx-daisyui! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to be respectful and constructive in all interactions. We welcome contributions from everyone, regardless of experience level.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or your preferred package manager
- Git
- Basic familiarity with React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Clone the repository**

   ```bash
   git clone https://github.com/Elamin-svg/jsx-daisyui.git
   cd jsx-daisyui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the project**

   ```bash
   npm run build
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## Project Structure

```
jsx-daisyui/
├── apps/                 # Demo and documentation applications
├── packages/
│   └── cli/             # Main CLI tool for adding components
├── registry/            # Component library (60+ components)
│   ├── data-display/
│   ├── effects/
│   ├── feedback/
│   ├── forms/
│   ├── layout/
│   └── navigation/
├── scripts/             # Build and utility scripts
├── tests/               # Test files
└── vitest.config.ts     # Vitest configuration
```

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear title describing the bug
- A detailed description of the problem
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Your environment (Node.js version, OS, etc.)
- Screenshots or code examples if applicable

### Suggesting Features

Feature suggestions are welcome! Please open an issue with:

- A clear title
- Description of the proposed feature
- Use cases and examples
- Why this feature would be valuable to the project

### Submitting Pull Requests

1. **Fork the repository** on GitHub

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

   or for bug fixes:

   ```bash
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Write clear, descriptive commit messages
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

4. **Run tests and build**

   ```bash
   npm test
   npm run build
   ```

   Ensure all tests pass and the build succeeds.

5. **Push your changes**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Reference any related issues
   - Describe your changes clearly
   - Explain the motivation and context
   - Provide screenshots or examples if relevant

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code structure and patterns
- Use clear, descriptive variable and function names
- Keep components focused and single-responsibility

### Component Development

When adding or modifying components:

1. **Maintain daisyUI compatibility** - Ensure all components work with daisyUI v5
2. **Use Tailwind CSS classes** - No inline styles or CSS-in-JS
3. **Type everything** - Provide proper TypeScript types for all props
4. **Document props** - Include JSDoc comments explaining component props
5. **Support accessibility** - Follow WCAG guidelines and use semantic HTML

Example component structure:

```typescript
import React, { ReactNode } from 'react';

interface ButtonProps {
  /** Button label or content */
  children: ReactNode;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * A button component built with daisyUI and Tailwind CSS
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  }[variant];

  return (
    <button
      className={`btn ${variantClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Testing

- Write tests for all new components and utilities
- Use Vitest for unit testing
- Aim for good test coverage
- Include both positive and negative test cases

Example test structure:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant class correctly', () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('btn-secondary');
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### Commit Messages

Write clear, descriptive commit messages:

- Use the imperative mood ("add feature" not "added feature")
- Be specific about what changed
- Reference related issues when applicable
- Keep the first line under 50 characters
- Add more details in the body if needed

Examples:

```
add Button component with variant support

- Create Button component with primary/secondary/outline variants
- Add unit tests with 100% coverage
- Document prop types and usage

Closes #123
```

### Documentation

- Update relevant documentation when making changes
- Add comments for complex logic
- Include examples in component docstrings
- Update CHANGELOG.md with significant changes

## Running Tests and Builds

### Commands

```bash
# Run tests once
npm test

# Run tests in watch mode
npm test:watch

# Build the project
npm run build
```

### Before Submitting

Always run these checks before submitting a pull request:

```bash
npm test
npm run build
```

## Commit Guidelines

Include the Co-authored-by trailer in your commits when collaborating:

```
git commit -m "your message

Co-authored-by: Name <email@example.com>"
```

## Review Process

1. We review all pull requests promptly
2. We may request changes or ask for clarification
3. Please be responsive to feedback
4. Once approved, your PR will be merged

## Release Process

- Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- Changes are documented in CHANGELOG.md
- Releases are tagged in git

## Questions or Need Help?

- Open an issue for questions or discussions
- Check existing issues for similar topics
- Reach out on GitHub

## License

By contributing to jsx-daisyui, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to jsx-daisyui! We appreciate your time and effort in making this project better. 🎉
