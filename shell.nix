{ pkgs }:

pkgs.mkShell {
  packages = [
    pkgs.nodejs_20
    pkgs.firebase-tools
    pkgs.pnpm
    pkgs.jdk # For firebase emulators
    pkgs.bun # For testing 
  ];
}
