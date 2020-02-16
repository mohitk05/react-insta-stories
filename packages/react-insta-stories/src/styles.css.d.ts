declare namespace StylesCssModule {
  export interface IStylesCss {
    "sk-scaleout": string;
    spinner: string;
  }
}

declare const StylesCssModule: StylesCssModule.IStylesCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesCssModule.IStylesCss;
};

export = StylesCssModule;
