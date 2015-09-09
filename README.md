# Quick Blog: The cheetah of blogs

## What makes Quick Blog so fast?
- Lunr.js as a search engine for finding blog posts
- No bloat. Let's get content to our users quickly and painlessly
- Bittorrent ---- Wha?

## Current Project Status
This is an *in development* peice of software. I plan on having a prototype
up and running by 09/16/15. If I don't, sorry!

## Development Setup
To setup quick-blog for developing you'll need to install a few global dependencies:
- Node.js
- grunt-cli: for build step
- mocha: for testing

Once you have those installed, just navigate to the home directory of the project and run:

      $ npm install .

And you're done!  Run `node index.js` and you've got the app running.

Note: Check `/lib/config/index.js` for port and configuration information 
