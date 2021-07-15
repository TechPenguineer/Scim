#!/usr/bin/env bash

require = require('esm')(module /*, options*/);
require('../cli/scim_cli').cli(process.argv);
