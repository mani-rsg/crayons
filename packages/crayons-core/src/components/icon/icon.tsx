import { Component, Prop, State, Watch, h } from '@stencil/core';

// Icons Object
//import icons from './icon-assets/icons.json';

@Component({
  tag: 'fw-icon',
  styleUrl: 'icon.scss',
  assetsDirs: ['icon-assets'],
  shadow: true,
})
export class Icon {
  /**
   * Identifier of the icon. The attribute’s value must be a valid svg file in the repo of icons (assets/icons).
   */
  @Prop() name: string;

  /**
   * Size of the icon, specified in number of  pixels.
   */
  @Prop() size = 12;

  /**
   * Color in which the icon is displayed, specified as a standard CSS color or as a HEX code.
   */
  @Prop() color = '';

  @Prop() path = '';

  @State() svgHTML = '';

  @Watch('name')
  private async setSVGState(iconName: string) {
    const prefix = `crayonsIcon`;
    const name =
      prefix +
      iconName
        .split('-')
        .map((n) => n[0].toUpperCase() + n.substring(1))
        .join('');

    // if (!this.path) {
    //   const iconModule = await import(
    //     `crayons-icons/dist/build/complete-icon-set`
    //   );
    //   console.log(name);
    //   console.log(iconModule[name]);
    //   const svgText = iconModule[name]?.data;

    //   this.svgHTML = svgText;
    // }

    if (!this.path) {
      const iconModule = await fetch(`../icons/${iconName}.svg`).then((res) =>
        res.text()
      );

      //import(`crayons-icons/dist/build/complete-icon-set`);
      //console.log(name);
      //console.log(iconModule[name]);
      const svgText = iconModule;

      this.svgHTML = svgText;
    } else {
      console.log('AA ', name);
      const iconModule = await fetch(this.path).then((res) => res.text());
      const svgText = iconModule;
      console.log('text ', svgText);
      this.svgHTML = svgText;
    }
  }

  componentWillLoad() {
    this.setSVGState(this.name);
  }

  render() {
    return (
      <div
        class='icon'
        style={{
          '--icon-color': `${this.color}`,
          'height': `${this.size}px`,
          'width': `${this.size}px`,
        }}
        innerHTML={this.svgHTML}
      />
    );
  }
}
