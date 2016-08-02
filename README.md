# NginX Redirect Writer CLI
[![Build Status](https://travis-ci.org/martin-experiments/nginx-redirect-writer-cli.svg?branch=master)](https://travis-ci.org/martin-experiments/nginx-redirect-writer-cli)

Turn a CSV of new and old URLs into NginX rewrite rules.

## Installation

```
$ npm install -g nginx-redirect-writer-cli
```

## Usage

```
$ nrw <input.csv> <output.conf>
$
$ # Example:
$ nrw my-redirects.csv my-redirects.conf
```

## License

Copyright (c) 2016 Martin Experiments LLC

MIT (https://www.opensource.org/licenses/MIT)
