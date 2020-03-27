# @kamataryo/utf8fy

A stream to decode as SHIFT_JIS and encode as UTF-8.

## Usage

```shell
$ cat shift_jis.text | npx @kamataryo/utf8fy | utf-8.text
```

```javascript
import Utf8fyStream from "@kamataryo/utf8fy";
process.stdin.pipe(new Utf8fyStream()).pipe(process.stdout);
```
