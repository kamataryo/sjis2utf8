import { Transform } from "stream";
import iconv from "iconv-lite";

export default class Utf8fyStream extends Transform {
  _transform(chunk, _1, callback) {
    this.push(iconv.encode(iconv.decode(chunk, "Shift_JIS"), "UTF-8"));
    callback();
  }
}
