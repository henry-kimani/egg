{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = [
    pkgs.nodejs_22
    pkgs.firebase-tools
    pkgs.pnpm
    pkgs.jdk # For firebase emulators
    pkgs.bun # For testing 
  ];
}
