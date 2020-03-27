#!/usr/bin/env node

import { Transform } from "stream";
import iconv from "iconv-lite";

class EncodeStream extends Transform {
  _transform(chunk, _1, callback) {
    this.push(iconv.encode(iconv.decode(chunk, "Shift_JIS"), "UTF-8"));
    callback();
  }
}

process.stdin.pipe(new EncodeStream()).pipe(process.stdout);
