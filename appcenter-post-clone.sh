#!/usr/bin/env bash
brew update && brew install node
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
detox build
