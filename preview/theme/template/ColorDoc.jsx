import React from 'react';

class ColorDoc extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  renderColorPalette() {
    const colors = [
      'blue',
      'purple',
      'cyan',
      'green',
      'magenta',
      'pink',
      'red',
      'orange',
      'yellow',
      'volcano',
      'geekblue',
      'lime',
      'gold',
    ];
    const levels = new Array(10).fill(0).map((o, idx) => idx + 1);
    return (
      <div>
        <h2>Palette</h2>
        <div className="color-palette">
          {colors.map(color => (
            <div key={color} className="palette-item">
              {levels.map(level => (
                <div
                  key={`${color}-${level}`}
                  className={`color-item palette-${color}-${level}`}
                  style={level > 4 ? { color: '#fff' } : null}
                >
                  {color}-{level}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Colors</h1>
        {this.renderColorPalette()}
      </div>
    );
  }
}

export default ColorDoc;
