import { ListTemplate } from "./list.template";

export class ListView {
  mount() {
    console.log('Çalıştırıldı');
  }

  unmount() {
    console.log('Kaldırıldı');
  }
  render() {
    return ListTemplate();
  }
}
