{
  description = "A basic flake for Egg";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { nixpkgs, self }: 
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
  {
      devShells.${system}.dev = ( import ./shell.nix { inherit pkgs; } );
  };
}
