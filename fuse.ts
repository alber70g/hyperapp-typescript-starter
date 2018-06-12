import { FuseBox, WebIndexPlugin } from 'fuse-box';
import { TypeHelper } from 'fuse-box-typechecker';

const typeHelper = TypeHelper({
  tsConfig: './tsconfig.json',
  basePath: '.',
  name: 'TS Typechecker',
  // tsLint: './tslint.json',
  tsConfigOverride: {},
});
typeHelper.runWatch('./src');

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [WebIndexPlugin()],
});

fuse.dev(); // launch http server
fuse.bundle('app').instructions(' > index.tsx').hmr().watch();
fuse.run();
