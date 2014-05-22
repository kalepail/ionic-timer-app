## Install the App

Look over to the right of this screen. Click "Clone in Desktop" if you have the GitHub App and "Download ZIP" if you'd rather wing it. Or, if you know of such things, just clone it with the url above these two buttons.

Once you've done that you'll need to open the directory in Terminal or whatever your equivalent command line tool is. This can be accomplished by opening Terminal and then dragging the folder onto the Terminal icon or else just `cd` your way into it.

After that it's time to branch into either development or testing. I've built out a pretty robust development environment but if all you're doing is installing the app through Xcode you can just run these next few commands in the Terminal and be done with it.

NOTE: When you see a line break and a new $, that means press return (enter).

**FIRST TIME INSTALLING THE APP**
```bash
$ mkdir platforms
$ ionic platform add ios
$ ionic build ios
```

**JUST UPDATING THE APP**
```bash
$ ionic build ios
```

## Setting up the Development Environment

Be sure you have the latest version of [node installed](http://nodejs.org) so you can run with the awesomesauce. Also be sure you're pointed to the app directory.

```bash
$ mkdir platforms
$ npm install
$ ionic platform add ios
$ ionic build ios
```

Now your system is ready and your app is installed. All that's left is to get gulp watching for changes and pushing them to your server via [LiveReload](http://livereload.com). Thankfully it's just a single command.

```bash
$ gulp watch
```

This just started a server at localhost:8000. Go ahead and navigate there. Now make some JS, Sass or HTML changes.. the browser will update automatically. Development built for kings!

## Resource List

Feel free to use this README for adding any project goals. This will be a living document during development.

- [Ionic Docs](http://ionicframework.com/docs/)