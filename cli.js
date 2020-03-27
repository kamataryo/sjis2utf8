#!/usr/bin/env node
import Utf8fyStream from "./index.js";
process.stdin.pipe(new Utf8fyStream()).pipe(process.stdout);
