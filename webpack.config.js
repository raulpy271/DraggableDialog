const path = require('path')


module.exports = {
  entry: './lib/Draggable.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Draggable.js',
    library: 'Draggable',
    libraryTarget: 'var'
  },
}
