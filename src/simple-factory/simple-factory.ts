export namespace SimpleFactoryPattern {
  export interface IButton {
    render(): string;
    onClick(callback: (id: number) => void): void;
  }

  export class DefaultButton implements IButton {
    protected id: number;
    protected text: string;
    protected width: number;
    protected height: number;
    protected html: string = "";

    constructor(id: number, text: string, width: number, height: number) {
      this.id = id;
      this.text = text;
      this.width = width;
      this.height = height;
    }

    public render(): string {
      if (!this.html) {
        this.html = `<button 
          style="width:${this.width}px;height:${this.height}px;"
          >
            ${this.text}
          </button>`;
      }

      return this.html;
    }

    public onClick(callback: (id: number) => void): void {
      if (!this.html) {
        throw new Error("[DefaultButton] Button is not rendered!");
      }

      callback(this.id);
    }
  }

  export class ButtonFactory {
    protected static buttonId: number = 1;

    public static createButton(
      text: string,
      width: number,
      height: number
    ): DefaultButton {
      return new DefaultButton(this.buttonId++, text, width, height);
    }
  }
}
