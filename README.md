# Installation Guide

1) Install Java (Selenium requires it) `brew tap caskroom/cask && brew install brew-cask && brew cask install java`
2) Checkout current directory `cd tests/functional` and run `npm install`

# Running tests

* Run `npm test` to test all scenarios
* Run `npm test -- <filename>` to test a single feature file, e.g. `npm test -- features/challenges.feature`
* Run `npm run watch` to test all scenarios tagged with `@watch` tag

# Environment specific

* Run `npm test` to test on `local` machine (protipster.dev)
* Run `HOST=beta npm test` to test on `beta`
* Run `HOST=prod npm test` to test on `prod`

# CI Integration

* Install phantomjs `brew install phantomjs`
* Run `npm run ci` (environments supported as well via `HOST=dev|beta|prod` prefix)
* Screenshots are saved on each failure to `.screenshots` dir (gitignored)
* To be run on beta after deploying changes.

# Server Installation

* Install Node.js LTS `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -` and then `sudo apt-get install nodejs`
* Install Java Headless Runtime `sudo apt-get update && sudo apt-get install openjdk-7-jre-headless`
* Install phantomjs  `sudo npm install -g phantomjs`
* Install beta / prod functional tests dependencies `sudo su www-data && cd /var/www/beta/current/tests/functional && npm install && cd /var/www/prod/current/tests/functional && npm install`
* Test with `HOST=prod npm run ci`

# Video Introduction (Chimp)

http://pt-atdd.bitballoon.com/#24_Introduction_video_for_developers

# Chimp.js Tutorial

https://chimp.readme.io/docs/tutorial

# Cheat Sheet

https://chimp.readme.io/docs/cheat-sheet

# Next Steps

* Include as a part of deployment (`npm run ci`)
* Introduce controller that resets test-users to given state
    * E.g. After logging in as incomplete user, filling in profile, uploading avatar, call to `/tests/reset` would revert him back to the initial state
* (Optional) Background to specify resolution (e.g. mobile / tablet / desktop)
