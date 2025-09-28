let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-unstable";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShell {
  packages = [
    pkgs.nodejs_20
    pkgs.firebase-tools
    pkgs.pnpm
    pkgs.jdk # For firebase emulators
    pkgs.bun # For testing 
  ];
}
