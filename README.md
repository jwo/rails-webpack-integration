# Rails/Webpack Integration

## Node Installed

Make sure that you have node installed on your system. You can
run `node -v` in your terminal, currently, I am running Node 5.10.0

```
node -v
v5.10.0
```

## Setup package.json

In your project root, run `npm init` to create a package.json file in the
root of your Rails project. The command will walk you through the creating
a new package.json file.

## Install NPM dependencies

Run the following script to setup the core dependencies required to use
webpack to compile your javascript files.

```
npm install --save babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 webpack
```

You also need to install webpack-dev-server as a development dependency, so run the
following command.

`npm install --save-dev webpack-dev-server`

## Setup Webpack config file

Take a look at the `webpack.config.babel.js` file located in the root of the project.
It is a pretty basic configuration, so you should be able to just copy it over
to your project. I have included some comments to give some more info on what the
items in the configuration file are doing.

## Setup the .babelrc file

Babel is very modular, so to tell it which features to load, you need to include a
`.babelrc` file. You can copy over the existing .babelrc file that is in the
root folder of this project.

## Intermission # 1

Let's see if it works, open your terminal and open a couple of tabs. On one tab,
you can start your Rails server (`rails s`) and on the other tab you can start
the Webpack dev server (`webpack -wc --config webpack.config.babel.js`)

In your frontend/main.js file add the following line:

```
console.log("Yo, it works!")
```

Now when you visit your Rails app in your browser, you should see "Yo, it works!"
in your console view.

## Lets make starting the dev-server for webpack a little easier

While you can start the webpack dev server manually, it gets a little old having
to type out that long command. Fortunately, npm allows us to define custom
scripts. In your `package.json` file, add the following to the scripts object:

```
"start-dev": "webpack -wc --config webpack.config.babel.js"
```

You should now be able to start the webpack dev server by typing the following
command:

`npm run start-dev`

## Clean up git commits

You will notice that you are now have a folder called node_modules in your root
folder. You want to make sure that you aren't loading all those files into your
version control, so add the following line to your `.gitignore` file.

`node_modules`

It is also a good idea to not include your generated bundle.js file in source,
so go ahead and add this line as well to your `.gitignore` file:

`app/assets/javascripts/react/*`
