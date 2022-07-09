export interface IPokemon {
  name: string;
  url: string;
  id: string;
  isRemove: boolean;
  nickName?: string;
}

export interface INickName {
  name: string;
  nickName: string;
  setNickName: any;
  handleSave: () => void;
}
