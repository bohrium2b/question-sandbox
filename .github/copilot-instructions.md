# Copilot Instructions for Eduveris Sandbox

## Project Overview
- **Eduveris Sandbox** is a React 18 + TypeScript app for authoring and rendering educational questions, inspired by Khan Academy's Perseus but with a custom whiteboard (Tldraw) and local browser storage.
- Major UI components are in `src/components/`, including:
  - `PerseusRenderer.tsx`: Khan Academy-style question renderer
  - `MultiChoiceEditor.tsx`, `PassageQuestion.tsx`: Custom question editors
  - `Markdown.tsx`: Enhanced markdown rendering
  - `TeX.tsx`: Math rendering
- The app is MUI-based for UI consistency.

## Key Patterns & Conventions
- **Component Structure**: All major UI and logic are React function components in `src/components/`.
- **Question Data**: Questions are stored in the browser (localStorage); no backend integration in this sandbox.
- **Whiteboard Integration**: Tldraw is used for whiteboard features, typically invoked from the question renderer/editor.
- **Styling**: Use MUI theming (`theme.tsx`) and CSS modules (e.g., `PerseusRenderer.css`).
- **Type Safety**: All code is TypeScript; types are in `types.ts`.
- **Storybook**: Stories for components are in `src/components/stories/` for isolated UI testing.

## Developer Workflows
- **Build/Dev**: Use Vite for fast dev/build. Start with `pnpm dev`.
- **Testing**: No formal test suite; use Storybook stories for manual component validation.
- **Debugging**: Use browser devtools; inspect localStorage for question data.
- **Adding Components**: Place new React components in `src/components/`, add stories in `src/components/stories/`.

## Integration & External Dependencies
- **Khan Academy Perseus**: Integrated via `PerseusRenderer.tsx` (see file for usage patterns).
- **Tldraw**: Used for whiteboard; see how it's invoked in question editors/renderers.
- **MUI**: All UI should use MUI components and theming.

## Examples
- See `MultiChoiceEditor.tsx` for custom question editing logic.
- See `PassageQuestion.stories.tsx` for example usage and manual testing.
- See `theme.tsx` for theming conventions.

## Tips for AI Agents
- Prefer composition over inheritance for new UI features.
- Follow the file/folder structure for new features.
- Reference existing stories for usage patterns.
- Keep all logic TypeScript-typed and colocate types in `types.ts` if shared.

---
For more, see [README.md](../README.md) and component files in `src/components/`.
