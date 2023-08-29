import scss from 'rollup-plugin-scss';

export default {
  input: 'packages/index.scss',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    scss({
      fileName: 'reset.min.css',
      outputStyle: 'compressed'
    })
  ],
}
