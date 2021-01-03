const path = require('path')


module.exports = {
  entry: './lib/Draggable.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'Draggable.js',
    library: 'Draggable',
    libraryTarget: 'var'
  },
}
