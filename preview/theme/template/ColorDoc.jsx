import React from 'react';

class ColorDoc extends React.PureComponent {
  colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];

  renderColorCircle() {
    return (
      <div>
        <h2>Color Circle</h2>
        <div className="color-circle">
          {this.colors.map((color, idx) => (
            <div key={color} className={`color-item circle-${idx} palette-${color}-6`}>
              {color}
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderColorPalette() {
    const levels = new Array(10).fill(0).map((o, idx) => idx + 1);
    return (
      <div>
        <h2>Palette</h2>
        <div className="color-palette">
          {this.colors.map(color => (
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
        {this.renderColorCircle()}
        {this.renderColorPalette()}
      </div>
    );
  }
}

export default ColorDoc;
