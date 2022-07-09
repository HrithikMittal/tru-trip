export interface IPokemon {
  name: string;
  url: string;
}

export interface INickName {
  name: string;
  nickName: string;
  setNickName: any;
  handleSave: () => void;
}
