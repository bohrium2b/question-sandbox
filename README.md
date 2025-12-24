# Eduveris Sandbox

This is a sandbox part of Eduveris, my homebrew assessment solution. Eduveris Sandbox is an educational program for supporting the recording of modern-style educational blackboard-style videos. It uses the same question renderer as Khan Academy, but has a better built-in whiteboard.

## Highlights
 * Feature-rich question editor, both default (Perseus Editor) and custom (MultiChoice editor and PassageQuestion editor).
 * Question storage in local browser
 * Question renderer with whiteboard (Tldraw)
 * MUI-based UI

## Technical Details

 * Built in React 18 only with Typescript
 * *PerseusRenderer* - the Khanacademy Perseus Renderer component with already a UI, hints support, dependencies, etc.
 * *Markdown* - a React Markdown renderer for more complete markdown rendering :)
 * *QuestionEditor